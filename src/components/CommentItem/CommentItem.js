import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useState } from 'react';

import styles from './CommentItem.module.scss';
import { DislikeIcon, LikeIcon } from '../Icons/Icons';

const cx = classNames.bind(styles);

const CommentItem = ({ data }) => {
    const [isReadMore, setIsReadMore] = useState(false);
    const showReadMore = data.content.length > 240 ? true : false;

    const handleReadMore = () => {
        setIsReadMore((prevState) => !prevState);
    };

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('avatar-wp')}>
                <img src={data.avatar} alt={data.name} className={cx('avatar')} />
            </Link>
            <div className={cx('info')}>
                <div className={cx('head')}>
                    <Link className={cx('name')}>{data.name}</Link>
                    <span className={cx('time')}>{moment(data.publishedAt).format('DD/MM/YYYY')}</span>
                </div>
                <div className={cx('body')}>
                    {isReadMore ? (
                        <div className={cx('content')} dangerouslySetInnerHTML={{ __html: data.content }}></div>
                    ) : (
                        <div
                            className={cx('content')}
                            dangerouslySetInnerHTML={{ __html: data.content.substring(0, 240) }}
                        ></div>
                    )}

                    {showReadMore && (
                        <span className={cx('read-more')} onClick={handleReadMore}>
                            {isReadMore ? 'Show less' : 'Read more'}
                        </span>
                    )}
                </div>
                <div className={cx('foot')}>
                    <div className={cx('like')}>
                        <span className={cx('like-icon')}>
                            <LikeIcon width="2.3rem" height="2.3rem" />
                        </span>
                        <span className={cx('like-value')}>{data.likeCount}</span>
                    </div>
                    <div className={cx('like')}>
                        <span className={cx('like-icon')}>
                            <DislikeIcon width="2.3rem" height="2.3rem" />
                        </span>
                        <span className={cx('like-value')}>0</span>
                    </div>
                    <div className={cx('reply')}>Reply</div>
                </div>
            </div>
        </div>
    );
};

CommentItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default CommentItem;
