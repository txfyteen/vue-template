<template>
  <div class="app">
    <demo-header />
    <demo-sidebar :menu="sidebarMenu"/>
    <div class="main">
      <transition>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
    <demo-footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { env } from 'api/env.js';
import DemoHeader from 'components/demo-header/demo-header';
import DemoSidebar from 'components/demo-sidebar/demo-sidebar';
import DemoFooter from 'components/demo-footer/demo-footer';
import axios from 'axios';

export default {
  name: 'app',
  data () {
    return {
      sidebarMenu: []
    };
  },
  mounted() {
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
  components: {
    DemoHeader,
    DemoSidebar,
    DemoFooter
  }
};
</script>

<style lang="scss">
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
    overflow: auto;
    padding: 16px;
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
</style>
