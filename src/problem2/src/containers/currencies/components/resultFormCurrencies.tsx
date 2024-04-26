import React from 'react'
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import IconResult from '../../../assets/icons/IconResult';
import iconMap from '../../../data/iconMap';
type Props = {
    newCurrencies: any,
    fromCurrency: number,
    toCurrency: number,
    price: number
}
export default function ResultFormCurrencies(props: Props) {
    const { newCurrencies, fromCurrency, toCurrency, price } = props || {};

    return (
        <>
            <CustomUl>
                <div>
                    {newCurrencies.length > 0 ?
                        newCurrencies.map((currency: any) =>
                            currency.price === fromCurrency && currency.currency ? (
                                <div key={uuidv4()}>
                                    <CustomMap>
                                        From Currency:
                                        <CustomSpan>{iconMap[currency.currency]}</CustomSpan>
                                        <CustomSpan>{currency.currency}</CustomSpan>
                                    </CustomMap>
                                    <p>Price: {currency.price}</p>
                                </div>
                            ) : null
                        ) : <div key={uuidv4()}>
                            <CustomMap>
                                From Currency:
                            </CustomMap>
                            <p>Price: 0</p>
                        </div>}
                </div>
                <CustomIcon>
                    <IconResult />
                </CustomIcon>
                <div>
                    {newCurrencies.length > 0 ?
                        newCurrencies.map((currency: any) =>
                            currency.price === toCurrency && currency.currency ? (
                                <div key={uuidv4()}>
                                    <CustomMap>
                                        To Currency:
                                        <CustomSpan>{iconMap[currency.currency]}</CustomSpan>
                                        <CustomSpan>{currency.currency}</CustomSpan>
                                    </CustomMap>
                                    <p>Price: {currency.price}</p>
                                </div>
                            ) : null
                        ) : <div key={uuidv4()}>
                            <CustomMap>
                                To Currency:
                            </CustomMap>
                            <p>Price: 0 </p>
                        </div>}
                </div>
            </CustomUl>
            <CustomHr>
                <p>Exchanged currency value:</p>
                <p>{price}</p>
            </CustomHr>
        </>

    )
}
const CustomUl = styled('div')((props) => {
    return {
        display: 'flex',
        listStyle: 'none',
        paddingLeft: 8,
        color: 'white',
        justifyContent: 'space-evenly',
        borderBottom: '1px solid white',
    }
});

const CustomIcon = styled('div')((props) => {
    return {
        display: 'flex',
        listStyle: 'none',
        color: 'white',
        paddingTop: 30
    }
});

const CustomHr = styled('div')((props) => {
    return {
        display: 'flex',
        color: 'white',
        justifyContent: 'space-between',
        paddingLeft: 100,
        paddingRight: 120
    }
});

const CustomMap = styled('p')((props) => {
    return {
        display: 'flex',
    }
});

const CustomSpan = styled('span')((props) => {
    return {
        paddingLeft: 10
    }
})