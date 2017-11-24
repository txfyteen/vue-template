<template>
  <header class="header">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, key) in tabs" :key="key" :label="item.label" :name="item.name"></el-tab-pane>
    </el-tabs>
  </header>
</template>

<script>
export default {
  name: 'demo-header',
  data () {
    return {
      activeName: 'first',
      tabs: [
        {
          label: 'tab标签一',
          name: 'first'
        },
        {
          label: 'tab标签二',
          name: 'second'
        },
        {
          label: 'tab标签三',
          name: 'third'
        },
        {
          label: 'tab标签四',
          name: 'fourth'
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      switch (tab.index | 0) {
        case 0:
          this.$router.push({name: 'DemoUpload'});
          break;
        case 1:
          this.$router.push({name: 'DemoUpload2'});
          break;
        case 2:
          this.$router.push({name: 'DemoForm'});
          break;
        case 3:
          this.$router.push({name: 'DemoForm2'});
          break;
        default:
          break;
      };
    }
  },
  mounted() {

  }
};
</script>

<style lang="scss">
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 66px;
  background: #fff;
}
</style>
