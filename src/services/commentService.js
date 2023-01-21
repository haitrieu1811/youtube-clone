import axios from 'axios';
import moment from 'moment';
import timeSince from '~/utils/timeSince';

export const list = async (videoId, maxResults) => {
    const res = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/commentThreads',
        params: {
            part: 'snippet',
            videoId: videoId,
            maxResults: maxResults,
            key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
            // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
            // key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            // key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            // key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });
    const data = res.data.items;

    const results = data.map((item) => {
        const obj = {};
        const itemData = item.snippet.topLevelComment.snippet;

        obj.content = itemData.textDisplay;
        obj.avatar = itemData.authorProfileImageUrl;
        obj.name = itemData.authorDisplayName;
        obj.likeCount = itemData.likeCount;
        obj.publishedAt = moment(itemData.publishedAt).format('MM/DD/YYYY');
        obj.publishedSince = timeSince(new Date(obj.publishedAt)) + ' ago';

        return obj;
    });

    console.log('>>> Check comment data: ', results);

    return results;
};
