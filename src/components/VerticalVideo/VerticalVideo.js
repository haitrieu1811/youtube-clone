import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import PropTyes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { DownloadIcon, LiveIcon } from '~/components/Icons/Icons';
import * as videoService from '~/services/videoService';
import * as channelService from '~/services/channelService';
import CircleButton from '../CircleButton';
import { AddQueueIcon, OptionIcon, ShareIcon, TickIcon } from '../Icons/Icons';
import Menu from '../Menu';
import Wrapper from '../Popper/Wrapper';
import styles from './VerticalVideo.module.scss';

const cx = classNames.bind(styles);

const VerticalVideo = ({ data }) => {
    const [video, setVideo] = useState();
    const [channel, setChannel] = useState();

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

    // Get channel
    useEffect(() => {
        (async () => {
            const res = await channelService.get(data.channelId);
            setChannel(res);
        })();
    }, [data.channelId]);

    // Get video
    useEffect(() => {
        (async () => {
            const res = await videoService.get(data.videoId);
            setVideo(res);
        })();
    }, [data.videoId]);

    return (
        <>
            {video && channel && (
                <div className={cx('wrapper')}>
                    <div className={cx('main')}>
                        <Link to={`/watch/${data.videoId}`} className={cx('head')}>
                            <img src={data.thumbnail} className={cx('thumbnail')} alt={data.title} />
                            {video.convertDuration !== '0:00' && (
                                <span className={cx('duration')}>{video.convertDuration}</span>
                            )}
                            <span className={cx('keep-hover')}>Keep hovering to play</span>
                        </Link>

                        <div className={cx('body')}>
                            <Link to={`/channel/${data.channelId}`}>
                                <img src={channel.thumbnail} className={cx('channel-thumb')} alt={channel.title} />
                            </Link>

                            <Link to={`/watch/${data.videoId}`} className={cx('info')}>
                                <h3 className={cx('title')} title={data.title}>
                                    {data.title}
                                </h3>

                                <div className={cx('channel-name')}>
                                    {channel.title}
                                    {channel.tick && (
                                        <span className={cx('tick')}>
                                            <TickIcon width="1.2rem" height="1.2rem" />
                                        </span>
                                    )}
                                </div>

                                <div className={cx('config')}>
                                    <span className={cx('view')}>{video.views} views</span>
                                    <span className={cx('separate')}>.</span>
                                    <span className={cx('publish-at')}>{data.publishSince}</span>
                                </div>

                                {video.convertDuration === '0:00' && (
                                    <span className={cx('live')}>
                                        <span className={cx('live-icon')}>
                                            <LiveIcon width="1.6rem" height="1.6rem" />
                                        </span>
                                        <span className={cx('live-text')}>LIVE</span>
                                    </span>
                                )}
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
