const urlInput = document.getElementById("request-url-input");

const getVideoRequests = async () => {
  try {
    requests = (
      await axios.get("https://video-request-app-api.herokuapp.com/udemy")
    ).data;
  } catch (error) {
    console.log(error.message);
  }
};

const upVote = async (id) => {
  await axios.put(
    `https://video-request-app-api.herokuapp.com/udemy/${id}/upvote`,
    {
      email: localStorage.getItem("current-user-email"),
    }
  );
  await displayListAndSetupPagination();
};

const downVote = async (id) => {
  await axios.put(
    `https://video-request-app-api.herokuapp.com/udemy/${id}/downvote`,
    {
      email: localStorage.getItem("current-user-email"),
    }
  );
  await displayListAndSetupPagination();
};

const createVideoRequest = async () => {
  const title = requestTitleInput.value;
  const description = requestDescriptionInput.value;
  const url = urlInput.value;
  await axios.post("https://video-request-app-api.herokuapp.com/udemy", {
    title: title,
    description: description,
    url: url,
    email: localStorage.getItem("current-user-email"),
  });
  await displayListAndSetupPagination();
};