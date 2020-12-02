<template>
  <div @click.self="goToHomeBack()" class="task-background">
    <div @click.self="goToHomeBack()" class="row">
      <div class="col-sm-4 drop-zone">
        <input
          class="c-input"
          type="text"
          :value="task.name"
          @change="updateTaskproperty($event, 'name')"
        />
        <textarea
          class="area-input"
          :value="task.description"
          @change="updateTaskproperty($event, 'description')"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTask"]),
    task() {
      return this.getTask(this.$route.params.id);
    }
  },
  methods: {
    updateTaskproperty(e, key) {
      this.$store.commit("UPDATE_TASK", {
        task: this.task,
        key,
        value: e.target.value
      });
    },
    goToHomeBack() {
      this.$router.push({ name: "Trello" });
    }
  }
  //  the methods area is starting now
};
</script>

<style scoped>
.task-background {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
}
.drop-zone {
  margin: auto;
  background-color: #eee;
  border-radius: 4px;
  padding: 10px;
}
.c-input {
  padding: 5px;
  margin: 5px;
  width: 98%;
  border: none;
  border-radius: 4px;
  outline: none;
}
.area-input {
  padding: 5px;
  margin: 5px;
  width: 98%;
  border: none;
  border-radius: 4px;
  outline: none;
}
</style>
