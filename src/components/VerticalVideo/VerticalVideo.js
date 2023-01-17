import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTyes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { DownloadIcon } from '~/components/Icons/Icons';
import * as videoService from '~/services/videoService';
import * as channelService from '~/services/channelService';
import CircleButton from '../CircleButton';
import { AddQueueIcon, OptionIcon, ShareIcon, TickIcon } from '../Icons/Icons';
import Menu from '../Menu';
import Wrapper from '../Popper/Wrapper';
import styles from './VerticalVideo.module.scss';

const cx = classNames.bind(styles);

const VerticalVideo = ({ data }) => {
    const [channel, setChannel] = useState();
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

    const handleRenderMenu = () => {
        return (
            <Wrapper>
                <Menu data={MENU_DATA} small />
            </Wrapper>
        );
    };

    useEffect(() => {
        (async () => {
            const channel = await channelService.get(data.channelId);
            setChannel(channel);
        })();
    }, [data.channelId]);

    useEffect(() => {
        (async () => {
            const statistic = await videoService.statistic(data.videoId);
            setStatistic(statistic);
        })();
    }, [data.videoId]);

    useEffect(() => {
        (async () => {
            const statistic = await channelService.statistic(data.channelId);
            setChannelStatistic(statistic);
        })();
    }, [data.channelId]);

    return (
        <>
            {statistic && channelStatistic && (
                <div className={cx('wrapper')}>
                    <div className={cx('main')}>
                        <Link to={`/watch/${data.videoId}`} className={cx('head')}>
                            <img src={data.thumbnail} className={cx('thumbnail')} alt={data.title} />
                            <span className={cx('time')}>{data.time}</span>
                            <span className={cx('keep-hover')}>Keep hovering to play</span>
                        </Link>
                        <div className={cx('body')}>
                            {channel && (
                                <img src={channel.thumbnail} className={cx('channel-thumb')} alt={channel.title} />
                            )}

                            <Link to={`/watch/${data.videoId}`} className={cx('info')}>
                                <h3 className={cx('title')} title={data.title}>
                                    {data.title}
                                </h3>
                                <div className={cx('channel-name')}>
                                    {channel && channel.title}
                                    {channelStatistic.subscriberCount > 100000 && (
                                        <span className={cx('tick')}>
                                            <TickIcon width="1.2rem" height="1.2rem" />
                                        </span>
                                    )}
                                </div>
                                <div className={cx('config')}>
                                    <span className={cx('view')}>{statistic.views} views</span>
                                    <span className={cx('separate')}>.</span>
                                    <span className={cx('publish-at')}>{data.publishSince}</span>
                                </div>
                            </Link>

                            <Tippy
                                placement="bottom-start"
                                trigger="click"
                                interactive
                                render={handleRenderMenu}
                                offset={[8, 12]}
                            >
                                <span className={cx('options')}>
                                    <CircleButton icon={<OptionIcon width="2.3rem" />} />
                                </span>
                            </Tippy>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

VerticalVideo.propTypes = {
    data: PropTyes.object.isRequired,
};

export default VerticalVideo;
