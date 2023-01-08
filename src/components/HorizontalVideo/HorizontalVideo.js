import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import moment from 'moment';

import styles from './HorizontalVideo.module.scss';
import CircleButton from '../CircleButton';
import { AddQueueIcon, OptionIcon, TickIcon } from '../Icons/Icons';
import Wrapper from '../Popper/Wrapper';
import Menu from '../Menu';
import * as videoService from '~/services/videoService';
import { diffDays } from '~/utils/diffDays';

const cx = classNames.bind(styles);

const HorizontalVideo = ({ data }) => {
    const [channel, setChannel] = useState({});

    const MENU_DATA = [
        {
            icon: <AddQueueIcon width="2.4rem" />,
            label: 'Add to queue',
        },
    ];

    const handleRenderActions = () => {
        return (
            <Wrapper>
                <Menu data={MENU_DATA} small />
            </Wrapper>
        );
    };

    // Get channel
    useEffect(() => {
        (async () => {
            const res = await videoService.channel(data.channelId);
            setChannel(res);
        })();
    }, [data.channelId]);

    return (
        <>
            {data && channel && (
                <div className={cx('wrapper')}>
                    <Link to={`/watch/${data.videoId}`} className={cx('thumbnail-wp')}>
                        <img className={cx('thumbnail')} src={data.thumbnail} alt={data.title} />
                        <span className={cx('time')}>19:41</span>
                    </Link>
                    <Link to={`/watch/${data.videoId}`} className={cx('info')}>
                        <h3 className={cx('title')}>{data.title}</h3>
                        <div className={cx('config')}>
                            <div className={cx('config-value')}>28K lượt xem</div>
                            <div className={cx('config-separate')}></div>
                            <div className={cx('config-value')}>
                                {diffDays(data.publishAt, moment(new Date()).format('MM/DD/YYYY'))} days ago
                            </div>
                        </div>
                        <div className={cx('channel')}>
                            <img className={cx('channel-thumbnail')} src={channel.thumbnail} alt={channel.title} />
                            <span className={cx('channel-name')}>{channel.title}</span>
                            <span className={cx('channel-tick')}>
                                <TickIcon width="1.4rem" height="1.4rem" />
                            </span>
                        </div>
                        <div className={cx('description')}>{data.description}</div>
                        <span className={cx('new')}>New</span>
                    </Link>
                    <Tippy interactive placement="bottom-end" trigger="click" render={handleRenderActions}>
                        <span className={cx('actions')}>
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
