import { useCallback, useEffect, useState } from "react";
import { currenciesApi } from '../../../services/currencies/index';
import Notification from "../../../components/common/notification";

type options = Record<string, unknown>
export default (options: options) => {

    const {
        ...rest
    } = options || {};

    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState<number>(0);
    const [toCurrency, setToCurrency] = useState<number>(0);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [errorToCurrency, setErrorToCurrency] = useState("");
    const [errorFromCurrency, setErrorFromCurrency] = useState("");
    const [errorAmount, setErrorAmount] = useState("");
    const [newCurrencies, setNewCurrencies] = useState([]);


    const fetchDataCurrencies = useCallback(async () => {
        try {
            const response: any = await currenciesApi({});

            if (response) {
                setCurrencies(response);
            } else {
                throw response
            }

        } catch (error: any) {
            Notification({
                message: error,
                type: 'error'
            })
        }
    }, []);


    useEffect(() => {
        fetchDataCurrencies();
        if (fromCurrency && toCurrency) {
            const rate = toCurrency / fromCurrency;
            setExchangeRate(rate);
        }
        return () => {
            setExchangeRate(0);
        }
    }, [fromCurrency, toCurrency]);


    const handleCurrencyChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>, type: string) => {
        const currency = event.target.value;

        if (type === 'from') {
            setFromCurrency(parseFloat(currency));
            setErrorFromCurrency("");
        } else {
            setToCurrency(parseFloat(currency));
            setErrorToCurrency("");
        }

    }, []);

    const handleAmountChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        setAmount(value);
        setErrorAmount("");
    }, []);

    const inValid = useCallback(() => {
        let isValid = true;

        if (!fromCurrency) {
            setErrorFromCurrency("Please select a currency");
            isValid = false;
        } else {
            setErrorFromCurrency("");
        }

        if (!toCurrency) {
            setErrorToCurrency("Please select a currency");
            isValid = false;
        } else {
            setErrorToCurrency("");
        }

        if (amount <= 0 || !amount) {
            setErrorAmount("Please enter an amount");
            isValid = false;
        } else {
            setErrorAmount("");
        }

        return isValid;
    }, [fromCurrency, toCurrency, amount]);

    const handleSwap = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const isValid = inValid();
            if (isValid) {
                const converted = amount * exchangeRate;
                setConvertedAmount(converted);
                Notification({
                    message: "Swap successfully",
                    type: 'success',
                    placement: 'topRight',
                    style: {
                        position: 'absolute',
                        zIndex: 9999999999,
                        top: '70px',
                        right: '0px',
                        backgroundColor: 'white',
                        width: '400px',
                        borderRadius: '10px',
                    }
                });

            }
        } catch (error: any) {
            Notification({
                message: error,
                type: 'error'
            });
        }
    }, [fromCurrency, toCurrency, amount, convertedAmount, newCurrencies]);


    useEffect(() => {
        const selectedCurrency = currencies.filter((item: any, index: number) => {
            return item?.price === fromCurrency || item?.price === toCurrency
        });
        setNewCurrencies(selectedCurrency);
        return () => {
            setNewCurrencies([]);
        }
    }, [fromCurrency, toCurrency]);

    return {
        currencies,
        fromCurrency,
        toCurrency,
        exchangeRate,
        amount,
        convertedAmount,
        handleCurrencyChange,
        handleAmountChange,
        handleSwap,
        errorToCurrency,
        errorFromCurrency,
        errorAmount,
        newCurrencies
    }

}