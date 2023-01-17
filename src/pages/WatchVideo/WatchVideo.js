import classNames from 'classnames/bind';
import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Comment from '~/components/Comment';
import Modal from '~/components/Modal';
import Share from '~/components/Share';
import SmallVideoSkeleton from '~/components/SmallVideoSkeleton';
import * as channelService from '~/services/channelService';
import * as videoService from '~/services/videoService';
import Config from './Config';
import Description from './Description';
import styles from './WatchVideo.module.scss';

const cx = classNames.bind(styles);

const AsideVideo = React.lazy(() => import('~/components/SmallVideo'));

const VideoDetail = () => {
    const { videoId } = useParams();

    const [video, setVideo] = useState();
    const [statistic, setStatistic] = useState();
    const [channelStatistic, setChannelStatistic] = useState();

    const [showModal, setShowModal] = useState(false);

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

    useEffect(() => {
        (async () => {
            if (video) {
                const statistic = await channelService.statistic(video.channelId);
                setChannelStatistic(statistic);
            }
        })();
    }, [video]);

    const handleModal = () => {
        setShowModal((prevState) => !prevState);
    };

    // Videos
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await videoService.list('blv anh quân', 24);
            setVideos(res);
        })();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('stage')}>
                {video && statistic && channelStatistic && (
                    <>
                        <div className={cx('video')}>
                            <div className={cx('main')}>
                                <iframe
                                    width="885"
                                    height="498"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <Config setShowModal={setShowModal} />

                            <Description />
                        </div>
                        <Comment videoId={videoId} />
                    </>
                )}
            </div>

            {videos && videos.length > 0 && (
                <div className={cx('videos')}>
                    {videos.map((item, index) => (
                        <Suspense key={index} fallback={<SmallVideoSkeleton />}>
                            <AsideVideo data={item} />
                        </Suspense>
                    ))}
                </div>
            )}

            <Modal title="Share" show={showModal} handleClose={handleModal} small content={<Share />} />
        </div>
    );
};

export default VideoDetail;
