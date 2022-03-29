<template>
  <div class="home layout">
    <div class="top">
      <div class="l-logo">
        竞技场
      </div>
    </div>
    <div class="main">
      <label for="">这是一个 select:</label>
      <majorSelect
        :options="options"
        v-model="form"
        monitorVarible="hobby"
        :realData="form.hobby"
      ></majorSelect>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import majorSelect from '@/pages/CreateComponent/majorSelect.vue'
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  h,
  ref,
  customRef,
  onMounted,
  watchEffect
} from 'vue'

var log = console.log.bind(console)

export default {
  name: 'index.vue',
  components: {
    majorSelect
  },
  data() {
    return {
      form: {
        hobby: ''
      },
      options: [
        {dictCode: '12', dictName: '货架 12 $'},
        {dictCode: '32', dictName: '货架 32 $'},
        {dictCode: '23', dictName: '货架 23 $'},
        {dictCode: '22', dictName: '货架 22 $'}
      ]
    }
  },
  created() {
    var log = console.log.bind(console)
    log(useRouter(), 1212)
    log(121)
  }
}
</script>

<style scoped>
* {
  /*background-color: rgba(0, 0, 0, .3);*/
}

.l-logo {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 10px;
  font-size: 40px;
  font-weight: bold;
}

.home {
  height: 100%;
}

.top {
  position: fixed;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eee;
  box-shadow: 1px 3px 20px 6px #eee;
}

.slide {
  width: 15%;
  height: 100%;
  border: 1px solid #eee;
  box-shadow: 0 0 13px 0 #eee;
  overflow: scroll;
}

.content {
  width: 80%;
  padding: 30px;
  background-color: #fff;
  overflow: scroll;
}

.main {
  display: flex;
  padding-top: 90px;
  height: 100%;
}

.slide {
  padding-top: 30px;
  border-radius: 3px;
  box-shadow: 0 0 3px 0 #ccc;
}

a {
  text-decoration: none;
  color: unset;
}

.slide-item {
  text-align: center;
}

.slide-item a {
  display: block;
  margin-bottom: 20px;
  color: #999;
  transition: all 1s;
}

.slide-item a:hover {
  color: #353535;
}
</style>
