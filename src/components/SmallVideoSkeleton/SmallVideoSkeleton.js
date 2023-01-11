import classNames from 'classnames/bind';

import styles from './SmallVideoSkeleton.module.scss';

const cx = classNames.bind(styles);

const SmallVideoSkeleton = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('thumbnail-wp')}></div>

            <div className={cx('info')}>
                <h3 className={cx('title')}></h3>
                <div className={cx('channel')}></div>
                <div className={cx('config')}></div>
            </div>
        </div>
    );
};

export default SmallVideoSkeleton;
