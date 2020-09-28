const getVideoRequests = async () => {
  try {
    requests = (
      await axios.get("https://video-request-app-api.herokuapp.com/videos")
    ).data;
  } catch (error) {
    console.log(error.message);
  }
};

const upVote = async (id) => {
  await axios.put(
    `https://video-request-app-api.herokuapp.com/videos/${id}/upvote`,
    {
      email: localStorage.getItem("current-user-email"),
    }
  );
  await displayListAndSetupPagination();
};

const downVote = async (id) => {
  await axios.put(
    `https://video-request-app-api.herokuapp.com/videos/${id}/downvote`,
    {
      email: localStorage.getItem("current-user-email"),
    }
  );
  await displayListAndSetupPagination();
};

const createVideoRequest = async () => {
  const title = requestTitleInput.value;
  const description = requestDescriptionInput.value;
  await axios.post("https://video-request-app-api.herokuapp.com/videos", {
    title: title,
    description: description,
    email: localStorage.getItem("current-user-email"),
  });
  await displayListAndSetupPagination();
};