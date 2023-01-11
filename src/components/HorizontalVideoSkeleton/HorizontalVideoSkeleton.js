import classNames from 'classnames/bind';

import styles from './HorizontalVideoSkeleton.module.scss';

const cx = classNames.bind(styles);

const HorizontalVideo = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('thumbnail-wp')}></div>
            <div className={cx('info')}>
                <h3 className={cx('title')}></h3>
                <div className={cx('config')}></div>
                <div className={cx('channel')}></div>
                <div className={cx('description')}></div>
            </div>
        </div>
    );
};

export default HorizontalVideo;
