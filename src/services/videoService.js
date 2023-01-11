import axios from 'axios';
import moment from 'moment';

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
            key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
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
        obj.tick = true;
        obj.view = '66K';
        obj.publishAt = moment(item.snippet.publishedAt).format('MM/DD/YYYY');

        return obj;
    });

    console.log('>>> Data Videos: ', dataVideos);

    return dataVideos;
};

export const channel = async (channelId) => {
    const res = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/channels',
        params: {
            part: 'snippet',
            maxResults: 1,
            id: channelId,
            // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
            // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
            // key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
            key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            // key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });

    const data = res.data.items[0];

    console.log('>>> Data channel: ', data);

    const dataChannel = {};
    dataChannel.thumbnail = data.snippet.thumbnails.default.url;
    dataChannel.title = data.snippet.title;

    return dataChannel;
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
            key: 'AIzaSyAWwuKzvNwpe3QEN2nHu2MrTLIQvZqvRkc',
            // key: 'AIzaSyB-kSJpQ3NugeVslBfmdRq5kJySv4ykPSM',
        },
    });

    const data = res.data.items[0];

    const videoData = {};
    videoData.title = data.snippet.title;
    videoData.description = data.snippet.description;
    videoData.channelId = data.snippet.channelId;

    console.log('>>> Data video: ', data);

    return videoData;
};
