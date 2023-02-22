const incrementTimer = () => {
  return setInterval(function () {
    const counterElement = document.getElementById("counter");
    let num = parseInt(counterElement.innerHTML);
    counterElement.innerText = num + 1;
  }, 1000);
};

// Start timer when page loads
let timer = incrementTimer();
let isPaused = false;

// Add to timer when plus button clicked
const addButton = document.getElementById("plus");
const handlePlus = () => {
  const counterElement = document.getElementById("counter");
  let num = parseInt(counterElement.innerHTML);
  counterElement.innerText = num + 1;
};
addButton.addEventListener("click", handlePlus);

// Add to timer when minus button clicked
const subtractButton = document.getElementById("minus");
const handleMinus = () => {
  const counterElement = document.getElementById("counter");
  let num = parseInt(counterElement.innerHTML);
  counterElement.innerText = num - 1;
};
subtractButton.addEventListener("click", handleMinus);

// Like button
const likeButton = document.getElementById("heart");
const likesTracker = {};
const handleLike = () => {
  const counterElement = document.getElementById("counter");
  let num = parseInt(counterElement.innerHTML);
  if (likesTracker[num]) {
    const likesCount = likesTracker[num] + 1;
    likesTracker[num] = likesCount;
  } else {
    likesTracker[num] = 1;
  }
  const likesList = document.querySelector(".likes");
  const listItem = document.createElement("li");
  const textNode = document.createTextNode(
    `${num} has been liked ${likesTracker[num]} times`
  );
  listItem.appendChild(textNode);
  likesList.appendChild(listItem);
};
likeButton.addEventListener("click", handleLike);

// Pause button
const pauseButton = document.getElementById("pause");
const handlePause = () => {
  const buttons = document.getElementsByTagName("button");
  if (isPaused) {
    pauseButton.innerHTML = "pause";
    timer = incrementTimer();
    isPaused = false;
    Array.from(buttons).forEach((element) => {
      if (element.id !== "pause") {
        element.disabled = isPaused;
      }
    });
  } else {
    clearInterval(timer);
    pauseButton.innerHTML = "resume";
    isPaused = true;
    Array.from(buttons).forEach((element) => {
      if (element.id !== "pause") {
        element.disabled = isPaused;
      }
    });
  }
};
pause.addEventListener("click", handlePause);

// Comments
const commentForm = document.getElementById("comment-form");
const handleComments = (e) => {
  e.preventDefault();
  const newCommentInput = document.getElementById("comment-input");
  const commentTag = document.createElement("p");
  commentTag.innerText = newCommentInput.value;
  document.querySelector(".comments").appendChild(commentTag);
};
commentForm.addEventListener("submit", handleComments);
