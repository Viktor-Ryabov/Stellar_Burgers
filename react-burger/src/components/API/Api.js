const API_URL = "https://norma.nomoreparties.space/api/ingredients";

const isResult = (res) => {
    // console.log(res);
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(
            `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
        );
    }
};

export const getApiResponse = () => {
    return fetch(API_URL).then((res) => isResult(res));
};

export const getOrderResponse = (data) => {
    return fetch("https://norma.nomoreparties.space/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
    });
};
