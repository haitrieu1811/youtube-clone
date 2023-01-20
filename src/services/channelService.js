import axios from 'axios';

export const get = async (channelId) => {
    const res = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/channels',
        params: {
            part: 'snippet,statistics',
            maxResults: 1,
            id: channelId,
            // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
            // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
            key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            // key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            // key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });

    const data = res.data.items[0];
    const snippet = data.snippet;
    const statistics = data.statistics;

    const result = {};

    result.thumbnail = snippet.thumbnails.default.url;
    result.title = snippet.title;

    result.hiddenSubscriberCount = statistics.hiddenSubscriberCount;
    result.subscriberCount = statistics.subscriberCount;
    result.videoCount = statistics.videoCount;
    result.viewCount = statistics.viewCount;

    return result;
};

export const statistic = async (channelId) => {
    const res = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/channels',
        params: {
            part: 'statistics',
            id: channelId,
            // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
            // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
            key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            // key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            // key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });

    const data = res.data.items[0].statistics;

    const result = {};
    result.hiddenSubscriberCount = data.hiddenSubscriberCount;
    result.subscriberCount = data.subscriberCount;
    result.videoCount = data.videoCount;
    result.viewCount = data.viewCount;

    return result;
};
