<template>
    <div class="request-item">
      <el-card>
        <div class="card-item">
          <div class="title-container">

            <div class="item-title">
<!--              {{ request.isActive ? 'ACTIVE' : 'INACTIVE'}}-->
              {{ request.title }}
              <div><el-tooltip placement="top">
                <template #content>
                  {{request.isActive? 'Active' : 'Inactive'}}
                </template>
                <div class="status-badge" :class="{activatedItem: request.isActive, deactivatedItem: !request.isActive}">
                </div>
              </el-tooltip></div>
              <div v-if="request.isArchived"><el-tooltip content="Archived" placement="top">
                <div class="archived-badge" >
                </div>
              </el-tooltip></div>
            </div>
            <div class="status-container">

              <Vote
                  :voteCount="request.voteCount"
                  :upVoteCount="request.upVoteCount"
                  :downVoteCount="request.downVoteCount"
                  :myVote="request.myVote"
                  @upVote="upVote()"
                  @downVote="downVote()"
              />
            </div>
          </div>
          <div class="item-description">
            {{ request.description }}
            <a v-if="request.url" :href="request.url">{{ request.url }}</a>
          </div>

          <div class="manage-request" v-if="isBelongedToCurrentUser()">
            <el-tooltip content="Inactivate" placement="top" v-if="request.isActive">
              <i @click="changeActivation()"  class="el-icon-video-pause edit-request"></i>
            </el-tooltip>
            <el-tooltip content="Activate" placement="top" v-else>
              <i @click="changeActivation()"  class="el-icon-video-play edit-request"></i>
            </el-tooltip>
            <el-tooltip content="Archive" placement="top" v-if="!request.isArchived && isOngDev()">
              <i @click="archiveRequest()"  class="el-icon-position edit-request"></i>
            </el-tooltip>
            <el-tooltip content="Edit" placement="top">
              <i @click="openEditPopup()"  class="el-icon-edit edit-request"></i>
            </el-tooltip>
            <el-tooltip content="Delete" placement="top">
              <i style="cursor: pointer;" class="el-icon-delete delete-request" v-on:click="deleteRequest"></i>
            </el-tooltip>

          </div>
        </div>
      </el-card>
    </div>

</template>

<script>
import Vote from "../components/Vote";
import {mapState} from "vuex"
import {DELETE_REQUEST, UP_VOTE_REQUEST, DOWN_VOTE_REQUEST, OPEN_CREATION_POPUP, CHANGE_REQUEST_ACTIVATION, ARCHIVE_REQUEST} from "../store/actions";


export default {
  name: "RequestItem",
  props: ["request", "type"],
  components: {
    Vote,
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    isBelongedToCurrentUser() {
      if(this.user) {
        return this.request.email === this.user.email || this.user.roles.indexOf("ongdev") !== -1;
      }
      return false;
    },
    isOngDev() {
      return this.user && this.user.roles.indexOf("ongdev") !== -1;
    },
    deleteRequest: function () {
      this.$confirm("Chắc chưa?", "Xóa hả?", {
        confirmButtonText: "Sợ?",
        cancelButtonText: "Ấy nhầm nhầm nhầm!",
        type: "warning"
      }).then(() => {
        this.$store.dispatch(DELETE_REQUEST, {type: this.type, id: this.request.id})
      }).catch(() => {
        this.$message({
          type: "info",
          message: "Vậy thôi!"
        });
      })

    },
    upVote() {
      this.$store.dispatch(UP_VOTE_REQUEST, {type: this.type, id: this.request.id});
    },
    downVote() {
      this.$store.dispatch(DOWN_VOTE_REQUEST, {type: this.type, id: this.request.id});
    },
    openEditPopup() {
      const updatingPopup = {
        popupTitle: "Chòi oi, chỉnh quài!!! Biết đường đâu mà làm man -_-",
        popupDesc: "*Không liên quan đến lương lậu, hoặc những thứ ở quá xa với lập trình nhé.",
        popupType: this.type,
        id: this.request.id,
        inputTitle: this.request.title,
        inputDesc: this.request.description,
        inputUrl: this.request.url,
        isCreation: false
      }
      this.$store.commit(OPEN_CREATION_POPUP, updatingPopup);
    },
    changeActivation() {
      this.$store.dispatch(CHANGE_REQUEST_ACTIVATION, {type: this.type, id: this.request.id})
    },
    archiveRequest() {
      this.$confirm("Archive", "Làm xong cái này rồi hả Ông Dev", {
        confirmButtonText: "Ờ",
        cancelButtonText: "Chưa",
        type: "warning"
      }).then(() => {
        this.$store.dispatch(ARCHIVE_REQUEST, {type: this.type, id: this.request.id})
      }).catch(() => {
        this.$message({
          type: "info",
          message: "Vậy thôi!"
        });
      })
    },
  },
};
</script>

<style scoped>
.card-item {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title-container {
  width: 100%;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item-title {
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 29px;
  color: #303030;
}
.item-description {
  position: relative;
  --max-lines: 3;
  margin-right: 5.75em;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  max-height: calc(16px * var(--max-lines));
  color: #262626;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-description::before {
  position: absolute;
  content: "...";
  /* tempting... but shows when lines == content */
  /* top: calc(var(--lh) * (var(--max-lines) - 1)); */

  /*
  inset-block-end: 0;
  inset-inline-end: 0;
  */
  bottom: -2px;
  right: 0;
}
.item-description::after {
  content: "";
  position: absolute;
  /*
  inset-inline-end: 0;
  */
  right: 0;
  /* missing bottom on purpose*/
  width: 1rem;
  height: 1rem;
  background: white;
}
.manage-request {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
}
.edit-request {
  font-size: 13px;
  margin-right: 8px;
  font-weight: 300;
  cursor: pointer;
}
.delete-request {
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;
}
.status-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.status-badge {
  margin-left: 10px;
  height: 14px;
  width: 14px;
  border-radius: 50%;
}

.archived-badge{
  margin-left: 10px;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: #ffb347;
}
.activatedItem {
  background-color: #baed91;
}

.deactivatedItem {
  background-color: #bbbbbb;
}

</style>
