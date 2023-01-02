import classNames from 'classnames/bind';
import PropTyes from 'prop-types';
import { Link } from 'react-router-dom';

import { TickIcon } from '../Icons/Icons';
import styles from './VerticalVideo.module.scss';

const cx = classNames.bind(styles);

const VerticalVideo = ({ data }) => {
    return (
        <>
            {data && (
                <div className={cx('wrapper')}>
                    <Link to="/" className={cx('main')}>
                        <div className={cx('head')}>
                            <img src={data.thumbnail} className={cx('thumbnail')} alt={data.title} />
                            <span className={cx('time')}>{data.time}</span>
                            <span className={cx('keep-hover')}>Keep hovering to play</span>
                        </div>
                        <div className={cx('body')}>
                            <img src={data.channelAvatar} className={cx('channel-thumb')} alt={data.channelName} />

                            <div className={cx('info')}>
                                <h3 className={cx('title')}>{data.title}</h3>
                                <div className={cx('channel-name')}>
                                    {data.channelName}
                                    {data.tick && (
                                        <span className={cx('tick')}>
                                            <TickIcon width="1.3rem" height="1.3rem" />
                                        </span>
                                    )}
                                </div>
                                <div className={cx('config')}>
                                    <span className={cx('view')}>{data.view} views</span>
                                    <span className={cx('separate')}>.</span>
                                    <span className={cx('publish-at')}>{data.publishAt}</span>
                                </div>
                            </div>
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
