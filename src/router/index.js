import Vue from "vue";
import VueRouter from "vue-router";
import TrelloHome from "../views/TrelloHome.vue";
import Task from "../components/Task.vue";
import TestComponent from "@/views/TestComponent.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Trello",
    component: TrelloHome,
    children: [
      {
        path: "task/:id",
        name: "Task",
        component: Task
      }
    ]
  },
  {
    path: "/test",
    name: "Test",
    component: TestComponent

  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
