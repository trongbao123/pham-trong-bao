import React from 'react';
import useCurrencie from './hooks/useCurrencie';
import styled from 'styled-components';
import FormCurrencies from './components/formCurrencies';
import ResultCurrencies from './components/resultCurrencies';
import ListCurrencies from './components/listCurrencies';
import Analtics from './components/analtics';
import Discribe from './components/discribe';
import GetInTouch from './components/getInTouch';

type props = Record<string, unknown>
function Currencies(props: props) {
    const {
        currencies,
        fromCurrency,
        toCurrency,
        amount,
        convertedAmount,
        handleCurrencyChange,
        handleAmountChange,
        handleSwap,
        errorFromCurrency,
        errorToCurrency,
        errorAmount,
        newCurrencies
    } = useCurrencie({});

    return (
        <Container >
            <Content>
                <FormCurrencies
                    currencies={currencies}
                    fromCurrency={fromCurrency}
                    toCurrency={toCurrency}
                    amount={amount}
                    handleCurrencyChange={handleCurrencyChange}
                    handleAmountChange={handleAmountChange}
                    handleSwap={handleSwap}
                    errorFromCurrency={errorFromCurrency}
                    errorToCurrency={errorToCurrency}
                    errorAmount={errorAmount}
                />

                <ResultCurrencies
                    fromCurrency={fromCurrency}
                    toCurrency={toCurrency}
                    price={convertedAmount}
                    amount={amount}
                    newCurrencies={newCurrencies}
                />
            </Content>
            <ListCurrencies
                currencies={currencies}
            />
            <Analtics />
            <Discribe />
            <GetInTouch />
        </Container>
    );
};

const Container = styled('div')((props) => {
    return {
        background: "#252933",
        padding: 20,
        paddingTop: 120,
    }
});

const Content = styled('div')((props) => {
    return {
        display: 'flex',
        justifyContent: 'space-evenly',
    }
})

export default Currencies;