 <template>
  <div class="container-fluid trello ">
    <div class="row">
      <!-- column div is starting -->
      <ColumnHome
        v-for="(column, columnIndex) in columns"
        :key="columnIndex"
        :column="column"
        :columnIndex="columnIndex"
      />

      <div class="">
        <input
          type="text"
          class="add-column-input mt-3"
          v-model="newColumnName"
          placeholder="+ New column name"
          @keyup.enter="addNewColumn"
        />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import taskAndColumnMixin from "@/mixins/taskAndColumnMixin";

import ColumnHome from "@/components/ColumnHome.vue";
import { mapState } from "vuex";
export default {
  components: { ColumnHome },
  mixins: [taskAndColumnMixin],

  data() {
    return {
      newColumnName: ""
    };
  },
  computed: mapState(["columns"]),
  methods: {
    addNewColumn() {
      this.$store.commit("CREATE_COLUMN", { name: this.newColumnName });
      this.newColumnName = "";
    }
  }
};
</script>

<style scoped>
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
