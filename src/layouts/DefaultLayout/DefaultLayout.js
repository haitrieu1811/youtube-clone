import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
    return (
        <>
            <div className={cx('container')}>
                <Header />

                <div className={cx('content')}>
                    <Sidebar />

                    <div className={cx('main')}>{children}</div>
                </div>
            </div>
        </>
    );
};

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
