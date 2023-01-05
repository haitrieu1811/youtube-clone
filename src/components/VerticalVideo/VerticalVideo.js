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
import { diffDays } from '~/utils/diffDays';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);

const VerticalVideo = ({ data }) => {
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

    useEffect(() => {
        (async () => {
            const res = await videoService.channel(data.channelId);
            setChannel(res);
        })();
    }, [data.channelId]);

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('main')}>
                    <Link to={`/watch/${data.videoId}`} className={cx('head')}>
                        <img src={data.thumbnail} className={cx('thumbnail')} alt={data.title} />
                        <span className={cx('time')}>{data.time}</span>
                        <span className={cx('keep-hover')}>Keep hovering to play</span>
                    </Link>
                    <div className={cx('body')}>
                        {channel && <img src={channel.thumbnail} className={cx('channel-thumb')} alt={channel.title} />}

                        <Link to={`/watch/${data.videoId}`} className={cx('info')}>
                            <h3 className={cx('title')} title={data.title}>
                                {data.title}
                            </h3>
                            <div className={cx('channel-name')}>
                                {channel && channel.title}
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
        </>
    );
};

VerticalVideo.propTypes = {
    data: PropTyes.object.isRequired,
};

export default VerticalVideo;
