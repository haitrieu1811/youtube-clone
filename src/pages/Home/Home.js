import { useEffect, useState } from 'react';

import CategorySlider from '~/components/CategorySlider';
import GridStyles from '~/components/GridStyles';
import VerticalVideo from '~/components/VerticalVideo';
import VerticalVideoSkeleton from '~/components/VerticalVideoSkeleton';
import * as videoService from '~/services/videoService';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await videoService.list('epl', 48);

            setVideos(res);
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
