<template>
  <div class="container" ref="container">

    <div class="row-log-container" v-if="logInputsArr.length">
      <template :key='index' v-for="(item, index) in logInputsArr">
        <div class="history">
          <div class="left">[$:root] </div>
          <div class="right">{{ item.runCommoand }}</div>
        </div>
        <div  class="log-item">
          <div class="sub-wrap">
            <component
                :is="item.runStatus === 'success' ? SuccessLog : ErrorLog"
                :info="item.runLog"
            />
          </div>
        </div>
      </template>
    </div>

    <div class="row-log-container" v-if="historyLog.runLog.length">
      <template :key='index' v-for="(item, index) in historyLog.runLog">
        <div class="log">
            <div class="logItem">
              {{ item.commondItem }}
            </div>
        </div>
      </template>
    </div>

    <div class="row-input">
      <span class="position">[$:root]</span>
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
import TerminalService from '../../Service/Terminal'
const terminal = TerminalService.instance()
export default {
  name: "index.vue",

  data() {
    let onInput = ''
    return {
      onInput,
      ErrorLog,
      SuccessLog,
      logInputsArr: [],
      historyInputsArray: [],
      historyLog: {
        runLog: []
      },
    }
  },

  mounted() {
    this.onBaseRegisCommond()
  },

  methods: {
    // 注册一些基础的命令
    onBaseRegisCommond() {
      terminal.regisCommondMap('clear', {
        alias: ['cl', 'cls']
      },_ => {
        this.logInputsArr = []
      })
      terminal.regisCommondMap('history', {
        alias: ['hs', 'his']
      },_ => {
        terminal.getHistory().forEach(item => {
          console.log({item})
          this.historyLog.runLog.push({
            commondItem: item
          })
        })
        console.log(this.historyLog, 'history')
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
        this.onGoPageLast()
        console.log(data)
        this.logInputsArr.push({
          runCommoand: this.onInput,
          runLog: data.log,
          runStatus: data.status,
        })
      } catch (e) {
        console.log(e)
        this.logInputsArr.push({
          runCommoand: this.onInput,
          runLog: e.log,
          runStatus: e.status,
        })
      } finally {
        this.onInput = ''
        console.log(this.historyInputsArray)
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
  outline: 1px solid;
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

    .position {

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
</style>