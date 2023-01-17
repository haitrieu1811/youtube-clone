const numberWithSeparate = (number, separate = ',') => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separate);
};

export default numberWithSeparate;
