import React, { Suspense, useEffect, useState } from 'react';

import CategorySlider from '~/components/CategorySlider';
import GridStyles from '~/components/GridStyles';
import VerticalVideoSkeleton from '~/components/VerticalVideoSkeleton';
import * as videoService from '~/services/videoService';

const Video = React.lazy(() => import('~/components/VerticalVideo'));

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await videoService.list('blv anh quân', 48);
            setVideos(res);
        })();
    }, []);

    const CATEGORY_SLIDER_DATA = [
        'All',
        'Music',
        'Mixed',
        'Live',
        'New Year',
        'Youth music',
        'Deep House',
        'Lo-fi',
        'Asian Music',
        'Gaming',
        'Micheal learns to Rock',
        'Micheal learns to Rock',
        'Micheal learns to Rock',
        'Micheal learns to Rock',
        'Micheal learns to Rock',
        'Micheal learns to Rock',
        'Playlist',
        'Humans',
    ];

    return (
        <>
            <GridStyles>
                <CategorySlider data={CATEGORY_SLIDER_DATA} />

                {videos && videos.length > 0 && (
                    <div className="row sm-gutter" style={{ marginTop: 24 }}>
                        {videos.map((item, index) => (
                            <div key={index} className="col l-3 m-6 c-12">
                                <Suspense fallback={<VerticalVideoSkeleton />}>
                                    <Video data={item} />
                                </Suspense>
                            </div>
                        ))}
                    </div>
                )}
            </GridStyles>
        </>
    );
};

export default Home;
