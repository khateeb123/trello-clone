<template>
  <div
    class="col-sm mt-3 ml-1 drop-zone"
    @drop="dropTaskOrColumn($event, column.tasks, columnIndex)"
    @dragover.prevent
    @dragenter.prevent
    draggable
    @dragstart.self="pickupColumn($event, columnIndex)"
  >
    <!-- </ column div is strting  -->

    <h3>{{ column.name }}</h3>
    <!-- task div is starting -->
    <TaskBody
      v-for="(task, taskIndex) in column.tasks"
      :key="taskIndex"
      :task="task"
      :taskIndex="taskIndex"
      :column="column"
      :columnIndex="columnIndex"
    />

    <input
      type="text"
      class="c-input"
      placeholder=" + add here..."
      @keyup.enter="addTask($event, column.tasks)"
    />
  </div>
</template>
<script>
import taskAndColumnMixin from "@/mixins/taskAndColumnMixin";
import TaskBody from "@/components/TaskBody.vue";
import { mapState } from "vuex";
export default {

  computed: mapState(["columns"]),
  components: { TaskBody },
  mixins: [taskAndColumnMixin],
  methods: {
    addTask(e, tasks) {
      this.$store.commit("CREATE_TASK", {
        tasks,
        name: e.target.value
      });
      e.target.value = "";
    },
    pickupColumn(e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.setData("from-column-index", fromColumnIndex);
    }
  }
};
</script>
<style scoped>
.drop-zone {
  background-color: #eee;
  border-radius: 4px;
  padding: 10px;
}

.c-input {
  background-color: transparent;
  padding: 5px;
  margin: 5px;
  width: 98%;
  border: none;
  border-radius: 4px;
  outline: none;
}
.add-column-input {
  background-color: rgb(164, 209, 170);
  padding: 5px;
  margin: 5px;
  width: 98%;
  border-color: rgb(8, 8, 8);
  border-radius: 4px;
  outline: none;
}
</style>
