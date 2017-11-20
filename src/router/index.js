import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const DemoUpload = (resolve) => {
  import('components/demo-upload/demo-upload').then((module) => {
    resolve(module);
  });
};

const DemoForm = (resolve) => {
  import('components/demo-form/demo-form').then((module) => {
    resolve(module);
  });
};

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      redirect: { name: 'DemoUpload' }
    },
    {
      path: '/demo-upload',
      name: 'DemoUpload',
      component: DemoUpload
    },
    {
      path: '/demo-form',
      name: 'DemoForm',
      component: DemoForm
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
router.beforeResolve((to, from, next) => {
  next();
});

export default router;
