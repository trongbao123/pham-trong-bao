import React from 'react'
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import iconMap from '../../../data/iconMap';
import ResultFormCurrencies from './resultFormCurrencies';
type props = {
    amount: number,
    fromCurrency: number,
    toCurrency: number,
    price: number,
    newCurrencies: any
}
export default function ResultCurrencies(props: props) {
    const {
        amount,
        fromCurrency,
        toCurrency,
        price,
        newCurrencies
    } = props || {};

    return (
        <>
            <FormCurrencie>
                <CustomTitle>Currency Conversion Results</CustomTitle>
                <SelectCurrencies>
                    <Currencieslabel>
                        <InputCurrencies>
                            <AmountCurrencies>logo</AmountCurrencies>
                            <AmountCurrencies>Currency</AmountCurrencies>
                            <AmountCurrencies>Amount</AmountCurrencies>
                            <AmountCurrencies>Price</AmountCurrencies>
                        </InputCurrencies>
                    </Currencieslabel>
                    <CurrencieslabelSelect>
                        {newCurrencies.length > 0 && newCurrencies?.map((currency: any) => (
                            <InputCurrencies key={uuidv4()}>
                                <FromToCurrencies>
                                    {iconMap[currency?.currency]}
                                </FromToCurrencies>
                                <FromToCurrencies >
                                    {currency?.currency}
                                </FromToCurrencies>
                                <FromToCurrencies>{amount ? amount : 0}</FromToCurrencies>
                                <FromToCurrencies>{currency?.price}</FromToCurrencies>
                            </InputCurrencies>
                        ))}
                    </CurrencieslabelSelect>
                </SelectCurrencies>
                <ResultFormCurrencies
                    newCurrencies={newCurrencies}
                    fromCurrency={fromCurrency}
                    toCurrency={toCurrency}
                    price={price}
                />
            </FormCurrencie >


        </>
    )
};

const FormCurrencie = styled('form')((props) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        width: 800,
        border: '1px solid grey',
        borderRadius: 5,
    }
});

const CustomTitle = styled('span')((props) => {
    return {
        background: "#d90e30",
        textAlign: 'center',
        color: 'white',
        marginTop: 0,
        paddingBottom: 10,
        paddingTop: 10
    }
});

const FromToCurrencies = styled('td')((props) => {
    return {
        color: 'white',
        textAlign: 'center',
        border: '1px solid grey',
        padding: 10
    }
});

const AmountCurrencies = styled('th')((props) => {
    return {
        color: 'white',
        border: '1px solid grey',
        padding: 10
    }
});

const SelectCurrencies = styled('table')((props) => {
    return {
        borderCollapse: 'collapse',
        width: '98%',
        marginLeft: 8,
        marginRight: 10
    }
});

const InputCurrencies = styled('tr')((props) => {
    return {
        border: '1px solid grey',
        padding: 10
    }
});

const Currencieslabel = styled('thead')((props) => {
    return {
        border: '1px solid grey',
        padding: 10
    }
});

const CurrencieslabelSelect = styled('tbody')(() => {
    return {
        border: '1px solid grey',
    }
});
