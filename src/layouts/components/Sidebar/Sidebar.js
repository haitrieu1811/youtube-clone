import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <>
            <aside className={cx('container')}>
                <h1>Sidebar</h1>
            </aside>
        </>
    );
};

export default Sidebar;
