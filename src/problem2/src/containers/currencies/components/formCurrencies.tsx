import React from 'react'
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import iconMap from '../../../data/iconMap';
type Props = {
    currencies: any,
    fromCurrency: number,
    toCurrency: number,
    amount: number,
    errorFromCurrency: string,
    errorToCurrency: string,
    errorAmount: string,
    handleCurrencyChange: (event: React.ChangeEvent<HTMLSelectElement>, type: string) => void,
    handleAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleSwap: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export default function FormCurrencies(props: Props) {
    const {
        currencies,
        fromCurrency,
        toCurrency,
        amount,
        handleCurrencyChange,
        handleAmountChange,
        handleSwap,
        errorFromCurrency,
        errorToCurrency,
        errorAmount,
    } = props || {};

    return (
        <FormCurrencie>
            <CustomTitle>Swap Currencies</CustomTitle>
            <FromToCurrencies>
                <CurrencieslabelSelect>From Currency:</CurrencieslabelSelect>
                <SelectCurrencies
                    value={fromCurrency}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleCurrencyChange(e, 'from')}
                    autoFocus={true}
                >
                    <option value="">Select a currency</option>
                    {currencies.map((currency: any) => {
                        return <option key={uuidv4()} value={currency?.price}>
                            {iconMap[currency?.currency]} {currency?.currency} {currency?.price}
                        </option>
                    })}
                </SelectCurrencies>
                <Error>{errorFromCurrency}</Error>
            </FromToCurrencies>
            <FromToCurrencies>
                <CurrencieslabelSelect>To Currency:</CurrencieslabelSelect>
                <SelectCurrencies value={toCurrency} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleCurrencyChange(e, 'to')}>
                    <option value="">Select a currency</option>
                    {currencies.map((currency: any) => (
                        <option key={uuidv4()} value={currency?.price}>
                            {iconMap[currency?.currency]} {currency?.currency} {currency?.price}
                        </option>
                    ))}
                </SelectCurrencies>
                <Error>{errorToCurrency}</Error>
            </FromToCurrencies>
            <AmountCurrencies>
                <Currencieslabel>Amount:</Currencieslabel>
                <InputCurrencies type="number" value={amount.toString()} onChange={handleAmountChange} />
                <ErrorAmount>{errorAmount}</ErrorAmount>
            </AmountCurrencies>
            <ButtonSwap onClick={handleSwap} type="submit">Swap Currencies</ButtonSwap>
        </FormCurrencie>
    )
}

const FormCurrencie = styled('form')((props) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 20,
        width: 400,
        border: '1px solid grey',
        borderRadius: 5,
        // marginLeft: 50,
    }
});

const CustomTitle = styled('span')((props) => {
    return {
        background: "#d90e30",
        textAlign: 'center',
        color: 'white',
        marginTop: 0,
        paddingBottom: 10,
        paddingTop: 10,

    }
});
const FromToCurrencies = styled('div')((props) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        marginLeft: 20,

    }
});
const AmountCurrencies = styled('div')((props) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
    }
});
const SelectCurrencies = styled('select')((props) => {
    return {
        width: 360,
        height: 30,
        borderRadius: 5,
        cursor: 'pointer',
    }
});
const InputCurrencies = styled('input')((props) => {
    return {
        width: 350,
        height: 26,
        borderRadius: 5,
        cursor: 'pointer',
        marginLeft: 20
    }
});
const Currencieslabel = styled('label')((props) => {
    return {
        marginLeft: 20,
        marginBottom: 10
    }
});
const CurrencieslabelSelect = styled('label')(() => {
    return {
        textAlign: 'start',
        marginBottom: 10
    }
});
const ButtonSwap = styled('button')((props) => {
    return {
        background: "#d90e30",
        color: 'white',
        width: 250,
        height: 50,
        borderRadius: 5,
        cursor: 'pointer',
        marginLeft: 70,
        marginBottom: 50
    }
});
const Error = styled('span')((props) => {
    return {
        color: 'red',
        marginLeft: 3,
        marginTop: 8
    }
});
const ErrorAmount = styled('span')((props) => {
    return {
        color: 'red',
        marginLeft: 20,
        marginTop: 8
    }
})