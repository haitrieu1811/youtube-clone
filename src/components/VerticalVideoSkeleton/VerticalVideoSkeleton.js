import classNames from 'classnames/bind';

import styles from './VerticalVideoSkeleton.module.scss';

const cx = classNames.bind(styles);

const VerticalVideoSkeleton = () => {
    return (
        <div className={cx('wrapper')}>
            <div to="/" className={cx('main')}>
                <div className={cx('head')}>
                    <div className={cx('thumbnail')}></div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('channel-thumb')}></div>
                    <div className={cx('info')}>
                        <div className={cx('title')}></div>
                        <div className={cx('channel')}></div>
                        <div className={cx('config')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalVideoSkeleton;
