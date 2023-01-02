import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import Menu from './Menu';
import {
    FeedbackIcon,
    GamingFillIcon,
    GamingIcon,
    HistoryFillIcon,
    HistoryIcon,
    HomeFillIcon,
    HomeIcon,
    LibraryFillIcon,
    LibraryIcon,
    MoreIcon,
    MusicFillIcon,
    MusicIcon,
    NewsFillIcon,
    NewsIcon,
    QuestionIcon,
    ReportFillIcon,
    ReportIcon,
    SettingIcon,
    ShortFillIcon,
    ShortIcon,
    SportFillIcon,
    SportIcon,
    SubscriptionFillIcon,
    SubscriptionIcon,
    TrendingFillIcon,
    TrendingIcon,
    YoutubeKidIcon,
    YoutubeMusicIcon,
    YoutubeTvIcon,
} from '~/components/Icons/Icons';
import SignInButton from '~/components/SignInButton';

const cx = classNames.bind(styles);

const Sidebar = () => {
    // Data of menu
    const MENU_DATA_ONE = [
        {
            path: '/',
            icon: <HomeIcon width="2.4rem" />,
            iconFill: <HomeFillIcon width="2.4rem" />,
            label: 'Home',
        },
        {
            path: '/shorts',
            icon: <ShortIcon width="2.4rem" />,
            iconFill: <ShortFillIcon width="2.4rem" />,
            label: 'Shorts',
        },
        {
            path: '/subscriptions',
            icon: <SubscriptionIcon width="2.4rem" />,
            iconFill: <SubscriptionFillIcon width="2.4rem" />,
            label: 'Subscriptions',
        },
    ];

    const MENU_DATA_TWO = [
        {
            path: '/library',
            icon: <LibraryIcon width="2.4rem" />,
            iconFill: <LibraryFillIcon width="2.4rem" />,
            label: 'Library',
        },
        {
            path: '/history',
            icon: <HistoryIcon width="2.4rem" />,
            iconFill: <HistoryFillIcon width="2.4rem" />,
            label: 'History',
        },
    ];

    const MENU_DATA_THREE = [
        {
            path: '/trending',
            icon: <TrendingIcon width="2.4rem" />,
            iconFill: <TrendingFillIcon width="2.4rem" />,
            label: 'Trending',
        },
        {
            path: '/music',
            icon: <MusicIcon width="2.4rem" />,
            iconFill: <MusicFillIcon width="2.4rem" />,
            label: 'Music',
        },
        {
            path: '/gaming',
            icon: <GamingIcon width="2.4rem" />,
            iconFill: <GamingFillIcon width="2.4rem" />,
            label: 'Gaming',
        },
        {
            path: '/news',
            icon: <NewsIcon width="2.4rem" />,
            iconFill: <NewsFillIcon width="2.4rem" />,
            label: 'News',
        },
        {
            path: '/sport',
            icon: <SportIcon width="2.4rem" />,
            iconFill: <SportFillIcon width="2.4rem" />,
            label: 'Sport',
        },
    ];

    const MENU_DATA_FOUR = [
        {
            path: '/browse-channels',
            icon: <MoreIcon width="2.4rem" />,
            label: 'Browse Channels',
        },
    ];

    const MENU_DATA_FIVE = [
        {
            path: '/youtube-music',
            icon: <YoutubeMusicIcon width="2.4rem" />,
            label: 'Youtube Music',
        },
        {
            path: '/youtube-kid',
            icon: <YoutubeKidIcon width="2.4rem" />,
            label: 'Youtube Kid',
        },
        {
            path: '/youtube-tv',
            icon: <YoutubeTvIcon width="2.4rem" />,
            label: 'Youtube TV',
        },
    ];

    const MENU_DATA_SIX = [
        {
            path: '/settings',
            icon: <SettingIcon width="2.4rem" />,
            label: 'Settings',
        },
        {
            path: '/report-history',
            icon: <ReportIcon width="2.4rem" />,
            iconFill: <ReportFillIcon width="2.4rem" />,
            label: 'Report history',
        },
        {
            path: '/help',
            icon: <QuestionIcon width="2.4rem" />,
            label: 'Help',
        },
        {
            path: '/send-feedback',
            icon: <FeedbackIcon width="2.4rem" />,
            label: 'Send feedback',
        },
    ];

    return (
        <>
            <aside className={cx('container')}>
                <Menu data={MENU_DATA_ONE} separate />
                <Menu data={MENU_DATA_TWO} separate />

                <div className={cx('sign-in-wrapper')}>
                    <div className={cx('sign-in')}>
                        <p>Sign in to like videos, comment and subscribe.</p>
                        <SignInButton />
                    </div>
                </div>

                <Menu heading="Explore" data={MENU_DATA_THREE} separate />
                <Menu data={MENU_DATA_FOUR} separate />
                <Menu heading="More from YouTube" data={MENU_DATA_FIVE} separate />
                <Menu data={MENU_DATA_SIX} separate />

                <div className={cx('guide-wrapper')}>
                    <div className={cx('guides')}>
                        <div className={cx('guide')}>
                            <Link to="/about">About</Link>
                            <Link to="/press">Press</Link>
                            <Link to="/copy-right">Copyright</Link>
                            <Link to="/contact-us">Contact us</Link>
                            <Link to="/creator">Creator</Link>
                            <Link to="/advertise">Advertise</Link>
                            <Link to="/developers">Developers</Link>
                        </div>

                        <div className={cx('guide')}>
                            <Link to="/terms">Terms</Link>
                            <Link to="/privacy">Privacy</Link>
                            <Link to="/policy-safety">Policy &amp; Safety</Link>
                            <Link to="/how-youtube-works">How Youtube works</Link>
                            <Link to="/test-new-features">Test new features</Link>
                        </div>

                        <div className={cx('copy-right')}>&copy; 2022 Google LLC</div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
