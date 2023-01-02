import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ChevronRightIcon } from '~/components/Icons/Icons';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const Menu = ({ data }) => {
    return (
        <>
            {data && data.length > 0 && (
                <div className={cx('wrapper')}>
                    {data.map((item, index) => (
                        <Link key={index} className={cx('item', { separate: item.separate })}>
                            <span className={cx('icon')}>{item.icon}</span>
                            <span className={cx('label')}>{item.label}</span>
                            {item.chevron && (
                                <span className={cx('chevron')}>
                                    <ChevronRightIcon width="2.4rem" />
                                </span>
                            )}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

Menu.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Menu;
