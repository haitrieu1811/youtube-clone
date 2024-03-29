import React, { Suspense, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import CategorySlider from '~/components/CategorySlider';
import GridStyles from '~/components/GridStyles';
import VerticalVideoSkeleton from '~/components/VerticalVideoSkeleton';
import * as videoService from '~/services/videoService';
import { CATEGORY_SLIDER_DATA } from './data';
import CategorySliderLoading from '~/components/CategorySliderLoading';
import styles from './Home.module.scss';

const Video = React.lazy(() => import('~/components/VerticalVideo'));

const cx = classNames.bind(styles);

const Home = () => {
    const [query, setQuery] = useState('ngoại hạng anh');
    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            const res = await videoService.list(query, 48);

            setVideos(res);
            setIsLoading(false);
        })();
    }, [query]);

    // Handle change query
    const handleChangeQuery = (category) => {
        setQuery(category);
        window.scrollTo({ top: 0 });
    };

    return (
        <GridStyles>
            <div className={cx('wrapper')}>
                <CategorySlider data={CATEGORY_SLIDER_DATA} onChangeCategory={handleChangeQuery} />
                {isLoading && <CategorySliderLoading />}

                {videos && videos.length > 0 && !isLoading && (
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
            </div>
        </GridStyles>
    );
};

export default Home;
