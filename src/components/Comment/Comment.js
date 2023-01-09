import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Comment.module.scss';
import { EmojiIcon, SortIcon } from '../Icons/Icons';
import Wrapper from '../Popper/Wrapper';
import Button from '../Button';
import { Link } from 'react-router-dom';
import CommentItem from '../CommentItem';
import * as commentService from '~/services/commentService';

const cx = classNames.bind(styles);

const Comment = ({ videoId }) => {
    const [cmtValue, setCmtValue] = useState('');
    const [cmtFocus, setCmtFocus] = useState(false);
    const [isPrimary, setIsPrimary] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [comments, setComments] = useState([]);
    const [commentQuantity, setCommentQuantity] = useState(10);

    const observer = useRef();
    const lastBookElementRef = useCallback((node) => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setCommentQuantity((prevState) => prevState + 20);
            }
        });

        if (node) observer.current.observe(node);

        console.log(node);
    }, []);

    const handleRenderSort = () => {
        return (
            <Wrapper>
                <div className={cx('sort-item')}>Top comments</div>
                <div className={cx('sort-item')}>Newest first</div>
            </Wrapper>
        );
    };

    const handleChangeButtonStatus = (e) => {
        const value = e.target.value;

        if (value.length > 0) {
            setIsPrimary(true);
            setIsDisabled(false);
        } else {
            setIsPrimary(false);
            setIsDisabled(true);
        }
    };

    const handleCancelComment = () => {
        setCmtFocus(false);
        setIsPrimary(false);
        setIsDisabled(true);
        setCmtValue('');
    };

    // Load comments
    useEffect(() => {
        (async () => {
            const res = await commentService.list(videoId, commentQuantity);
            setComments(res);
        })();
    }, [videoId, commentQuantity]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <div className={cx('quantity')}>28 Comments</div>
                <Tippy interactive trigger="click" render={handleRenderSort} placement="bottom-start">
                    <div className={cx('sort')}>
                        <SortIcon width="2.4rem" height="2.4rem" />
                        <span>Sort by</span>
                    </div>
                </Tippy>
            </div>
            <div className={cx('form')}>
                <img
                    className={cx('user')}
                    src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                    alt=""
                />
                <div className={cx('input-wp')}>
                    <input
                        placeholder="Add a comment..."
                        className={cx('input')}
                        onFocus={() => setCmtFocus(true)}
                        onInput={(e) => handleChangeButtonStatus(e)}
                        onChange={(e) => setCmtValue(e.target.value)}
                        value={cmtValue}
                    />
                    {cmtFocus && (
                        <div className={cx('actions')}>
                            <div className={cx('action-emoji')}>
                                <span className={cx('emoji-icon')}>
                                    <EmojiIcon width="2.4rem" height="2.4rem" />
                                </span>
                                <p>
                                    By completing this action you are creating a <Link to="/">channel</Link> and agree
                                    to
                                    <Link>YouTube's Terms of Service​.</Link>
                                </p>
                            </div>
                            <div className={cx('action-buttons')}>
                                <Button name="Cancel" pill transparent onClick={handleCancelComment} />
                                <Button name="Comment" pill disabled={isDisabled} primary={isPrimary} />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {comments && comments.length > 0 && (
                <div className={cx('list')}>
                    {comments.map((comment, index) => {
                        if (comments.length === index + 1) {
                            return (
                                <div ref={lastBookElementRef} key={index}>
                                    <CommentItem data={comment} />
                                </div>
                            );
                        } else {
                            return <CommentItem key={index} data={comment} />;
                        }
                    })}
                </div>
            )}
        </div>
    );
};

Comment.propTypes = {
    videoId: PropTypes.string.isRequired,
};

export default Comment;
