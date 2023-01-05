import classNames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './SidebarToggle.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Logo from '../components/Logo';

const cx = classNames.bind(styles);

const SidebarToggle = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleShowSidebar = () => {
        setShow((prevState) => !prevState);
    };

    return (
        <div className={cx('container')}>
            <Header handleShowSidebar={handleShowSidebar} />

            <div className={cx('sidebar-container', { active: show })}>
                <div className={cx('mask')} onClick={handleShowSidebar}></div>
                <div className={cx('sidebar')}>
                    <Logo handleShowSidebar={handleShowSidebar} />
                    <Sidebar />
                </div>
            </div>

            <div className={cx('content')}>{children}</div>
        </div>
    );
};

SidebarToggle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SidebarToggle;
