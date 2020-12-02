<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="column-area col-sm-3 ml-1 mt-1"
        v-for="(column, $columnIndex) of columns"
        :key="$columnIndex"
      >
        <h3>{{ column.name }}</h3>
        <div
          class="column-row"
          v-for="(task, $taskIndex) of column.tasks"
          :key="$taskIndex"
        >
          {{ task.name }}
        </div>
        <input
          @keyup.enter="addTask($event, column.tasks)"
          type="text"
          class="input-field"
          placeholder="type columnname"
        />
      </div>

      <div class="input-area ml-1 mt-1">
        <input
          @keyup.enter="addNewColumn($event)"
          type="text"
          class="input-field"
          placeholder="type columnname"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["columns"]),
  methods: {
    addNewColumn(e) {
      this.$store.commit("CREATE_COLUMN", { name: e.target.value });
      e.target.value = "";
    },
    addTask(e, tasks) {
      this.$store.commit("CREATE_TASK", { tasks: tasks, name: e.target.value });
      e.target.value = "";
    }
  }
};
</script>

<style scoped>
.input-area {
  border: 1px solid rgb(58, 58, 58);
  background-color: #eee;
  border-radius: 4px;
  padding: 10px;
}
.input-field {
  color: rgb(95, 95, 95);
  font-weight: 550;
  background-color: #fff;
  padding: 8px;
  margin: 5px;
  border-radius: 4px;
}
.column-area {
  border: 1px solid rgb(58, 58, 58);
  background-color: #eee;
  border-radius: 4px;
  padding: 10px;
}
.column-row {
  color: rgb(95, 95, 95);
  font-weight: 550;
  background-color: #fff;
  padding: 8px;
  margin: 5px;
  border-radius: 4px;
}
</style>
