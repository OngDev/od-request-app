requests = [];

let currentPage = 1;
let rows = 3;
let pageCount = 0;

const requestListElement = document.getElementById("request-list");
const paginationElement = document.getElementById("pagination");
const emailInput = document.getElementById("email-input");
const emailSaveContainer = document.getElementById("email-save-container");
const contentContainer = document.getElementById("content-container");

requestTitleInput = document.getElementById(
  "request-title-input"
);

requestDescriptionInput = document.getElementById(
  "request-description-input"
);

const checkOverflowParagraph = (element) => {
  return element.clientHeight < element.scrollHeight;
};

const displayList = (items, wrapper, rowsPerPage, page) => {
  wrapper.innerHTML = "";
  page--;

  let start = rowsPerPage * page;
  let end = start + rowsPerPage;
  let paginatedTtems = items.slice(start, start + rowsPerPage);

  let requestListInnerHtml = "";
  paginatedTtems.forEach((item) => {
    let voteCount = 0;
    item.votes.forEach((vote) => {
      voteCount += vote.isUp ? 1 : -1;
    });
    let upIconClass = "vote-icon",
      downIconClass = "vote-icon";
    const myVote = item.votes.find(
      (vote) => vote.email === localStorage.getItem("current-user-email")
    );
    if (myVote) {
      if (myVote.isUp) {
        upIconClass = "highlight-upvote-icon";
      } else {
        downIconClass = "highlight-downvote-icon";
      }
    }
    requestListInnerHtml += `<li>
        <div class="card-info" onclick="expandContent()">
            <div class="card-title">
                ${item.title}${item.url ? `<a class="card-url" target="_blank" href="${item.url.startsWith('http') ? item.url : 'https://' + item.url}">${item.url.startsWith('http') ? item.url : 'https://' + item.url}</a>`
        :
        ''
      }
            </div>
            <div class="card-description">
                ${item.description}
            </div>
        </div>
        <div class="vote-container">
          <img src="./assets/icon/chevron-up.svg" alt="vote-up" class="${upIconClass}" onclick="upVote('${item.id}')">
          <span class="vote-number">${voteCount}</span>
          <img src="./assets/icon/chevron-down.svg" alt="vote-down" class="${downIconClass}" onclick="downVote('${item.id}')">
        </div>
    </li>`;
  });
  if (wrapper) {
    wrapper.innerHTML = requestListInnerHtml;
  }
};

const setupPagination = (items, wrapper, rowsPerPage) => {
  wrapper.innerHTML = "";
  wrapper.appendChild(getPaginationButton("<", requests));

  pageCount = Math.ceil(items.length / rowsPerPage);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = getPaginationButton(i, requests);
    wrapper.appendChild(btn);
  }
  wrapper.appendChild(getPaginationButton(">", requests));
};

const getEventTarget = (e) => {
  e = e || window.event;
  return e.target || e.srcElement;
};

const getPaginationButton = (page, items) => {
  let button = document.createElement("button");

  button.innerText = page;

  if (currentPage == page) button.classList.add("active");

  button.addEventListener("click", (e) => {
    let target = getEventTarget(e);
    if (
      (target.innerText == "<" && currentPage == 1) ||
      (target.innerText == ">" && currentPage == pageCount)
    ) {
      return button;
    }

    const pagination = document.getElementById("pagination");

    const currentBtn = document.querySelector(".pagenumbers > button.active");
    currentBtn.classList.remove("active");

    if (target.innerText == "<" && currentPage > 1) {
      currentPage = currentPage - 1;
    } else {
      if (target.innerText == ">" && currentPage < pageCount) {
        currentPage = currentPage + 1;
      } else {
        currentPage = target.innerText;
      }
    }
    pagination.children[currentPage].classList.add("active");
    displayList(items, requestListElement, rows, currentPage);
  });

  return button;
};

const expandContent = (e) => {
  var target = getEventTarget(e);
  target.parentElement.parentElement.classList.toggle("expanded-content");
  target.parentElement.childNodes[3].classList.toggle("expand-content");
  target.parentElement.childNodes[5].classList.toggle("d-none");
};

const togglePopup = (popupId) => {
  const popup = document.getElementById(popupId);
  popup.classList.toggle("d-none");
  document.body.classList.toggle("disable-scrolling");
};

const checkEmailInLocalStorage = () => {
  const email = localStorage.getItem("current-user-email");
  if (!email) {
    emailSaveContainer.classList.remove("hide-container");
    contentContainer.classList.add("hide-container");
    return false;
  } else {
    emailSaveContainer.classList.add("hide-container");
    contentContainer.classList.remove("hide-container");
    return true;
  }
};

const ValidateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
};

const saveEmailToLocalStorage = async () => {
  const email = emailInput.value;
  if (ValidateEmail(email)) {
    localStorage.setItem("current-user-email", email);
  }
  checkEmailInLocalStorage();
  await displayListAndSetupPagination();
};

const displayListAndSetupPagination = async () => {
  await getVideoRequests();
  displayList(requests, requestListElement, rows, currentPage);
  setupPagination(requests, paginationElement, rows);
};

document.addEventListener("DOMContentLoaded", async () => {
  if (!checkEmailInLocalStorage()) {
    return;
  }
  await displayListAndSetupPagination();
  const listCardInfo = document.getElementsByClassName("card-info");
  for (let i = 0; i < listCardInfo.length; i++) {
    if (checkOverflowParagraph(listCardInfo[i].childNodes[3])) {
      listCardInfo[
        i
      ].innerHTML += `<img src="./assets/icon/arrow-down.svg" alt="see-more">`;
    }
  }
});
