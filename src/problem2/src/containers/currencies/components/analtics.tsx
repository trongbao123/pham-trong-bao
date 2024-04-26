import React from 'react'
import styled from 'styled-components'
import IconAnaltics from '../../../assets/icons/IconAnaltics';
import IconMarketing from '../../../assets/icons/IconMarketing';
import IconOptimization from '../../../assets/icons/IconOptimization';

export default function Analtics() {
    return (
        <CustomChart>
            <AnalticsUl>
                <CustomIcon>
                    <IconAnaltics />
                    <h3>Analytics</h3>
                </CustomIcon>
                <CustomP>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </CustomP>
            </AnalticsUl>
            <CustomHr />
            <AnalticsUl>
                <CustomIcon>
                    <IconMarketing />
                    <h3>Marketing</h3>
                </CustomIcon>
                <CustomP>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </CustomP>
            </AnalticsUl>
            <CustomHr />
            <AnalticsUl>
                <CustomIcon>
                    <IconOptimization />
                    <h3>Optimization</h3>
                </CustomIcon>
                <CustomP>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </CustomP>
            </AnalticsUl>
        </CustomChart>
    )
}

const CustomHr = styled('div')((props) => {
    return {
        borderRight: '1px solid grey',
        paddingLeft: 20,
        paddingRight: 20,

    }
})
const CustomChart = styled('div')((props) => {
    return {
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingTop: 50
    }
});
const CustomP = styled('p')((props) => {
    return {
        textAlign: 'center',
        color: 'white',
        width: 350
    }
})
const CustomIcon = styled('div')((props) => {
    return {
        color: 'red',
        textAlign: 'center',
    }
})
const AnalticsUl = styled('ul')((props) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

