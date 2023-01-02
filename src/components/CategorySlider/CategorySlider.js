import classNames from 'classnames/bind';

import styles from './CategorySlider.module.scss';
import { NextIcon, PrevIcon } from '../Icons/Icons';

const cx = classNames.bind(styles);

const CategorySlider = () => {
    return (
        <>
            <div className={cx('wrapper')}>
                {/* <div className={cx('prev')}>
                    <PrevIcon />
                </div> */}
                <div className={cx('list')}>
                    <div className={cx('item', 'active')}>All</div>
                    <div className={cx('item')}>Music</div>
                    <div className={cx('item')}>Mixed</div>
                    <div className={cx('item')}>Live</div>
                    <div className={cx('item')}>New Year</div>
                    <div className={cx('item')}>Youth music</div>
                    <div className={cx('item')}>Deep House</div>
                    <div className={cx('item')}>Lo-fi</div>
                    <div className={cx('item')}>Asian Music</div>
                    <div className={cx('item')}>Gaming</div>
                    <div className={cx('item')}>Micheal learns to Rock</div>
                    <div className={cx('item')}>Playlist</div>
                    <div className={cx('item')}>Humans</div>
                </div>
                <div className={cx('next')}>
                    <NextIcon width="2.4rem" />
                </div>
            </div>
        </>
    );
};

export default CategorySlider;
