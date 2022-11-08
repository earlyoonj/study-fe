export const getItem = (key, defaultValue) => {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch {
        alert('데이터 로드 실패');
    }
}

export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch {
        alert('데이터 저장 실패(데이터가 너무 많을 수 있음)');
    }
}

export default {
    getItem,
    setItem
}