import axios from 'axios';

export const list = async (videoId, maxResults = 24) => {
    const res = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/commentThreads',
        params: {
            part: 'snippet',
            videoId: videoId,
            maxResults: maxResults,
            // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
            // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
            // key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            // key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });
    const data = res.data.items;

    console.log('>>> Check comment data: ', data);

    const results = data.map((item) => {
        const obj = {};

        obj.content = item.snippet.topLevelComment.snippet.textDisplay;
        obj.avatar = item.snippet.topLevelComment.snippet.authorProfileImageUrl;
        obj.name = item.snippet.topLevelComment.snippet.authorDisplayName;
        obj.likeCount = item.snippet.topLevelComment.snippet.likeCount;
        obj.publishedAt = item.snippet.topLevelComment.snippet.publishedAt;

        return obj;
    });

    return results;
};
