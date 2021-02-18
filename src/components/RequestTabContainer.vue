 <template>
  <el-tabs v-model="requestTab" @tab-click="handleClick">
    <el-tab-pane label="all requests" name="all-requests" class="tab-pane-title">
      <RequestList v-if="requests && requests.length > 0" :requests="requests" :type="type"/>
      <h2 style="text-align: center" v-else>Chán, chẳng có ai hỏi gì luôn!</h2>
    </el-tab-pane>
    <el-tab-pane label="my requests" name="my-requests" class="tab-pane-title">
      <RequestList v-if="myRequests && myRequests.length > 0" :requests="myRequests" :type="type"/>
      <h2 style="text-align: center" v-else>Chán, chưa hỏi gì luôn!</h2>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import RequestList from "../components/RequestList";
import { mapGetters } from "vuex"
import { FETCH_REQUEST, FETCH_MY_REQUEST, TO_MY_REQUESTS_TAB } from "../store/actions";

export default {
  props: ["type"],
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    ...mapGetters(["requests", "myRequests", "requestTab"])
  },
  components: {
    RequestList,
  },
  name: "RequestTabContainer",
  mounted() {
    const lastUrl = localStorage.getItem("last-url");
    if(lastUrl && lastUrl !== "/") {
      this.$store.dispatch(TO_MY_REQUESTS_TAB);
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

</style>