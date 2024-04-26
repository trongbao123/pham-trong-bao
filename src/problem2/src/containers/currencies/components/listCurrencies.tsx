import React from 'react'
import styled, { keyframes } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import iconMap from '../../../data/iconMap';
import IconTable from '../../../assets/icons/IconTable';
type props = {
    currencies: any
}


export default function ListCurrencies(props: props) {
    const {
        currencies
    } = props || {};

    return (
        <Container>
            <CustomPricing>
                Pricing Tables
            </CustomPricing>
            <CustomSlogan>
                View pricing tables to see what price do you like most of all
            </CustomSlogan>
            <CustomLine>
                <CustomLineContent />
                <CustomAnimation >
                    <CustomIconTable>
                        <IconTable />
                    </CustomIconTable>
                </CustomAnimation>
                <CustomLineContent />
            </CustomLine>
            <FormCurrencie>
                <SelectCurrencies>
                    <Currencieslabel>
                        <InputCurrencies>
                            <AmountCurrencies>logo</AmountCurrencies>
                            <AmountCurrencies>currency</AmountCurrencies>
                            <AmountCurrencies>Price</AmountCurrencies>
                        </InputCurrencies>
                    </Currencieslabel>
                    <CurrencieslabelSelect>
                        {currencies.length > 0 && currencies?.map((currency: any) => (
                            <InputCurrencies key={uuidv4()}>
                                <FromToCurrencies >
                                    {iconMap[currency?.currency]}
                                </FromToCurrencies>
                                <FromToCurrencies>{currency?.currency}</FromToCurrencies>
                                <FromToCurrencies>{currency?.price}</FromToCurrencies>
                            </InputCurrencies>
                        ))}
                    </CurrencieslabelSelect>
                </SelectCurrencies>
            </FormCurrencie >
        </Container>
    )
};

const Container = styled('div')((props) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
const CustomIconTable = styled('div')((props) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})
const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const CustomAnimation = styled.div`
  width: 100px;
  height: 100px;
  background: #d90e30;
  border-radius: 50%;
  color: white;
  animation: ${jumpAnimation} 2s infinite;
`;


const CustomLineContent = styled.div((props) => ({
    position: 'relative',
    borderTop: '1px solid #d90e30',
    marginTop: 50,
    width: '550px',
    marginLeft: 30,
    marginRight: 30
}));

const CustomLine = styled('div')((props) => {
    return {
        display: 'flex',
        justifyContent: 'center',
    }
});

const CustomSlogan = styled('p')((props) => {
    return {
        color: 'white',
        fontSize: 15,
        fontWeight: 100,
        textAlign: 'center',
    }
})
const CustomPricing = styled('h2')((props) => {
    return {
        color: '#d90e30',
        fontSize: 40,
        fontWeight: 300,
        textAlign: 'center',
        paddingTop: 50
    }
})
const FormCurrencie = styled('form')((props) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: "75%",
        padding: 10,
        marginTop: 40,
        marginBottom: 40
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
