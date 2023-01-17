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

    console.log(position);
    console.log(showPrev);

    const handleNext = () => {
        setPosition((prevState) => prevState - 100);
        handleCheck();
    };

    const handlePrev = () => {
        setPosition((prevState) => prevState + 100);
        handleCheck();
    };

    const handleCheck = () => {
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
