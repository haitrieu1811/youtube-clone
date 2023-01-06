import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({ name, pill, primary, exSmall, small, large, exLarge, disabled, transparent, onClick }) => {
    const classes = cx('wrapper', {
        pill,
        primary,
        exSmall,
        small,
        large,
        exLarge,
        disabled,
        transparent,
    });
    return (
        <button type="button" className={classes} onClick={onClick}>
            {name}
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    pill: PropTypes.bool,
    exSmall: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    exLarge: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Button;
