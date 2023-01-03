import axios from 'axios';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';

import CategorySlider from '~/components/CategorySlider';
import GridStyles from '~/components/GridStyles';
import VerticalVideo from '~/components/VerticalVideo';
import VerticalVideoSkeleton from '~/components/VerticalVideoSkeleton';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await axios({
                method: 'GET',
                url: 'https://www.googleapis.com/youtube/v3/search',
                params: {
                    part: 'snippet',
                    maxResults: 24,
                    q: 'bóng đá',
                    type: 'video',
                    // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
                    // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
                    key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
                },
            });

            const data = res.data.items;

            console.log('>>> Check data: ', data);

            const dataVideos = data.map((item) => {
                const obj = {};

                obj.thumbnail = item.snippet.thumbnails.high.url;
                obj.title = item.snippet.title;
                obj.channelName = item.snippet.channelTitle;
                obj.channelId = item.snippet.channelId;
                obj.tick = true;
                obj.view = '66K';
                obj.publishAt = moment(item.snippet.publishedAt).format('MM/DD/YYYY');

                return obj;
            });

            console.log('>>> Data Videos: ', dataVideos);

            setVideos(dataVideos);

            setIsLoading(false);
        })();
    }, []);

    return (
        <>
            <GridStyles>
                <CategorySlider />

                {isLoading && (
                    <div className="row sm-gutter" style={{ marginTop: 24 }}>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                        <div className="col l-3 m-6 c-12">{<VerticalVideoSkeleton />}</div>
                    </div>
                )}

                {videos && videos.length > 0 && (
                    <div className="row sm-gutter" style={{ marginTop: 24 }}>
                        {videos.map((item, index) => (
                            <div key={index} className="col l-3 m-6 c-12">
                                <VerticalVideo data={item} />
                            </div>
                        ))}
                    </div>
                )}
            </GridStyles>
        </>
    );
};

export default Home;
