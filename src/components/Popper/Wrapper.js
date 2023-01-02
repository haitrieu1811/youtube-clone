import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const Wrapper = ({ children, classNames }) => {
    return (
        <>
            <div className={cx('container', classNames)}>{children}</div>
        </>
    );
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
};

export default Wrapper;
