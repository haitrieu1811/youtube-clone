import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Menu = ({ heading, data, separate = false }) => {
    return (
        <>
            <div className={cx('wrapper')}>
                {heading && <h3 className={cx('heading')}>{heading}</h3>}

                {data && data.length > 0 && (
                    <div className={cx('list', { separate: separate })}>
                        {data.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={(nav) => cx('item', { active: nav.isActive })}
                            >
                                <span className={cx('icon', 'empty')}>{item.icon}</span>
                                {item.iconFill && <span className={cx('icon', 'fill')}>{item.iconFill}</span>}
                                <span className={cx('label')}>{item.label}</span>
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

Menu.propTypes = {
    heading: PropTypes.string,
    data: PropTypes.array.isRequired,
    separate: PropTypes.bool,
};

export default Menu;
