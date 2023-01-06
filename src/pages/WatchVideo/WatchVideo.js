import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import {
    DislikeIcon,
    DownloadIcon,
    HorizontalOptionIcon,
    LikeIcon,
    ReportIcon,
    SaveIcon,
    ShareIcon,
    ShowTranscriptIcon,
    TickIcon,
} from '~/components/Icons/Icons';
import Menu from '~/components/Menu';
import Modal from '~/components/Modal';
import Wrapper from '~/components/Popper/Wrapper';
import Share from '~/components/Share';
import SmallVideo from '~/components/SmallVideo';
import * as videoService from '~/services/videoService';
import styles from './WatchVideo.module.scss';
import Comment from '~/components/Comment';

const cx = classNames.bind(styles);

const VideoDetail = () => {
    const { videoId } = useParams();
    const [video, setVideo] = useState();
    const [channel, setChannel] = useState();
    const [showModal, setShowModal] = useState(false);

    const [showMore, setShowMore] = useState(true);
    const [showLess, setShowLess] = useState(false);
    const [descActive, setDescActive] = useState(false);

    useEffect(() => {
        (async () => {
            const res = await videoService.detail(videoId);
            setVideo(res);
        })();
    }, [videoId]);

    useEffect(() => {
        (async () => {
            if (video) {
                const res = await videoService.channel(video.channelId);
                setChannel(res);
            }
        })();
    }, [video]);

    const OPTIONS_DATA = [
        {
            icon: <SaveIcon width="2.4rem" />,
            label: 'Save',
        },
        {
            icon: <ReportIcon width="2.4rem" />,
            label: 'Report',
        },
        {
            icon: <ShowTranscriptIcon width="2.4rem" />,
            label: 'Show transcript',
        },
    ];

    const handleRenderOptions = () => {
        return (
            <Wrapper>
                <Menu data={OPTIONS_DATA} small />
            </Wrapper>
        );
    };

    const handleModal = () => {
        setShowModal((prevState) => !prevState);
    };

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

    // Videos
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await videoService.list('epl', 24);
            setVideos(res);
        })();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('stage')}>
                {video && (
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

                            <h2 className={cx('title')}>{video.title}</h2>

                            <div className={cx('config')}>
                                {channel && (
                                    <div className={cx('channel')}>
                                        <Link className={cx('channel-thumb-wp')}>
                                            <img
                                                src={channel.thumbnail}
                                                className={cx('channel-thumb')}
                                                alt={channel.title}
                                            />
                                        </Link>

                                        <div className={cx('channel-info')}>
                                            <Link>
                                                <h3 className={cx('channel-name')}>
                                                    {channel.title} <TickIcon width="1.5rem" height="1.5rem" />
                                                </h3>
                                            </Link>

                                            <div className={cx('channel-subscribers')}>333K subscribers</div>
                                        </div>

                                        <button type="button" className={cx('subcribe-btn')}>
                                            Subscribe
                                        </button>
                                    </div>
                                )}

                                <div className={cx('actions')}>
                                    <div className={cx('like-dislike')}>
                                        <div className={cx('like-dislike-btn')}>
                                            <LikeIcon width="2.4rem" height="2.4rem" />
                                            <span className={cx('like-dislike-count')}>854</span>
                                        </div>
                                        <div className={cx('like-dislike-separate')}></div>
                                        <div className={cx('like-dislike-btn')}>
                                            <DislikeIcon width="2.4rem" height="2.4rem" />
                                            <span className={cx('like-dislike-count')}>29</span>
                                        </div>
                                    </div>
                                    <div className={cx('share')} onClick={handleModal}>
                                        <ShareIcon width="2.4rem" height="2.4rem" />
                                        <span>Share</span>
                                    </div>
                                    <div className={cx('share')}>
                                        <DownloadIcon width="2.4rem" height="2.4rem" />
                                        <span>Download</span>
                                    </div>
                                    <Tippy
                                        placement="bottom-start"
                                        trigger="click"
                                        interactive
                                        render={handleRenderOptions}
                                    >
                                        <div className={cx('other-actions')}>
                                            <HorizontalOptionIcon width="2.4rem" height="2.4rem" />
                                        </div>
                                    </Tippy>
                                </div>
                            </div>

                            <div className={cx('description-wp', { active: descActive })}>
                                <div className={cx('description-config')}>
                                    <strong>233,976 views</strong> <strong>24 Dec 2022</strong>
                                </div>
                                <div className={cx('description')}>
                                    {descActive ? video.description : video.description.substring(0, 240)}
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
                        </div>
                        <Comment videoId={videoId} />
                    </>
                )}
            </div>

            {videos && videos.length > 0 && (
                <div className={cx('videos')}>
                    {videos.map((item, index) => (
                        <SmallVideo key={index} data={item} />
                    ))}
                </div>
            )}

            <Modal title="Share" show={showModal} handleClose={handleModal} small content={<Share />} />
        </div>
    );
};

export default VideoDetail;
