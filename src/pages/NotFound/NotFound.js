import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

const NotFound = () => {
    return (
        <div className={cx('wrapper')}>
            <h1>Not Found Page</h1>
        </div>
    );
};

export default NotFound;
