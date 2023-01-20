import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useRef } from 'react';

import { CancelIcon } from '../Icons/Icons';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = ({
    title = false,
    content = false,

    // Action
    show = false,

    // Size
    width = 492,

    // Position
    top = false,
    bottom = false,
    center = false,

    // Handle
    handleClose,
}) => {
    // Element
    const container = useRef();
    const main = useRef();

    const classes = cx('container', {
        // Action
        show,

        // Position
        top,
        bottom,
        center,
    });

    const handleCloseModal = () => {
        handleClose();
    };

    return (
        <>
            <div ref={container} className={classes}>
                <div className={cx('mask')} onClick={handleCloseModal}></div>

                <div ref={main} className={cx('main')} style={{ width: width }}>
                    <div className={cx('head')}>
                        {title ? <h2 className={cx('title')}>{title}</h2> : <div></div>}
                        <span className={cx('close')} onClick={handleCloseModal}>
                            <CancelIcon width="2.5rem" />
                        </span>
                    </div>

                    {content && <div className={cx('content')}>{content}</div>}

                    <div className={cx('foot')}></div>
                </div>
            </div>
        </>
    );
};

Modal.propTypes = {
    extraSmall: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    extraLarge: PropTypes.bool,
};

export default Modal;
