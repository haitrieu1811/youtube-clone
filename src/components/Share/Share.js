import classNames from 'classnames/bind';
import { useState } from 'react';

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
    const [position, setPosition] = useState(0);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

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
        {
            icon: <TwitterIcon width="6rem" height="6rem" />,
            label: 'Twitter',
        },
    ];

    const handleSocialsNext = () => {
        const newPosition = position - 200;
        setPosition(newPosition);
        if (newPosition < 0) setShowPrev(true);
        if (newPosition <= -400) setShowNext(false);
    };

    const handleSocialsPrev = () => {
        const newPosition = position + 200;
        setPosition(newPosition);
        if (newPosition >= 0) setShowPrev(false);
        else if (newPosition > -400) setShowNext(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('socials-wp')}>
                {showPrev && (
                    <button type="button" className={cx('btn', 'prev')} onClick={handleSocialsPrev}>
                        <PrevIcon width="2.6rem" height="2.6rem" />
                    </button>
                )}

                {SOCIALS && SOCIALS.length > 0 && (
                    <div className={cx('socials-container')}>
                        <div className={cx('socials')} style={{ transform: `translateX(${position}px)` }}>
                            {SOCIALS.map((social, index) => (
                                <div key={index} className={cx('social')}>
                                    <div className={cx('icon')}>{social.icon}</div>
                                    <div className={cx('label')}>{social.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {showNext && (
                    <button type="button" className={cx('btn', 'next')} onClick={handleSocialsNext}>
                        <NextIcon width="2.6rem" height="2.6rem" />
                    </button>
                )}
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
