import axios from 'axios';

export const get = async (channelId) => {
    const res = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/channels',
        params: {
            part: 'snippet,statistics,brandingSettings',
            maxResults: 1,
            id: channelId,
            key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
            // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
            // key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            // key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            // key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });

    const data = res.data.items[0];
    const snippet = data.snippet;
    const statistics = data.statistics;
    const brandingSettings = data.brandingSettings;
    // const contentDetails = data.contentDetails;

    const result = {};

    result.thumbnail = snippet.thumbnails.default.url;
    result.title = snippet.title;
    result.customUrl = snippet.customUrl;

    result.hiddenSubscriberCount = statistics.hiddenSubscriberCount;
    result.subscriberCount = statistics.subscriberCount;
    result.videoCount = statistics.videoCount;
    result.viewCount = statistics.viewCount;

    result.tick = statistics.subscriberCount > 100000 ? true : false;

    result.coverImage = brandingSettings.image.bannerExternalUrl;

    // result.channels = contentDetails.channels;

    return result;
};
