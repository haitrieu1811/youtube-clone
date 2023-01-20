import axios from 'axios';
import moment from 'moment';
import intToString from '~/utils/intToString';
import timeSince from '~/utils/timeSince';
import convertDuration from '~/utils/convertDuration';

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
            key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            // key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            // key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
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
        obj.publishAt = moment(item.snippet.publishedAt).format('MM/DD/YYYY');
        obj.publishSince = timeSince(new Date(obj.publishAt)) + ' ago';
        obj.publishTime = moment(item.snippet.publishedAt).format('MMMM Do YYYY');

        return obj;
    });

    console.log('>>> Data Videos: ', dataVideos);

    return dataVideos;
};

export const get = async (videoId) => {
    const res = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/videos',
        params: {
            part: 'snippet,statistics,contentDetails',
            id: videoId,
            // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
            // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
            key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            // key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            // key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });

    const data = res.data.items[0];

    console.log('>>> Check data video: ', data);

    const snippet = data.snippet;
    const statistics = data.statistics;
    const contentDetails = data.contentDetails;

    const result = {};

    result.title = snippet.title;
    result.description = snippet.description;
    result.channelId = snippet.channelId;
    result.channelTitle = snippet.channelTitle;
    result.publishAt = moment(snippet.publishedAt).format('MM/DD/YYYY');
    result.publishSince = timeSince(new Date(result.publishAt)) + ' ago';
    result.tags = snippet.tags;

    result.views = intToString(statistics.viewCount);
    result.exactlyViews = statistics.viewCount;
    result.likes = intToString(statistics.likeCount);
    result.comments = intToString(statistics.commentCount);
    result.exactlyComments = statistics.commentCount;
    result.favorites = intToString(statistics.favoriteCount);

    result.duration = contentDetails.duration;
    result.convertDuration = convertDuration(contentDetails.duration);
    result.dimension = contentDetails.dimension;
    result.definition = contentDetails.definition;
    result.caption = contentDetails.caption;

    console.log('>>> Data video: ', result);

    return result;
};
