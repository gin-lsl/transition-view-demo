import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/docs", component: "docs" },

    // no transition sign
    {
      path: '/basic-sign', component: '../layouts/SignLayout/Basic',
      routes: [
        { path: '/basic-sign/login', component: 'sign/Login' },
        { path: '/basic-sign/register', component: 'sign/Register' }
      ]
    },

    // simple transition sign
    {
      path: '/simple-sign', component: '../layouts/SignLayout/Simple',
      routes: [
        { path: '/simple-sign/login', component: 'sign/Login' },
        { path: '/simple-sign/register', component: 'sign/Register' }
      ]
    },


    {
      path: '/', component: '../layouts/HomeLayout',
      routes: [
        { path: '/about', component: 'home/About' },
        { path: '/', component: 'home/Index' },
      ]
    }
  ],
  npmClient: 'pnpm',
});
