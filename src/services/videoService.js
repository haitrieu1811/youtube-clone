import axios from 'axios';
import moment from 'moment';
import intToString from '~/utils/intToString';
import timeSince from '~/utils/timeSince';

export const list = async (q, maxResults) => {
    const res = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
            part: 'snippet',
            maxResults: maxResults,
            q: q,
            type: 'video',
            // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
            // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
            // key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            // key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });

    const data = res.data.items;

    console.log('>>> Check data: ', data);

    const dataVideos = data.map((item) => {
        const obj = {};

        obj.videoId = item.id.videoId;
        obj.thumbnail = item.snippet.thumbnails.high.url;
        obj.title = item.snippet.title;
        obj.channelName = item.snippet.channelTitle;
        obj.channelId = item.snippet.channelId;
        obj.description = item.snippet.description;
        obj.tick = true;
        obj.publishAt = moment(item.snippet.publishedAt).format('MM/DD/YYYY');
        obj.publishSince = timeSince(new Date(obj.publishAt)) + ' ago';
        obj.publishTime = moment(item.snippet.publishedAt).format('MMMM Do YYYY');

        return obj;
    });

    console.log('>>> Data Videos: ', dataVideos);

    return dataVideos;
};

export const detail = async (videoId) => {
    const res = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
            part: 'snippet',
            id: videoId,
            // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
            // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
            // key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            // key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });

    const data = res.data.items[0];

    const videoData = {};
    videoData.title = data.snippet.title;
    videoData.description = data.snippet.description;
    videoData.channelId = data.snippet.channelId;
    videoData.publishAt = moment(data.snippet.publishedAt).format('MM/DD/YYYY');
    videoData.publishSince = timeSince(new Date(videoData.publishAt)) + ' ago';

    console.log('>>> Data video: ', data);

    return videoData;
};

export const statistic = async (videoId) => {
    const res = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
            part: 'statistics',
            id: videoId,
            // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
            // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
            // key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            // key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });

    const data = res.data.items[0].statistics;

    const result = {};

    result.views = intToString(data.viewCount);
    result.exactlyViews = data.viewCount;
    result.likes = intToString(data.likeCount);
    result.comments = intToString(data.commentCount);
    result.exactlyComments = data.commentCount;
    result.favorites = intToString(data.favoriteCount);

    return result;
};
