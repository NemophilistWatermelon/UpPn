<template>
  <div class="container" ref="container">

    <div class="row-log-container" v-if="logInputsArr.length">
      <template :key='index' v-for="(item, index) in logInputsArr">
        <!--        普通命令历史 输出的日志-->
        <div class="history" v-if="item.runCommoand">
          <div class="left no-select">~</div>
          <div class="right">{{ item.runCommoand }}</div>
        </div>
        <div  class="log-item">
          <div class="sub-wrap">
            <component
                  v-if="item.runStatus"
                :is="item.runStatus === 'success' ? SuccessLog : ErrorLog"
                :info="item.info"
            />
          </div>
        </div>

<!--        history 输出的日志-->
        <template :key='index' v-for="(history, index) in item.runHistoryLog">
          <div class="log">
            <div class="logItem">
              {{ history.commondItem }}
            </div>
          </div>
        </template>

<!--       music list 音乐列表-->
        <component v-if="item.musicList"
                   :is='MusicList'
                   :searchMusicList="item.musicList">
        </component>

        <!--       说明书组件-->
        <component v-if="item.help"
                   :is='ReadMe'
                   :oHelpData="item.help"
        >
        </component>
      </template>
    </div>

    <div class="row-input">
      <span class="position no-select green">~</span>
      <span class="mk-hk">:</span>
      <input
          v-model="onInput"
          @keydown="onInputKeyPress"
          autofocus
          type="text"
          class="terminal-input"
      >
    </div>
  </div>
</template>

<script>
import ReadMe from './compo/ReadMe.vue'
// 正确调用命令组件
import SuccessLog from "./compo/Success.vue";
// 错误调用命令组件
import ErrorLog from "./compo/Error.vue";
// 音乐列表组件
import MusicList from './compo/MusicList.vue'
// 命令行服务
import TerminalService from '../../Service/Terminal/Terminal'
// 音乐服务
import MusicService from '../../Service/MusicService/index'
// 注册全局键盘事件
import GlobalKeyService from '../../Service/Terminal/RegisGlobalKey'
// 说明书服务
import ReadMeService from '../../Service/Terminal/Readme'

// 调用 API
import Api from './config/Api.js'
// 实例化服务
const terminal = TerminalService.instance()
const musicService = MusicService.instance()
const globalKeyService = GlobalKeyService.instance()
const readMeService = ReadMeService.instance()

export default {
  name: "index.vue",

  data() {
    let onInput = ''
    return {
      ReadMe,
      onInput,
      ErrorLog,
      SuccessLog,
      MusicList,
      logInputsArr: [],
      historyInputsArray: [],
      historyLog: {
        runHistoryLog: []
      },
      SYSTEM_KEY_MAP: {}
    }
  },

  mounted() {
    this.onBaseRegisCommond()
    this.onListenSystemKey()
    this.initSystemKeyBind()
  },

  methods: {
    initSystemKeyBind() {
      globalKeyService.onRegisKey('Control+h', {
        desc: '老板键'
      },() => {
        console.log('run')
        terminal.runCommondBy('cls', (res, err) => {
          console.log({
            res
          })
          if (res) {
            this.logInputsArr = []
          }
        })
      })
    },

    // 注册系统全局的快捷键
    onListenSystemKey() {


    },

    // 注册一些基础的命令
    onBaseRegisCommond() {
      terminal.regisCommondMap('help', {
        desc: '查看帮助'
      },_ => {
        const result = readMeService.getHelp({
          service: {
            terminal,
            globalKeyService
          }
        })
        console.log(result)
        var data = {
          fastKey: {},
          command: {}
        }
        result.regisKey.forEach((item, index) => {
          data.fastKey[index] = item.desc || ''
        })
        result.terminalCommand.forEach((item, index) => {
          data.command[index] = item.desc || ''
        })
        console.log(data)
        this.logInputsArr.push({
          runCommoand: this.onInput,
          help: {
            data
          }
        })
      })

      // 网易云音乐
      terminal.regisCommondMap('net', {
        desc: '网易云音乐帮助键',
        option: {
          '-s': (args) => {
            console.log(args, '关键词')
            musicService.fetchMusicList(args, async (data, error) => {
              if (data) {
                const d = await data.json()
                var o = terminal.runCommondSuccess('net - s' + args, {
                  info: '获取列表成功'
                })
                var oMusicList = Object.assign({}, o,{
                  musicList: d?.result?.songs || []
                })
                console.log({
                  oMusicList: oMusicList
                })
                this.logInputsArr.push(oMusicList)
                return
              }
              if (error) {
                this.logInputsArr.push(terminal.runCommondError('net - s' + args))
              }
            })
          }
        },
      },_ => {
        this.logInputsArr.push({
          runCommoand: this.onInput,
          MusicPlay: true
        })
      })

      // 注册命令 Bing 搜索
      terminal.regisCommondMap('bing', {
        desc: '必应搜索键',
        alias: ['b', 'bi'],
        option: {
          '-s': function(args) {
            window.open(Api.Bing + '?q=' + args)
          }
        }
      },_ => {
        return {}
      })

      // 注册命令 clear
      terminal.regisCommondMap('clear', {
        alias: ['cl', 'cls']
      },_ => {
        this.logInputsArr = []
      })

      terminal.regisCommondMap('info', {
        alias: ['i'],
        desc: '开发者信息命令',
      },_ => {
        return  {
          status: 'success',
          info: 'Autor: QinKai'
        }
      })

      // 注册命令 history
      terminal.regisCommondMap('history', {
        alias: ['hs', 'his'],
        desc: '查看历史信息命令',
        option: {
          '-l': function() {
            return {
              info: '真牛逼'
            }
          }
        },
      },_ => {
        var a = []
        terminal.getHistory().forEach(item => {
          a.push({
            commondItem: item
          })
        })


        this.logInputsArr.push({
          runCommoand: this.onInput,
          runHistoryLog:a
        })

        console.log(this.logInputsArr)
      })
    },


    onRegisCommon() {

    },

    onGoPageLast() {
      const safeHeight = 400
      const container = this.$refs.container
      const offsetHeight = container.scrollHeight + safeHeight
      setTimeout(_ => {
        this.$nextTick(_ => {
          container.scrollTop = offsetHeight
          console.log(container, offsetHeight)
        })
      }, 200)

    },

    onCommandRun(commond) {
      return new Promise((resolve, reject) => {
        terminal.runCommondBy(commond, function(result) {
          if (result.status === 'success') {
            resolve(result)
          } else {
            reject(result)
          }
        })
      })
    },

    async onEnterInput() {
      try {
        var data = await this.onCommandRun(this.onInput)

      } catch (e) {
        console.log(e)
        this.logInputsArr.push({
          runCommoand: e.runCommoand,
          info: e.info,
          runStatus: e.status,
          runHistoryLog: []
        })
      } finally {
        this.onGoPageLast()
        this.onInput = ''
      }

    },

    onInputKeyPress(ev) {
      let key = ev.key
      console.log('press', ev)
      switch (key) {
        // 按下回车键
        case 'Enter':
          this.onEnterInput()
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: calc(100vh - 140px);
  overflow: scroll;

  .row-input {
    display: flex;
    align-items: center;
    padding: 10px;

    .position.green {
      color: #09e309;
    }

    .mk-hk {
      margin-left: 8px;
      display: none;
    }
    .position, .terminal-input, .mk-hk {
      color: var(--half-gray-128);
    }

    .terminal-input {
      font-size: 14px;
      font-family: system-ui, "JetBrains Mono";
      padding: 10px;
      width: 100%;
      outline: none;
      border: none;
      background-color: unset;
    }
  }


  .row-log-container {
    * {
      color: var(--half-gray-128)
    }
    margin-top: 10px;
    padding: 10px;

    .history, .sub-wrap {
      display: flex;
      align-items: center;

      .left {
        margin-right: 10px;
      }

    }

    .sub-wrap {
      display: flex;
      align-items: center;
    }

  }
}
.no-select {
  user-select: none;
}
</style>