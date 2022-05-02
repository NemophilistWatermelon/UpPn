<script>
import Clock from './IconCompoent/Clock.vue';
import Excel from './IconCompoent/Excel.vue';

export default defineComponent({
  name: 'Project',

  setup() {
    const mdRouter = reactive({
      ProjectRoute: [
        {
          title: "即将到来",
          children: [
            {
              title: "JSON TO EXCEL",
              desc: "一个在线工具实现EXCEL导出",
              path: "https://json2excel.vercel.app/",
              icon: Clock
            },
            {
              title: "JSON TO EXCEL",
              desc: "一个在线工具实现EXCEL导出",
              path: "https://json2excel.vercel.app/",
              icon: Excel
            }
          ]
        },
        {
          title: "最新的"
        }
      ]
    })

    function getNewsDetail(url) {
      window.open(url, "_blank");
    }

    return {
      getNewsDetail,
      mdRouter
    }
  },
})
</script>

<template>
  <div class="project_wrap max-full">
    <h1> 项目 </h1>
    <p>我引以为豪的项目清单</p>
    <div class="project_list">
      <div class="project_item" :key="index" v-for="(item, index) in mdRouter.ProjectRoute">
        <template v-if="item?.children?.length">
          <h2>{{ item.title }}</h2>
          <div class="project_item_list">
            <div 
            class="project_item_item"
            :key="idx"
             v-for="(it, idx) in item.children" @click="getNewsDetail(it.path)">
              <div class="project_item_item_icon">
                <component :is="it.icon"></component>
              </div>
              <div class="project_item_item_content">
                <h3>{{ it.title }}</h3>
                <p>{{ it.desc }}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project_wrap {
  .project_item {
    padding-top: 15px;

    .project_item_list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .project_item_item {
        display: flex;
        align-items: center;
        cursor: pointer;
        opacity: 0.5;
        padding: 10px;

        &:hover {
          opacity: 1;
        }

        .project_item_item_icon {
          display: flex;
          font-size: 48px;
        }
      }
    }
  }

}
</style>