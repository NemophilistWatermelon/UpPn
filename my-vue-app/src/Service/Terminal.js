class Terminal {
    constructor() {
        // 注册命令行执行方法
        this.commonMap = new Map()
        // 记录命令行的的输入命令
        this.historyCommondList = []
        // 记录命令行的 log 输出
        this.teminalLogMap = new Map()
    }

    static instance(o) {
        return new this(o)
    }

    regisCommondMap(commond, config, func) {
        // 如果配置项有别名那么也会注册别名的命令
        if (config.alias) {
            config.alias.forEach(item => {
                this.commonMap.set(item, func)
            })
        }
        this.commonMap.set(commond, func)
    }

    getHistory() {
        return this.historyCommondList
    }

    runCommondBy(commond, callback) {
        this.historyCommondList.push(commond)
        if (this.commonMap.get(commond)) {
            this.commonMap.get(commond)()
            callback(this.runCommondSuccess(commond))
        } else {
            callback(this.runCommondError(commond))
        }
    }

    runCommondError(commond) {
        return {
            runScript: commond,
            status: 'error',
            info: '运行失败'
        }
    }

    runCommondSuccess(commond) {
        return {
            runScript: commond,
            status: 'success',
            info: '运行成功'
        }
    }

}


export default Terminal