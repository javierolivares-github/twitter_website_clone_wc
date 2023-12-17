import TrendingInfoData from '../Data/TrendingInfoData.js';

const trendingInfoContainer = document.querySelector('.trending-info');

const trendingInfoMapped = TrendingInfoData.map((item, index) => {
	return `
		<trending-info
			key=${index}
			image="${item.imageUrl}"
			username="${item.username}"
			content="${item.content}"
			timestamp="${item.timestamp}"
			hashtag="${item.hashtag}"
			class="default"
		></trending-info>`;
}).join('');

trendingInfoContainer.innerHTML = trendingInfoMapped;