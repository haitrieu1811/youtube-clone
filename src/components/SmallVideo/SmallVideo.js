import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as videoService from '~/services/videoService';
import * as channelService from '~/services/channelService';
import { AddQueueIcon, DownloadIcon, OptionIcon, ShareIcon, TickIcon, WatchLaterIcon } from '../Icons/Icons';
import Menu from '../Menu';
import Wrapper from '../Popper/Wrapper';
import styles from './SmallVideo.module.scss';

const cx = classNames.bind(styles);

const SmallVideo = ({ data }) => {
    const [channel, setChannel] = useState({});
    const [statistic, setStatistic] = useState();
    const [channelStatistic, setChannelStatistic] = useState();

    const MENU_DATA = [
        {
            icon: <AddQueueIcon width="2.4rem" height="2.4rem" />,
            label: 'Add to queue',
            separate: false,
            chevron: false,
        },
        {
            icon: <DownloadIcon width="2.4rem" height="2.4rem" />,
            label: 'Download',
            separate: false,
            chevron: false,
        },
        {
            icon: <ShareIcon width="2.4rem" height="2.4rem" />,
            label: 'Share',
            separate: false,
            chevron: false,
        },
    ];

    const handleRenderOptions = () => {
        return (
            <Wrapper>
                <Menu data={MENU_DATA} small />
            </Wrapper>
        );
    };

    // Channel
    useEffect(() => {
        (async () => {
            const res = await channelService.get(data.channelId);
            setChannel(res);
        })();
    }, [data.channelId]);

    useEffect(() => {
        (async () => {
            const statistic = await channelService.statistic(data.channelId);
            setChannelStatistic(statistic);
        })();
    }, [data.channelId]);

    useEffect(() => {
        (async () => {
            const statistic = await videoService.statistic(data.videoId);
            setStatistic(statistic);
        })();
    }, [data.videoId]);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <>
            {statistic && channelStatistic && channel && (
                <div className={cx('wrapper')} onClick={handleScrollToTop}>
                    <Link to={`/watch/${data.videoId}`} className={cx('thumbnail-wp')}>
                        <div className={cx('actions')}>
                            <div className={cx('action')}>
                                <WatchLaterIcon width="2.1rem" height="2.1rem" />
                            </div>
                            <div className={cx('action')}>
                                <AddQueueIcon width="2.1rem" height="2.1rem" />
                            </div>
                        </div>

                        <img src={data.thumbnail} alt="" className={cx('thumbnail')} />

                        <span className={cx('time')}>36:21</span>
                    </Link>

                    <Link to={`/watch/${data.videoId}`} className={cx('info')}>
                        <h3 className={cx('title')}>{data.title}</h3>
                        <div className={cx('channel')}>
                            {channel.title}
                            <span className={cx('tick')}>
                                <TickIcon width="1.2rem" height="1.2rem" />
                            </span>
                        </div>
                        <div className={cx('config')}>
                            <span>{statistic.views} views</span>
                            <span className={cx('config-separate')}></span>
                            <span>{data.publishSince}</span>
                        </div>
                    </Link>

                    <Tippy interactive placement="bottom-end" trigger="click" render={handleRenderOptions}>
                        <span className={cx('options')}>
                            <OptionIcon width="2.4rem" height="2.4rem" />
                        </span>
                    </Tippy>
                </div>
            )}
        </>
    );
};

SmallVideo.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SmallVideo;
