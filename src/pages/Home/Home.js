import React, { Suspense, useEffect, useState } from 'react';

import CategorySlider from '~/components/CategorySlider';
import GridStyles from '~/components/GridStyles';
import VerticalVideoSkeleton from '~/components/VerticalVideoSkeleton';
import * as videoService from '~/services/videoService';

const Video = React.lazy(() => import('~/components/VerticalVideo'));

const Home = () => {
    const [query, setQuery] = useState('blv anh quan');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await videoService.list(query, 48);
            setVideos(res);
        })();
    }, [query]);

    const CATEGORY_SLIDER_DATA = [
        {
            label: 'All',
            value: 'All',
        },
        {
            label: 'Music',
            value: 'Music',
        },
        {
            label: 'Champions League',
            value: 'UEFA Champions League',
        },
        {
            label: 'EPL',
            value: 'EPL',
        },
        {
            label: 'Laliga',
            value: 'Laliga',
        },
        {
            label: 'Serie A',
            value: 'Serie A',
        },
        {
            label: 'Ligue 1',
            value: 'Ligue 1',
        },
        {
            label: 'Bundesliga',
            value: 'Bundesliga',
        },
        {
            label: 'Deep House',
            value: 'Deep House',
        },
        {
            label: 'Lo-fi',
            value: 'Lo-fi',
        },
        {
            label: 'Asian Music',
            value: 'Asian Music',
        },
        {
            label: 'Gaming',
            value: 'Gaming',
        },
        {
            label: 'Micheal learns to Rock',
            value: 'Micheal learns to Rock',
        },
        {
            label: 'Playlist',
            value: 'Playlist',
        },
        {
            label: 'Humans',
            value: 'Humans',
        },
    ];

    // Handle change query
    const handleChangeQuery = (category) => {
        console.log(category);
        setQuery(category);
        console.log('>>> ', query);
        window.scrollTo({ top: 0 });
    };

    return (
        <GridStyles>
            <CategorySlider data={CATEGORY_SLIDER_DATA} onChangeCategory={handleChangeQuery} />

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
    );
};

export default Home;
