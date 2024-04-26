import React from 'react'
import styled from 'styled-components'

export default function Discribe() {
    return (
        <Container>
            <CustomImage />
            <CustomDes>
                <CustomH1Des>Describe your service fantastic & smart features</CustomH1Des>
                <CustomP>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</CustomP>
                <CustomButton>
                    Use service now
                </CustomButton>
            </CustomDes>
        </Container>
    )
}

const CustomButton = styled('button')((props) => {
    return {
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 5,
        border: 'solid 2px #ffff',
        color: 'white',
        width: 400,
        height: 60,
        marginTop: 30,
        cursor: 'pointer',
    }
})
const Container = styled('div')((props) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 200
    }
});

const CustomImage = styled('div')((props) => {
    return {
        backgroundImage: "url(http://demo.vegatheme.com/startos/demo3/wp-content/uploads/sites/3/2015/08/devices1-2-768x708.png)",
        width: 900,
        height: 600,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
});

const CustomDes = styled('h1')((props) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: 100,
        color: 'white',
    }
});

const CustomH1Des = styled('h1')((props) => {
    return {
        fontSize: 40,
        marginTop: 0
    }
});

const CustomP = styled('p')((props) => {
    return {
        fontSize: 15,
        fontFamily: 'serif',
        fontWeight: '200',
    }
})