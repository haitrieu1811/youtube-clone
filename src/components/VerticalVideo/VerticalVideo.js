import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTyes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { DownloadIcon } from '~/components/Icons/Icons';
import { AddQueueIcon, OptionIcon, ShareIcon, TickIcon } from '../Icons/Icons';
import Menu from '../Menu';
import Wrapper from '../Popper/Wrapper';
import styles from './VerticalVideo.module.scss';
import CircleButton from '../CircleButton';

const cx = classNames.bind(styles);

const VerticalVideo = ({ data }) => {
    const [channel, setChannel] = useState();
    // const [subscriber, setSubscriber] = useState(0);

    const diffDays = (dateString1, dateString2) => {
        const date1 = new Date(dateString1);
        const date2 = new Date(dateString2);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays;
    };

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
            const res = await axios({
                method: 'GET',
                url: 'https://www.googleapis.com/youtube/v3/channels',
                params: {
                    part: 'snippet',
                    maxResults: 1,
                    id: data.channelId,
                    // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
                    // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
                    key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
                },
            });

            console.log('>>> Data channel: ', res.data.items[0]);

            setChannel(res.data.items[0]);
        })();
    }, [data.channelId]);

    // useEffect(() => {
    //     (async () => {
    //         const res = await axios({
    //             method: 'GET',
    //             url: 'https://www.googleapis.com/youtube/v3/subscriptions',
    //             params: {
    //                 part: 'snippet',
    //                 channelId: data.channelId,
    //                 // key: 'AIzaSyA7VA0F-Cub1vsxig1eHAwZCL2kuEpJ-og',
    //                 // key: 'AIzaSyCMylU-9JSqd2vovIC5HRbm_AZyx710WbQ',
    //                 key: 'AIzaSyCkE39Mg6XPAFYprzto4wo7rjNL9Jxsr5w',
    //             },
    //         });

    //         console.log('>>> Subscriber: ', res);
    //     })();
    // }, [data.channelId]);

    console.log('Channel is... ', channel);

    return (
        <>
            {data && channel && (
                <div className={cx('wrapper')}>
                    <Link to="/" className={cx('main')}>
                        <div className={cx('head')}>
                            <img src={data.thumbnail} className={cx('thumbnail')} alt={data.title} />
                            <span className={cx('time')}>{data.time}</span>
                            <span className={cx('keep-hover')}>Keep hovering to play</span>
                        </div>
                        <div className={cx('body')}>
                            <img
                                src={channel.snippet.thumbnails.default.url}
                                className={cx('channel-thumb')}
                                alt={data.channelName}
                            />

                            <div className={cx('info')}>
                                <h3 className={cx('title')} title={data.title}>
                                    {data.title}
                                </h3>
                                <div className={cx('channel-name')}>
                                    {data.channelName}
                                    {data.tick && (
                                        <span className={cx('tick')}>
                                            <TickIcon width="1.2rem" height="1.2rem" />
                                        </span>
                                    )}
                                </div>
                                <div className={cx('config')}>
                                    <span className={cx('view')}>{data.view} views</span>
                                    <span className={cx('separate')}>.</span>
                                    <span className={cx('publish-at')}>
                                        {diffDays(data.publishAt, moment(new Date()).format('MM/DD/YYYY'))} days ago
                                    </span>
                                </div>
                            </div>

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
                    </Link>
                </div>
            )}
        </>
    );
};

VerticalVideo.propTypes = {
    data: PropTyes.object.isRequired,
};

export default VerticalVideo;
