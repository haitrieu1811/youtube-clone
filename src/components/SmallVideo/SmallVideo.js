import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './SmallVideo.module.scss';
import { OptionIcon, WatchLaterIcon, AddQueueIcon, ShareIcon, DownloadIcon } from '../Icons/Icons';
import Wrapper from '../Popper/Wrapper';
import Menu from '../Menu';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);

const SmallVideo = ({ data }) => {
    const [channel, setChannel] = useState({});
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

    useEffect(() => {
        (async () => {
            const res = await videoService.channel(data.channelId);
            setChannel(res);
        })();
    }, [data.channelId]);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
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
                {channel && <div className={cx('channel')}>{channel.title}</div>}
                <div className={cx('config')}>
                    <span>35M views</span>
                    <span className={cx('config-separate')}></span>
                    <span>4 years ago</span>
                </div>
            </Link>

            <Tippy interactive placement="bottom-end" trigger="click" render={handleRenderOptions}>
                <span className={cx('options')}>
                    <OptionIcon width="2.4rem" height="2.4rem" />
                </span>
            </Tippy>
        </div>
    );
};

SmallVideo.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SmallVideo;
