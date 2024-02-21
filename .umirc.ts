import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    // { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    {
      path: '/basic-sign', component: '../layouts/SignLayout/Basic',
      routes: [
        { path: '/basic-sign/login', component: 'sign/Login' },
        { path: '/basic-sign/register', component: 'sign/Register' }
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
