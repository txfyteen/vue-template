<template>
  <div class="app">
    <demo-header />
    <demo-sidebar :menu="sidebarMenu"/>
    <div class="main">
      <el-scrollbar class="page-component__scroll" ref="componentScrollBar">
        <el-scrollbar class="page-component__nav">
        </el-scrollbar>
        <div class="page-container">
         <transition name="slide">
            <keep-alive>
              <router-view/>
            </keep-alive>
          </transition>
        </div>
        </el-scrollbar>
    </div>
    <demo-footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import axios from 'axios';
import { env } from 'api/env.js';
import DemoHeader from 'components/demo-header/demo-header';
import DemoSidebar from 'components/demo-sidebar/demo-sidebar';
import DemoFooter from 'components/demo-footer/demo-footer';

export default {
  name: 'app',
  data () {
    return {
      componentScrollBar: null,
      sidebarMenu: []
    };
  },
  mounted() {
    this.componentScrollBar = this.$refs.componentScrollBar;
    this.componentScrollBox = this.componentScrollBar.$el.querySelector('.el-scrollbar__wrap');

    this.setEnv(env);
    console.log(this.env);
    axios.get('/static/data/sidebar.json').then((res) => {
      this.sidebarMenu = res.data;
    });
  },
  methods: {
    ...mapActions([
      'setEnv'
    ])
  },
  computed: {
    ...mapGetters([
      'env'
    ])
  },
  watch: {
    '$route.path'() {
      // 触发伪滚动条更新
      this.componentScrollBox.scrollTop = 0;
      this.$nextTick(() => {
        this.componentScrollBar.update();
      });
    }
  },
  components: {
    DemoHeader,
    DemoSidebar,
    DemoFooter
  }
};
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}
html,body{
  height: 100%;
}
.app{
  background: #eee;
  height: 100%;
}
.main{
  position: absolute;
  top: 66px;
  bottom: 0;
  left: 186px;
  right: 0;
}
.router-link-active,.router-link-exact-active{
  color: #fff;
}
a{
  color: #fff;
  &:focus{
    color: #fff;
  }
}
.page-component__scroll {
  height: 100%;
  .el-scrollbar__wrap {
    overflow-x: auto;
  }
}
.page-container{
  position: relative;
  padding: 16px;
}

.header{
  .el-tabs__nav-wrap{
    &:after{
      display: none;
    }
  }
  .el-tabs__nav{
    position: relative;
    left: 50%;
    transform: translateX(-50%) !important;
  }
  .el-tabs__header{
    margin: 10px 0;
  }
}
</style>
