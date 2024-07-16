 const convertNumbers = (number) => {
    if (!number) return '';

    if (number < 1000) {
        return number;
    } else if (number >= 1000 && number < 1000000) {
        return (Math.floor(number / 100) / 10) + "K";
    } else if (number >= 1000000 && number < 1000000000) {
        return (Math.floor(number / 100000) / 10) + "M";
    } else {
        return (Math.floor(number / 100000000) / 10) + "B";
    }
}

export default convertNumbers