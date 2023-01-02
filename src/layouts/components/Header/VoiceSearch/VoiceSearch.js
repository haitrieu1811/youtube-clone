import classNames from 'classnames/bind';

import styles from './VoiceSearch.module.scss';
import { MicIcon } from '~/components/Icons/Icons';

const cx = classNames.bind(styles);

const VoiceSearch = () => {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('status')}>Listening...</div>
                <div className={cx('mic')}>
                    <span className={cx('mic-btn')}>
                        <MicIcon width="4rem" height="4rem" className={cx('mic-icon')} />
                    </span>
                </div>
            </div>
        </>
    );
};

export default VoiceSearch;
