import TweetCardData from '../Data/TweetCardData.js';

const tweetContainer = document.querySelector('#tweet');

const tweetCardMapped = TweetCardData.map((item, index) => {
  return `
  <div class="tweet-card" key=${index}>
    <header>
      <img
        class="image-style"
        src="${item.profile}"
      >
      <div>
        <${item.svg}-icon 
          class="${item.svg === 'filledlike' ? 'alert' : 'success'}"
        >
        </${item.svg}-icon>
        <type-style
          label="${item.svgString}"
          class="${item.svg === 'filledlike' ? 'alert' : 'success'} size-14px bold"
        ></type-style>
      </div>
    </header>

    <section>
      <div>
        <type-style
          label="${item.account}"
          class="default size-20px bold"
        ></type-style>
        <official-icon class="default"></official-icon>
        <type-style
          label="${item.username}"
          class="gray size-14px regular"
        ></type-style>
        <type-style
          label="${item.time}"
          class="gray size-14px regular"
        ></type-style>
      </div>
      <div>
        <menu-icon class="default"></menu-icon>
      </div>
    </section>

    <div class="tweet-content">
      <type-style
        label="${item.content}"
        class="gray size-16px-body"
      ></type-style>
      <img src="${item.imageUrl}">
    </div>

    <footer>
      <div>
        <comment-icon class="default"></comment-icon>
        <type-style
          label="${item.comment}"
          class="primary size-14px-body"
        ></type-style>
      </div>
      <div>
        <retweet-icon class="default"></retweet-icon>
        <type-style
          label="${item.retweet}"
          class="success size-14px-body"
        ></type-style>
      </div>
      <div>
        <like-icon class="default"></like-icon>
        <type-style
          label="${item.like}"
          class="alert size-14px-body"
        ></type-style>
      </div>
      <div>
        <upload-icon class="default"></upload-icon>
      </div>
    </footer>

  </div>
  `;
}).join('');

tweetContainer.innerHTML = tweetCardMapped;