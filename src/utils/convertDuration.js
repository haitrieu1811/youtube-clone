import moment from 'moment';

const padWithLeadingZeros = (num, totalLength) => {
    return String(num).padStart(totalLength, '0');
};

const convertDuration = (yt_duration) => {
    const initMinutes = moment.duration(yt_duration).asMinutes();

    const minutes = Math.floor(initMinutes);
    const seconds = Math.floor((initMinutes % 1) * 60);

    return minutes + ':' + padWithLeadingZeros(seconds, 2);
};

export default convertDuration;
