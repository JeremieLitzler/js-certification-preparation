const GET_COMMENTS_API_ENDPOINT = '/comments';
const POST_COMMENTS_API_ENDPOINT = '/comments/post';
const COMMENTS_CONTAINER_ID = 'commentsContainer';
const COMMENTS_SUBMIT_ID = 'submitBtn';

export const fetchData = async (api) => {
  const res = await fetch(GET_COMMENTS_API_ENDPOINT);
  const comments = await res.json();
  return comments.data;
};

const createCommentElement = (data) => {
  const container = document.createElement('div');
  const img = document.createElement('img');
  const subContainer = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');

  //Fill elements img, h3 and p
  img.src = data.avatar;
  img.alt = `Avatar of ${data.name}`;

  h3.textContent = data.name;
  p.textContent = data.content ?? data.comment;

  subContainer.appendChild(h3);
  subContainer.appendChild(p);
  container.appendChild(img);
  container.appendChild(subContainer);

  console.log(container.outerHTML);
  return container;
};

const renderComment = async (commentObj) => {
  const comment = createCommentElement(commentObj);
  const container = document.querySelector(`#${COMMENTS_CONTAINER_ID}`);
  container.appendChild(comment);
};

const postComment = async (event) => {
  console.log(event);
  event.preventDefault();

  const nameEl = document.querySelector('#name');
  const commentEl = document.querySelector('#comment');
  const commentPayload = {
    name: nameEl.value,
    comment: commentEl.value,
  };
  console.log(commentPayload);

  const response = await fetch(POST_COMMENTS_API_ENDPOINT, {
    body: JSON.stringify(commentPayload),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  if (!response.ok) {
    throw new Error('Failed to post comment');
  }
  console.log(response);
  return await response.json();
};

export const main = async () => {
  const submitBtn = document.querySelector(`#${COMMENTS_SUBMIT_ID}`);
  submitBtn.addEventListener('click', async (event) => {
    const addedComment = await postComment(event);
    console.log(addedComment.data);

    renderComment(JSON.parse(addedComment.data));
  });

  /**
   * Using DocumentFragment, we more efficiently add the DOM elements.
   */
  const fragment = new DocumentFragment();
  const comments = await fetchData(GET_COMMENTS_API_ENDPOINT);
  comments.forEach((comment) => fragment.append(createCommentElement(comment)));
  const container = document.querySelector(`#${COMMENTS_CONTAINER_ID}`);
  container.append(fragment);
};
