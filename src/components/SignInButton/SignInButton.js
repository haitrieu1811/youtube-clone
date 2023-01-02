import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { UserIcon } from '../Icons/Icons';
import styles from './SignInButton.module.scss';

const cx = classNames.bind(styles);

const SignInButton = () => {
    return (
        <>
            <Link to="/" className={cx('wrapper')}>
                <UserIcon width="2.4rem" /> <span>Sign in</span>
            </Link>
        </>
    );
};

export default SignInButton;
