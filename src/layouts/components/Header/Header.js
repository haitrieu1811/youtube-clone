import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { BarIcon, YoutubeIcon, SearchIcon, MicIcon, OptionIcon } from '~/components/Icons/Icons';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <>
            <header className={cx('container')}>
                <nav className={cx('navbar')}>
                    <div className={cx('brand')}>
                        <Link to="/" className={cx('bar-icon')}>
                            <BarIcon width="2.4rem" />
                        </Link>

                        <Link to="/" className={cx('brand-icon')}>
                            <YoutubeIcon width="9.2rem" />
                        </Link>

                        <span className={cx('brand-logo')}></span>
                    </div>

                    <div className={cx('search')}>
                        <div className={cx('search-form')}>
                            <input className={cx('search-input')} placeholder="Search" />
                            <Link to="/" className={cx('search-btn')}>
                                <SearchIcon width="2.4rem" />
                            </Link>
                        </div>

                        <button className={cx('mic-btn')}>
                            <MicIcon width="2.5rem" />
                        </button>
                    </div>

                    <div className={cx('actions')}>
                        <OptionIcon width="2.3rem" />

                        <Link to="/" className={cx('sign-in')}>
                            Sign in
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
