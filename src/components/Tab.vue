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
      todos: [
        // {
        //     "id": "1ab1fcc2-12c3-4b29-b685-b1f5889c2ec8",
        //     "title": "This is a title for video request",
        //     "description": "All I need is this request send successfully.",
        //     "isActive": false,
        //     "isArchived": false,
        //     "email": "ngvuthanhnhan@gmail.com",
        //     "votes": []
        // },
        // {
        //     "id": "be66aa36-99dc-4638-b5b1-fae314202b5a",
        //     "title": "Sample title",
        //     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim ipsum quis tempus dapibus. Duis sagittis dui et massa consequat blandit. Praesent pharetra posuere felis ut congue.",
        //     "isActive": false,
        //     "isArchived": false,
        //     "email": "ngvuthanhnhan@gmail.com",
        //     "votes": []
        // }
      ],
    };
  },
  created() {
    const config = axios.create({
      baseURL: "https://od-request-api.herokuapp.com/videos",
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzEyZGIwZS03NThkLTFmOTQtODE3NS04ZDgwNTllYTAwMDAiLCJpYXQiOjE2MDQzOTY4MDAsImV4cCI6MTYwNTI2MDgwMH0.dWnmuhGtDGnOMSpu1wMMUjKTXbsWp8iXBkmMf5ncn5P3fYi-Bci9zM5mqL7VpvWiqoHJhTBhsuB4iicMuP7IJg"
      }
    })
    axios.get(config)
    .then(data => {console.log(data)})
    .catch(err => console.log(err))
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