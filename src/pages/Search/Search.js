import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './Search.module.scss';
import HorizontalVideo from '~/components/HorizontalVideo';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);

const Search = () => {
    const [videos, setVideos] = useState([]);
    const { q } = useParams();

    useEffect(() => {
        (async () => {
            const res = await videoService.list(q, 24);
            setVideos(res);
        })();
    }, [q]);

    return (
        <>
            <div className={cx('wrapper')}>
                {videos.map((video) => (
                    <HorizontalVideo data={video} />
                ))}
            </div>
        </>
    );
};

export default Search;
