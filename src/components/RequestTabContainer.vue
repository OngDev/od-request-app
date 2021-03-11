 <template>
  <el-tabs v-model="requestTab" @tab-click="handleClick" class="request-tab-container">
    <el-tab-pane label="all requests" name="all-requests" class="request-tab-panel">
      <RequestList v-if="requests && requests.length > 0" :requests="requests" :type="type"/>
      <h2 style="text-align: center" v-else>Chán, chẳng có ai hỏi gì luôn!</h2>
    </el-tab-pane>
    <el-tab-pane label="my requests" name="my-requests" class="request-tab-panel">
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
<style>
.el-tabs__content{
  max-height: calc(100% - 55px);
  display: flex;
}
</style>
<style scoped>
.request-tab-container{
  margin-top: 80px;
}
.request-tab-panel {
  display: flex;
  width: 100%;
  background-color: #fffdfa;
  padding: 20px;
  border-radius: 5px;
  border: 1px #ffb34733 solid;
}
</style>