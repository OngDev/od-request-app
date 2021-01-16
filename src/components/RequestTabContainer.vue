 <template>
  <el-tabs v-model="activeTab" @tab-click="handleClick">
    <el-tab-pane label="All requests" name="all-requests">
      <RequestList :requests="requests" :type="type"/>
    </el-tab-pane>
    <el-tab-pane label="My requests" name="my-requests">
      <RequestList :requests="myRequests" :type="type"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import RequestList from "../components/RequestList";
import { mapGetters } from "vuex"
import { FETCH_REQUEST, FETCH_MY_REQUEST } from "../store/actions";

export default {
  props: ["type"],
  data() {
    return {
      activeTab: "all-requests",
      page: 0,
    };
  },
  computed: {
    ...mapGetters(["requests", "myRequests"])
  },
  components: {
    RequestList,
  },
  name: "RequestTabContainer",
  mounted() {
    const lastUrl = localStorage.getItem("last-url");
    if(lastUrl && lastUrl !== "/") {
      this.activeTab = "my-requests"
    }
    localStorage.removeItem("last-url");
    this.$store.dispatch(FETCH_REQUEST, {page: this.page, type: this.type})
  },
  methods: {
    handleClick(tab) {
      if (tab.props.name === "all-requests") {
        this.$store.dispatch(FETCH_REQUEST, {page: this.page, type: this.type})
      } else {
        this.$store.dispatch(FETCH_MY_REQUEST, {page: this.page, type: this.type})
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Nunito", sans-serif;
}
</style>