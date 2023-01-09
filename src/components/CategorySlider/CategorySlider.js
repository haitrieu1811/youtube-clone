import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './CategorySlider.module.scss';
import { NextIcon, PrevIcon } from '../Icons/Icons';
import CircleButton from '../CircleButton';
import { useState } from 'react';

const cx = classNames.bind(styles);

const CategorySlider = ({ data }) => {
    const [position, setPosition] = useState(0);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    const handleNext = () => {
        setPosition((prevState) => prevState - 200);
        check();
    };

    const handlePrev = () => {
        setPosition((prevState) => prevState + 200);
        check();
    };

    const check = () => {
        if (position > 0) {
            setShowPrev(false);
        } else {
            setShowPrev(true);
        }

        if (position < -1200) {
            setShowNext(false);
        } else {
            setShowNext(true);
        }
    };

    const handleChoose = (e) => {
        e.target.classList.add(cx('active'));
    };

    return (
        <>
            <div className={cx('wrapper')}>
                {showPrev && (
                    <div className={cx('prev')}>
                        <CircleButton icon={<PrevIcon width="2.4rem" />} onClick={handlePrev} />
                    </div>
                )}

                <div className={cx('list-wp')}>
                    <div className={cx('list')} style={{ transform: `translateX(${position}px)` }}>
                        {data &&
                            data.length > 0 &&
                            data.map((item, index) => (
                                <div key={index} className={cx('item')} onClick={(e) => handleChoose(e)}>
                                    {item}
                                </div>
                            ))}
                    </div>
                </div>

                {showNext && (
                    <div className={cx('next')}>
                        <CircleButton icon={<NextIcon width="2.4rem" />} onClick={handleNext} />
                    </div>
                )}
            </div>
        </>
    );
};

CategorySlider.propTypes = {
    data: PropTypes.array.isRequired,
};

export default CategorySlider;
