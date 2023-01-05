import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';
import { BarIcon, YoutubeIcon } from '~/components/Icons/Icons';

const cx = classNames.bind(styles);

const Logo = ({ handleShowSidebar }) => {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('bar-btn')} onClick={handleShowSidebar}>
                <BarIcon width="2.4rem" height="2.4rem" />
            </span>

            <Link to="/" className={cx('logo')}>
                <YoutubeIcon width="9.2rem" />
            </Link>
        </div>
    );
};

export default Logo;
