import classNames from 'classnames/bind';
import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HorizontalVideoSkeleton from '~/components/HorizontalVideoSkeleton';

import * as videoService from '~/services/videoService';
import styles from './Search.module.scss';

const Video = React.lazy(() => import('~/components/HorizontalVideo'));

const cx = classNames.bind(styles);

const Search = () => {
    const { q } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await videoService.list(q, 24);
            setVideos(res);
        })();
    }, [q]);

    return (
        <>
            <div className={cx('wrapper')}>
                {videos.map((video, index) => (
                    <Suspense key={index} fallback={<HorizontalVideoSkeleton />}>
                        <Video data={video} />
                    </Suspense>
                ))}
            </div>
        </>
    );
};

export default Search;
