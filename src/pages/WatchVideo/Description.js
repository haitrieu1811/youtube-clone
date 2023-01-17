import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as videoService from '~/services/videoService';
import numberWithSeparate from '~/utils/numberWithSeparate';
import styles from './WatchVideo.module.scss';

const cx = classNames.bind(styles);

const Description = () => {
    const { videoId } = useParams();

    const [video, setVideo] = useState();
    const [statistic, setStatistic] = useState();

    const [showMore, setShowMore] = useState(true);
    const [showLess, setShowLess] = useState(false);
    const [descActive, setDescActive] = useState(false);

    // Video
    useEffect(() => {
        (async () => {
            const res = await videoService.detail(videoId);
            setVideo(res);
        })();
    }, [videoId]);

    useEffect(() => {
        (async () => {
            const statistic = await videoService.statistic(videoId);
            setStatistic(statistic);
        })();
    }, [videoId]);

    const handleShowMore = () => {
        setShowMore(false);
        setShowLess(true);
        setDescActive(true);
    };

    const handleShowLess = () => {
        setShowMore(true);
        setShowLess(false);
        setDescActive(false);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {statistic && video && (
                <div className={cx('description-wp', { active: descActive })}>
                    <div className={cx('description-config')}>
                        <strong>{numberWithSeparate(statistic.exactlyViews)} views</strong>
                        <strong>{video.publishSince}</strong>
                    </div>
                    <div className={cx('description')}>
                        {descActive ? video.description : video.description.substring(0, 180)}
                        {showMore && !showLess && (
                            <strong className={cx('show-more')} onClick={handleShowMore}>
                                Show more
                            </strong>
                        )}
                        {showLess && !showMore && (
                            <div className={cx('show-less')} onClick={handleShowLess}>
                                Show less
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Description;
