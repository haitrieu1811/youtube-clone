import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as videoService from '~/services/videoService';
import * as channelService from '~/services/channelService';
import CircleButton from '../CircleButton';
import { AddQueueIcon, OptionIcon, TickIcon, WatchLaterIcon } from '../Icons/Icons';
import Menu from '../Menu';
import Wrapper from '../Popper/Wrapper';
import styles from './HorizontalVideo.module.scss';

const cx = classNames.bind(styles);

const HorizontalVideo = ({ data }) => {
    const [channel, setChannel] = useState();
    const [statistic, setStatistic] = useState();
    const [channelStatistic, setChannelStatistic] = useState();

    const MENU_DATA = [
        {
            icon: <AddQueueIcon width="2.4rem" />,
            label: 'Add to queue',
        },
    ];

    const handleRenderOptions = () => {
        return (
            <Wrapper>
                <Menu data={MENU_DATA} small />
            </Wrapper>
        );
    };

    // Get channel
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

    // Get statistic
    useEffect(() => {
        (async () => {
            const statistic = await videoService.statistic(data.videoId);
            setStatistic(statistic);
        })();
    }, [data.videoId]);

    return (
        <>
            {data && channel && statistic && channelStatistic && (
                <div className={cx('wrapper')}>
                    <Link to={`/watch/${data.videoId}`} className={cx('thumbnail-wp')}>
                        <div className={cx('actions')}>
                            <div className={cx('action')}>
                                <WatchLaterIcon width="2.4rem" height="2.4rem" />
                            </div>
                            <div className={cx('action')}>
                                <AddQueueIcon width="2.4rem" height="2.4rem" />
                            </div>
                        </div>
                        <img className={cx('thumbnail')} src={data.thumbnail} alt={data.title} />
                        <span className={cx('time')}>19:41</span>
                    </Link>
                    <Link to={`/watch/${data.videoId}`} className={cx('info')}>
                        <h3 className={cx('title')}>{data.title}</h3>
                        <div className={cx('config')}>
                            <div className={cx('config-value')}>{statistic.views} lượt xem</div>
                            <div className={cx('config-separate')}></div>
                            <div className={cx('config-value')}>{data.publishSince}</div>
                        </div>
                        <div className={cx('channel')}>
                            <img className={cx('channel-thumbnail')} src={channel.thumbnail} alt={channel.title} />
                            <span className={cx('channel-name')}>{channel.title}</span>
                            {channelStatistic.subscriberCount > 100000 && (
                                <span className={cx('channel-tick')}>
                                    <TickIcon width="1.4rem" height="1.4rem" />
                                </span>
                            )}
                        </div>
                        <div className={cx('description')}>{data.description}</div>
                        <span className={cx('new')}>New</span>
                    </Link>
                    <Tippy interactive placement="bottom-end" trigger="click" render={handleRenderOptions}>
                        <span className={cx('options')}>
                            <CircleButton icon={<OptionIcon width="2.4rem" height="2.4rem" />} />
                        </span>
                    </Tippy>
                </div>
            )}
        </>
    );
};

HorizontalVideo.propTypes = {
    data: PropTypes.object.isRequired,
};

export default HorizontalVideo;
