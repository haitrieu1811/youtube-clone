import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './CircleButton.module.scss';

const cx = classNames.bind(styles);

const CircleButton = ({ icon, large = false, small = false, hide = false }) => {
    const classes = cx('wrapper', {
        large,
        small,
        hide,
    });

    return <span className={classes}>{icon}</span>;
};

CircleButton.propTypes = {
    icon: PropTypes.node.isRequired,
    large: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
};

export default CircleButton;
