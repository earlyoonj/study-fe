let timer = null;

const debounce = (fn, wait) => {
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
}

export default debounce;