<template>
  <div class="container" ref="container">

    <div class="row-log-container" v-if="logInputsArr.length">
      <template :key='index' v-for="(item, index) in logInputsArr">
        <!--        普通命令历史 输出的日志-->
        <div class="history" v-if="item.runCommoand">
          <div class="left no-select">[$:root] </div>
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

<!--        template music-->
        <component v-if="item.MusicPlay" :is="Music"></component>
      </template>
    </div>

    <div class="row-input">
      <span class="position no-select">[$:root]</span>
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
import SuccessLog from "./compo/Success.vue";
import ErrorLog from "./compo/Error.vue";
import Music from './compo/Music.vue'
import TerminalService from '../../Service/Terminal/Terminal'
import Api from './config/Api.js'
const terminal = TerminalService.instance()

export default {
  name: "index.vue",

  data() {
    let onInput = ''
    return {
      onInput,
      ErrorLog,
      SuccessLog,
      Music,
      logInputsArr: [],
      historyInputsArray: [],
      historyLog: {
        runHistoryLog: []
      },
    }
  },

  mounted() {
    this.onBaseRegisCommond()
  },

  methods: {
    // 注册一些基础的命令
    onBaseRegisCommond() {
      // 网易云音乐
      terminal.regisCommondMap('net', {
      },_ => {
        this.logInputsArr.push({
          runCommoand: this.onInput,
          MusicPlay: true
        })
      })

      // 注册命令 Bing 搜索
      terminal.regisCommondMap('bing', {
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
        alias: ['i']
      },_ => {
        return  {
          status: 'success',
          info: 'Autor: QinKai'
        }
      })

      // 注册命令 history
      terminal.regisCommondMap('history', {
        alias: ['hs', 'his'],
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
    .position, .terminal-input {
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