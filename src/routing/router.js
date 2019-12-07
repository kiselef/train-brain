import VueRouter from 'vue-router';
import Vue from 'vue';
import MultiplyForm from '../components/multiply-form/MultiplyForm'
import Sudoku from '../components/sudoku/Sudoku'
import FlashAnzan from '../components/flash-anzan/FlashAnzan'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MultiplyForm
  },
  {
    path: '/flash',
    component: FlashAnzan
  },
  {
    path: '/sudoku',
    component: Sudoku
  },
];

const router = new VueRouter({
  routes,
});

export default router;
