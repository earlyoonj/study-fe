export const getItem = (key, defaultValue) => {
    try {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : [];
    } catch {
        return defaultValue;
    }
}

export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        alert('데이터 저장에 실패했습니다.\n- 가능한 문제: 데이터가 너무 많습니다.)');
    }
};

export default {
    getItem,
    setItem
}

// const storage = ((localStorage) => {
//     // NOTE: App.js로 관리하므로 localStorage 붙이기 용이하나
//     // NOTE: localStorage getItem, JSON parse 방어 처리 필수이므로 파일 분리 (utility를 뽑아서 문제가 생길 때에 대한 대응)
//     const getItem = (key, defaultValue) => {
//         try {
//             const storedValue = localStorage.getItem(key);
//             return storedValue ? JSON.parse(storedValue) : [];
//         } catch {
//             return defaultValue;
//         }
//     }

//     const setItem = (key, value) => {
//         try {
//             localStorage.setItem(key, JSON.stringify(value));
//         } catch {
//             alert('데이터 저장에 실패했습니다.\n- 가능한 문제: 데이터가 너무 많습니다.)');
//         }
//     };

//     return {
//         getItem,
//         setItem
//     }
// })(window.localStorage);