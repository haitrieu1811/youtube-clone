import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import CircleButton from '~/components/CircleButton';
import {
    EarthIcon,
    FeedbackIcon,
    KeyboardIcon,
    LanguageIcon,
    MoonIcon,
    OptionIcon,
    QuestionIcon,
    SettingIcon,
    ShieldIcon,
    YourDataIcon,
} from '~/components/Icons/Icons';
import Menu from '~/components/Menu';
import Wrapper from '~/components/Popper/Wrapper';
import SignInButton from '~/components/SignInButton';
import Logo from '../Logo';
import styles from './Header.module.scss';
import Search from './Search';

const cx = classNames.bind(styles);

const Header = ({ handleShowSidebar }) => {
    // Data of menu
    const MENU_DATA = [
        {
            icon: <YourDataIcon width="2.5rem" />,
            label: 'Your data in Youtube',
            separate: true,
            chevron: false,
        },
        {
            icon: <MoonIcon width="2.5rem" />,
            label: 'Appearance: Light',
            separate: false,
            chevron: true,
        },
        {
            icon: <LanguageIcon width="2.5rem" />,
            label: 'Language: British English',
            separate: false,
            chevron: true,
        },
        {
            icon: <ShieldIcon width="2.5rem" />,
            label: 'Restricted Mode: Off',
            separate: false,
            chevron: true,
        },
        {
            icon: <EarthIcon width="2.5rem" />,
            label: 'Location: Vietnam',
            separate: false,
            chevron: true,
        },
        {
            icon: <KeyboardIcon width="2.5rem" />,
            label: 'Keyboard shortcuts',
            separate: true,
            chevron: false,
        },
        {
            icon: <SettingIcon width="2.5rem" />,
            label: 'Settings',
            separate: true,
            chevron: false,
        },
        {
            icon: <QuestionIcon width="2.5rem" />,
            label: 'Help',
            separate: false,
            chevron: false,
        },
        {
            icon: <FeedbackIcon width="2.5rem" />,
            label: 'Send feedback',
            separate: false,
            chevron: false,
        },
    ];

    // Render menu
    const handleRender = () => {
        return (
            <Wrapper>
                <Menu data={MENU_DATA} />
            </Wrapper>
        );
    };

    return (
        <>
            <header className={cx('container')}>
                <nav className={cx('navbar')}>
                    <Logo handleShowSidebar={handleShowSidebar} />
                    <Search />

                    <div className={cx('actions')}>
                        <Tippy
                            placement="bottom-end"
                            delay={[0, 700]}
                            interactive
                            offset={[0, 2]}
                            render={handleRender}
                            trigger="click"
                        >
                            <span className={cx('action-dots')}>
                                <CircleButton icon={<OptionIcon width="2.3rem" />} />
                            </span>
                        </Tippy>

                        <SignInButton />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
