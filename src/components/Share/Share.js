import classNames from 'classnames/bind';

import {
    EmailIcon,
    EmbedIcon,
    FacebookIcon,
    KakaoTalkIcon,
    NextIcon,
    PrevIcon,
    RedditIcon,
    TwitterIcon,
    WhatsAppIcon,
} from '../Icons/Icons';
import styles from './Share.module.scss';

const cx = classNames.bind(styles);

const Share = () => {
    const SOCIALS = [
        {
            icon: <EmbedIcon width="6rem" height="6rem" />,
            label: 'Embed',
        },
        {
            icon: <WhatsAppIcon width="6rem" height="6rem" />,
            label: 'WhatsApp',
        },
        {
            icon: <FacebookIcon width="6rem" height="6rem" />,
            label: 'Facebook',
        },
        {
            icon: <TwitterIcon width="6rem" height="6rem" />,
            label: 'Twitter',
        },
        {
            icon: <EmailIcon width="6rem" height="6rem" />,
            label: 'Email',
        },
        {
            icon: <KakaoTalkIcon width="6rem" height="6rem" />,
            label: 'KakaoTalk',
        },
        {
            icon: <RedditIcon width="6rem" height="6rem" />,
            label: 'Reddit',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('socials-wp')}>
                <button type="button" className={cx('btn', 'prev')}>
                    <PrevIcon width="2.6rem" height="2.6rem" />
                </button>

                {SOCIALS && SOCIALS.length > 0 && (
                    <div className={cx('socials')}>
                        {SOCIALS.map((social, index) => (
                            <div key={index} className={cx('social')}>
                                <div className={cx('icon')}>{social.icon}</div>
                                <div className={cx('label')}>{social.label}</div>
                            </div>
                        ))}
                    </div>
                )}

                <button type="button" className={cx('btn', 'next')}>
                    <NextIcon width="2.6rem" height="2.6rem" />
                </button>
            </div>

            <div className={cx('path')}>
                <div className={cx('url')}>https://youtu.be/HoXWjiU5g6Q</div>
                <button className={cx('coppy-btn')}>Copy</button>
            </div>

            <div className={cx('start-at')}>
                <input type="checkbox" className={cx('start-at-check')} id="start-at" />
                <label className={cx('start-at-label')} htmlFor="start-at">
                    Start at
                </label>
                <span className={cx('start-at-time')}>0:09</span>
            </div>
        </div>
    );
};

export default Share;
