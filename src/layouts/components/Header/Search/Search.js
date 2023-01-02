import classNames from 'classnames/bind';
import { useState, useRef } from 'react';

import { CancelIcon, MicIcon, SearchIcon } from '~/components/Icons/Icons';
import Modal from '~/components/Modal';
import styles from './Search.module.scss';
import VoiceSearch from '../VoiceSearch';

const cx = classNames.bind(styles);

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const [clear, setClear] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const searchBox = useRef();

    // Change Value of keyword
    const handleChangeKeyword = (e) => {
        const newKeyword = e.target.value;
        setKeyword(newKeyword);

        // Hide/Show clear button
        if (newKeyword.length > 0) setClear(true);
        else setClear(false);
    };

    // Clear input
    const handleClearKeyword = () => {
        if (keyword.length > 0) {
            setKeyword('');
            setClear(false);

            searchBox.current.focus();
        }
    };

    // Handle show modal
    const handleShowModal = () => {
        setShowModal(true);
    };

    // Handle close modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className={cx('container')}>
                <div className={cx('form')}>
                    <span className={cx('icon')}>
                        <SearchIcon width="2rem" />
                    </span>

                    <input
                        ref={searchBox}
                        className={cx('input')}
                        placeholder="Search"
                        value={keyword}
                        onChange={(e) => handleChangeKeyword(e)}
                    />

                    {clear && (
                        <span className={cx('clear')} onClick={handleClearKeyword}>
                            <CancelIcon width="2.4rem" />
                        </span>
                    )}

                    <button type="button" className={cx('btn')}>
                        <SearchIcon width="2.3rem" />
                    </button>
                </div>

                <button className={cx('mic-btn')} onClick={handleShowModal}>
                    <MicIcon width="2.3rem" />
                </button>

                <Modal content={<VoiceSearch />} top medium show={showModal} handleClose={handleCloseModal} />
            </div>
        </>
    );
};

export default Search;
