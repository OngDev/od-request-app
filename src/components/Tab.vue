 <template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="All requests" name="first">
      <Card v-bind:todos="todos" />
    </el-tab-pane>
    <el-tab-pane label="My requests" name="second">and this is a luigi</el-tab-pane>
  </el-tabs>
</template>

<script>
import axios from "axios"
import Card from "../components/Card"
export default {
  data() {
    return {
      activeName: "first",
      todos: [],
    };
  },
  created() {
    axios
      .get("https://od-request-api.herokuapp.com/videos")
      .then(res => this.todos = res.data.content)
      .catch(err => console.log(err))
  },
  // methods: {
  //   handleClick(tab, event) {
  //     console.log(tab, event);
  //   }
  // },
  components: {
    Card
  },
  name: "Tab",
};
</script>

<style scoped>
  * {
    font-family: 'Nunito', sans-serif;
  }
</style>