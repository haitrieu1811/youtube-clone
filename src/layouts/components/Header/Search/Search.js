import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CancelIcon, MicIcon, SearchIcon } from '~/components/Icons/Icons';
import Modal from '~/components/Modal';
import VoiceSearch from '../VoiceSearch';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
    const [query, setQuery] = useState('');
    const [clear, setClear] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const searchBox = useRef();
    const navigate = useNavigate();

    // Change Value of query
    const handleChangeKeyword = (e) => {
        const newKeyword = e.target.value;
        setQuery(newKeyword);

        // Hide/Show clear button
        if (newKeyword.length > 0) setClear(true);
        else setClear(false);
    };

    // Clear input
    const handleClearKeyword = () => {
        if (query.trim().length > 0) {
            setQuery('');
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

    // Handle search submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (query.trim().length > 0) {
            window.scrollTo({ top: 0 });
            return navigate(`/results/${query}`);
        }
    };

    return (
        <div className={cx('container')}>
            <form className={cx('form')} onSubmit={handleSubmit}>
                <span className={cx('icon')}>
                    <SearchIcon width="2rem" />
                </span>

                <input
                    ref={searchBox}
                    className={cx('input')}
                    placeholder="Search"
                    value={query}
                    onChange={(e) => handleChangeKeyword(e)}
                />

                {clear && (
                    <span className={cx('clear')} onClick={handleClearKeyword}>
                        <CancelIcon width="2.4rem" />
                    </span>
                )}

                <button type="submit" className={cx('btn')}>
                    <SearchIcon width="2.3rem" />
                </button>
            </form>

            <button className={cx('mic-btn')} onClick={handleShowModal}>
                <MicIcon width="2.3rem" />
            </button>

            <Modal content={<VoiceSearch />} top medium show={showModal} handleClose={handleCloseModal} />
        </div>
    );
};

export default Search;
