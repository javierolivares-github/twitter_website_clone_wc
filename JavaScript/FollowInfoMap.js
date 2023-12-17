import FollowInfoData from '../Data/FollowInfoData.js';

const followInfoContainer = document.querySelector('.follow-info');

const followInfoMapped = FollowInfoData.map(item => {
  return `<follow-info
          image="${item.imageUrl}"
          username="${item.username}"
          account="${item.account}"
          class="default"
        ></follow-info>`;
}).join('');

followInfoContainer.innerHTML = followInfoMapped;