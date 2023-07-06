import Cookies from "js-cookie";

export const setCookie = (key, value) => {
    Cookies.set(key, value, { expires: 1 });
}