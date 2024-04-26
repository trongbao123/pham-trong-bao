import { currencies_url } from "../../api/currencies";
import { request } from "../baseService";
import { method } from "../method";

type options = {
    id?: string,
    params?: any,
    data?: any,
}
export const currenciesApi = async (options: options) => {
    const {
        data,
        params,
        id
    } = options || {};

    return await request({
        method: method.GET,
        url: currencies_url,
        data,
        params
    })
}