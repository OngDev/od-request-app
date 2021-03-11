 <template>
  <div style="display: flex; width: 100%" >
    <el-tabs v-model="requestTab" @tab-click="handleClick" class="request-tab-container" ref="tabContainer">
      <el-tab-pane label="all requests" name="all-requests" class="request-tab-panel">
        <RequestList v-if="requests && requests.items && requests.items.length > 0" :requests="requests" :type="type" />
        <h2 style="text-align: center" v-else>Chán, chẳng có ai hỏi gì luôn!</h2>
        <el-pagination
            class="pagination"
            hide-on-single-page
            layout="prev, pager, next"
            :page-size="size"
            v-model:currentPage="page"
            :total="requests.total">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="my requests" name="my-requests" class="request-tab-panel">
        <RequestList v-if="myRequests && myRequests.items && myRequests.items.length > 0" :requests="myRequests" :type="type" />
        <h2 style="text-align: center" v-else>Chán, chưa hỏi gì luôn!</h2>
        <el-pagination
            class="pagination"
            :page-size="size"
            hide-on-single-page
            v-model:currentPage="page"
            layout="prev, pager, next"
            :total="myRequests.total">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import RequestList from "../components/RequestList";
import _ from "lodash"
import { mapGetters } from "vuex"
import { FETCH_REQUEST, FETCH_MY_REQUEST, CHANGE_REQUEST_TAB } from "../store/actions";

export default {
  props: ["type"],
  data() {
    return {
      page: 1,
      size: 0,
      selectedTab: "all-requests"
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
      this.$store.dispatch(CHANGE_REQUEST_TAB, {tab: "my-requests"});
    }
    localStorage.removeItem("last-url");
    this.selectedTab = this.requestTab;
    this.calculatePageSize();
    this.$store.dispatch(FETCH_REQUEST, {page: this.page -1, size: this.size, type: this.type})
  },
  methods: {
    fetchRequests(tabName, page, size) {
      if (tabName === "all-requests") {
        this.$store.dispatch(FETCH_REQUEST, {page: page -1, size, type: this.type})
      } else {
        this.$store.dispatch(FETCH_MY_REQUEST, {page: page -1, size, type: this.type})
      }
    },
    handleClick(tab) {
      this.$store.dispatch(CHANGE_REQUEST_TAB, {tab: tab.props.name});
    },
    calculatePageSize() {
      const height = _.get(this.$refs, "tabContainer.$el.clientHeight");
      const subtractedHeight = height - 147;
      const roundedHeight = subtractedHeight - subtractedHeight % 162;
      this.size = roundedHeight/162;
    }
  },
  watch: {
    requestTab(newVal) {
      this.selectedTab = newVal;
      this.fetchRequests(this.selectedTab, 0, this.size);
    },
    page(val) {
      this.fetchRequests(this.selectedTab, val, this.size);
    }
  }
};
</script>
<style>
.el-tabs__content{
  height: calc(100% - 55px);
  display: flex;
}
.el-pagination button {
  background-color: transparent !important;
}
.el-pager .number {
  background: transparent !important;
}
</style>
<style scoped>
.request-tab-container{
  width: 100%;
  margin-top: 80px;
}
.request-tab-panel {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: #fffdfa;
  padding: 20px;
  border-radius: 5px;
  border: 1px #ffb34733 solid;
}
.pagination {
  margin-top: 18px;
}
</style>