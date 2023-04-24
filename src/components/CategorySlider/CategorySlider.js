import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './CategorySlider.module.scss';
import { NextIcon, PrevIcon } from '../Icons/Icons';
import CircleButton from '../CircleButton';
import { useState } from 'react';

const cx = classNames.bind(styles);

const CategorySlider = ({ data, onChangeCategory = () => {} }) => {
    const [position, setPosition] = useState(0);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    const handleNext = () => {
        const newPosition = position - 100;
        setPosition(newPosition);
        if (newPosition < 0) setShowPrev(true);
        if (newPosition <= -400) setShowNext(false);
    };

    const handlePrev = () => {
        const newPosition = position + 100;
        setPosition(newPosition);
        if (newPosition >= 0) setShowPrev(false);
        if (newPosition > -400) setShowNext(true);
    };

    return (
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
                            <div
                                key={index}
                                className={cx('item', { active: item.active })}
                                onClick={(e) => onChangeCategory(e.target.dataset.value)}
                                data-value={item.value}
                            >
                                {item.label}
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
    );
};

CategorySlider.propTypes = {
    data: PropTypes.array.isRequired,
    onChangeCategory: PropTypes.func,
};

export default CategorySlider;
