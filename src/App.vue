<template>
  <div class="app">
    <gt-header />
    <gt-sidebar :menu="sidebarMenu"/>
    <div class="main">
      <transition>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    </div>
    <gt-footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { env } from 'api/env.js';
import GtHeader from 'components/gt-header/gt-header';
import GtSidebar from 'components/gt-sidebar/gt-sidebar';
import GtFooter from 'components/gt-footer/gt-footer';
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
    GtHeader,
    GtSidebar,
    GtFooter
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
