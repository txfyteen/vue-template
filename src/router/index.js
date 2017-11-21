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

const DemoForm2 = (resolve) => {
  import('components/demo-form/demo-form2').then((module) => {
    resolve(module);
  });
};

const DemoTable = (resolve) => {
  import('components/demo-table/demo-table').then((module) => {
    resolve(module);
  });
};

const DemoTable2 = (resolve) => {
  import('components/demo-table/demo-table2').then((module) => {
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
    },
    {
      path: '/demo-form2',
      name: 'DemoForm2',
      component: DemoForm2
    },
    {
      path: '/demo-table',
      name: 'DemoTable',
      component: DemoTable
    },
    {
      path: '/demo-table2',
      name: 'DemoTable2',
      component: DemoTable2
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
