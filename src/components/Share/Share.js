import classNames from 'classnames/bind';

import styles from './Share.module.scss';

const cx = classNames.bind(styles);

const Share = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('socials')}></div>
            <div className={cx('path')}>
                <div className={cx('url')}>https://youtu.be/HoXWjiU5g6Q</div>
                <button className={cx('coppy-btn')}>Copy</button>
            </div>
        </div>
    );
};

export default Share;
