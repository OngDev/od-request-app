<script>
import _ from "lodash";
import axios from "axios";
import { ADD_LOGGED_IN_USER_TO_STATE } from "../store/actions";
export default {
  name: "Home",
  props: {
    token: String,
  },
  async mounted() {
    const res = await axios.get(process.env.VUE_APP_AUTH_CURRENT_USER_URL, {
      headers: {
        Authorization:
          `Bearer ${this.token}`,
      },
    });

    const user = _.get(res, "data");
    console.log(this.$store)
    this.$store.commit(ADD_LOGGED_IN_USER_TO_STATE, { user: {
        ...user,
        token: this.token
    }});
    this.$router.push("/");
  },
};
</script>