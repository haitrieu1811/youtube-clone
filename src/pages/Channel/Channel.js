import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Channel.module.scss';
import * as channelService from '~/services/channelService';
import { TickIcon } from '~/components/Icons/Icons';
import intToString from '~/utils/intToString';

const cx = classNames.bind(styles);

const Channel = () => {
    const { channelId } = useParams();

    const [channel, setChannel] = useState();

    // Get channel
    useEffect(() => {
        (async () => {
            const res = await channelService.get(channelId);
            setChannel(res);
        })();
    }, [channelId]);

    return (
        <>
            {channel && (
                <div className={cx('wrapper')}>
                    <div className={cx('cover-image')} style={{ backgroundImage: `url(${channel.coverImage})` }}></div>

                    <div className={cx('channel')}>
                        <div className={cx('base')}>
                            <img src={channel.thumbnail} alt={channel.title} className={cx('thumbnail')} />
                            <div className={cx('info')}>
                                <h2 className={cx('name')}>
                                    {channel.title}
                                    {channel.tick && (
                                        <span className={cx('tick')}>
                                            <TickIcon width="1.4rem" height="1.4rem" />
                                        </span>
                                    )}
                                </h2>
                                <div className={cx('custom-url')}>{channel.customUrl}</div>
                                <div className={cx('subscriber-count')}>
                                    {intToString(channel.subscriberCount)} subscribers
                                </div>
                            </div>
                        </div>

                        <div className={cx('subscribe')}>
                            <button type="button" className={cx('join-btn')}>
                                Join
                            </button>
                            <button type="button" className={cx('subscribe-btn')}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Channel;
