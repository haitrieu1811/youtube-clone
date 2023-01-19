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
import Wrapper from '~/components/Popper/Wrapper';
import * as channelService from '~/services/channelService';
import * as videoService from '~/services/videoService';
import intToString from '~/utils/intToString';
import styles from './WatchVideo.module.scss';

const cx = classNames.bind(styles);

const Config = ({ setShowModal }) => {
    const { videoId } = useParams();

    const [video, setVideo] = useState();
    const [channel, setChannel] = useState();
    const [statistic, setStatistic] = useState();
    const [channelStatistic, setChannelStatistic] = useState();

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

    // Channel
    useEffect(() => {
        (async () => {
            if (video) {
                const res = await channelService.get(video.channelId);
                setChannel(res);
            }
        })();
    }, [video]);

    useEffect(() => {
        (async () => {
            if (video) {
                const statistic = await channelService.statistic(video.channelId);
                setChannelStatistic(statistic);
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

    return (
        <>
            {video && channel && channelStatistic && statistic && (
                <>
                    <h2 className={cx('title')}>{video.title}</h2>
                    <div className={cx('config')}>
                        <div className={cx('channel')}>
                            <Link className={cx('channel-thumb-wp')}>
                                <img src={channel.thumbnail} className={cx('channel-thumb')} alt={channel.title} />
                            </Link>

                            <div className={cx('channel-info')}>
                                <Link>
                                    <h3 className={cx('channel-name')}>
                                        {channel.title}
                                        {channelStatistic.subscriberCount > 100000 && (
                                            <TickIcon width="1.5rem" height="1.5rem" />
                                        )}
                                    </h3>
                                </Link>

                                <div className={cx('channel-subscribers')}>
                                    {!channelStatistic.hiddenSubscriberCount
                                        ? intToString(channelStatistic.subscriberCount) + ' subscribers'
                                        : ''}
                                </div>
                            </div>

                            <button type="button" className={cx('subcribe-btn')}>
                                Subscribe
                            </button>
                        </div>

                        <div className={cx('actions')}>
                            <div className={cx('like-dislike')}>
                                <div className={cx('like-dislike-btn')}>
                                    <LikeIcon width="2.4rem" height="2.4rem" />
                                    <span className={cx('like-dislike-count')}>{statistic.likes}</span>
                                </div>
                                <div className={cx('like-dislike-separate')}></div>
                                <div className={cx('like-dislike-btn')}>
                                    <DislikeIcon width="2.4rem" height="2.4rem" />
                                    <span className={cx('like-dislike-count')}>{statistic.favorites}</span>
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
                            <Tippy placement="bottom-start" trigger="click" interactive render={handleRenderOptions}>
                                <div className={cx('other-actions')}>
                                    <HorizontalOptionIcon width="2.4rem" height="2.4rem" />
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Config;
