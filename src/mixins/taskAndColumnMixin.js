export default {
  props: {
    task: {},
    taskIndex: {},
    columnIndex: {},
    column: {}
  },
  methods: {
    testing(argument) {
      console.log(argument);
    },
    dropTaskOrColumn(e, toColumn, toColumnIndex, toTaskIndex) {
      // if the draged item is a task then
      const dragType = e.dataTransfer.getData("dragType");

      if (dragType === "task") {
        this.dropTask(
          e,
          toColumn,
          toTaskIndex !== undefined ? toTaskIndex : toColumn.length
        );
      } else {
        this.dropColumn(e, toColumnIndex);
      }
    },
    dropTask(e, toColumn, toTaskIndex) {
      const fromTaskIndex = e.dataTransfer.getData("task-id");
      const fromColumnIndex = e.dataTransfer.getData("column-id");

      const fromColumn = this.columns[fromColumnIndex].tasks;
      this.$store.commit("MOVE_TASK", {
        fromColumn,
        toColumn,
        fromTaskIndex,
        toTaskIndex
      });
    },
    dropColumn(e, toColumnIndex) {
      const fromColumnIndex = e.dataTransfer.getData("from-column-index");
      this.$store.commit("MOVE_COLUMN", {
        fromColumnIndex,
        toColumnIndex
      });
    }
  }
};
