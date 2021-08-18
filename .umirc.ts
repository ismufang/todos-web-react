import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  base: '/todos/',
  publicPath: process.env.NODE_ENV === 'production' ? '/todos/' : '/',
});
