const API_URL = "https://norma.nomoreparties.space/api/ingredients";

const requestResult = (res) => {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(
            `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
        );
    }
};

export const getApiResponse = () => {
    return fetch(API_URL)
        .then((res) => requestResult(res));
};
