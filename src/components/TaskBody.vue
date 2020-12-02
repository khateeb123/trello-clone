 <template>
  <div
    class="drag-el mt-2"
    @drop.stop="dropTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
    @dragover.prevent
    draggable
    @dragstart="pickupTask($event, taskIndex, columnIndex)"
    @click="goToTask(task.id)"
  >
    {{ task.name }}
  </div>
</template>

<script>
import taskAndColumnMixin from "@/mixins/taskAndColumnMixin";
import { mapState } from "vuex";
export default {
  computed: mapState(["columns"]),
  mixins: [taskAndColumnMixin],
  methods: {
    goToTask(id) {
      this.$router.push({ name: "Task", params: { id } });
    },
    pickupTask(e, taskIndex, fromColumnIndex) {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.dropEffect = "move";

      e.dataTransfer.setData("dragType", "task");
      e.dataTransfer.setData("task-id", taskIndex);
      e.dataTransfer.setData("column-id", fromColumnIndex);
    }
  }
};
</script>

<style scoped>
.drag-el {
  color: rgb(95, 95, 95);
  font-weight: 550;
  background-color: #fff;
  padding: 8px;
  margin: 5px;
  border-radius: 4px;
}
</style>
