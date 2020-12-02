import Vue from "vue";
import Vuex from "vuex";
// import { saveStatePlugin } from "@/utils.js";
import columnData from "@/store/defaultData.js";

const saveStatePlugin = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    localStorage.setItem("columns", JSON.stringify(state.columns));
  });
};

const columns = JSON.parse(localStorage.getItem("columns")) || columnData;

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    columns
  },
  mutations: {
    CREATE_TASK(state, { tasks, name }) {
      tasks.push({
        name,
        id: Date.now()
      });
    },
    UPDATE_TASK(state, { task, key, value }) {
      task[key] = value;
    },
    MOVE_TASK(state, { fromColumn, toColumn, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromColumn.splice(fromTaskIndex, 1)[0];
      toColumn.splice(toTaskIndex, 0, taskToMove);
    },
    //it need 2 columns indexes to swape there positon
    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const pickedColumn = state.columns.splice(fromColumnIndex, 1)[0];
      state.columns.splice(toColumnIndex, 0, pickedColumn);
    },
    CREATE_COLUMN(state, { name }) {
      state.columns.push({
        name,
        tasks: []
      });
    }
  },
  actions: {},
  getters: {
    getColumns: state => {
      return state.columns;
    },
    getTask: state => {
      return id => {
        for (const column of state.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task;
            }
          }
        }
      };
    }
  },
  modules: {}
});
