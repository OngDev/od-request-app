 <template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="All requests" name="first">
      <Card v-bind:todos="todos" />
    </el-tab-pane>
    <el-tab-pane label="My requests" name="second">and this is a luigi</el-tab-pane>
  </el-tabs>
</template>

<script>
import Card from "../components/Card"
export default {
  data() {
    return {
      activeName: "first",
      todos: [
        {
          title: "What is Lorem Ipsum?",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, augue non tincidunt sagittis, lectus leo maximus metus, quis ornare massa tortor ac metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vel pulvinar libero, eu bibendum libero. Nulla elementum orci felis, in feugiat tortor sagittis sit amet. ",
          status: "Pending",
          author: "ngvuthanhnhan@gmail.com"
        },
        {
          title: "From the dảk side",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, augue non tincidunt sagittis, lectus leo maximus metus, quis ornare massa tortor ac metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vel pulvinar libero, eu bibendum libero. Nulla elementum orci felis, in feugiat tortor sagittis sit amet. ",
          status: "DONE",
          author: "surprisedmeh@gmail.com"
        },
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
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