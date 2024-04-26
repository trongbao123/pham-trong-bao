import React from 'react';
import { styled } from 'styled-components';
import HomeIcon from '../../assets/icons/HomeIcon';
import AboutIcon from '../../assets/icons/AboutIcon';
import ProductIcon from '../../assets/icons/ProductIcon';
import ContactIcon from '../../assets/icons/ContactIcon';

function Header() {
    return (
        <CustomHeader>
            <CustomImageLogo src="https://99tech.co/assets/img/99Tech.png" alt="logo" loading="lazy" />
            <CustomUl>
                <CustomLi>
                    <HomeIcon />
                    <span>Home</span>
                </CustomLi>
                <CustomLi>
                    <AboutIcon />
                    <span>About</span>
                </CustomLi>
                <CustomLi>
                    <ProductIcon />
                    <span>Product</span>
                </CustomLi>
                <CustomLi>
                    <ContactIcon />
                    <span>Contact</span>
                </CustomLi>
            </CustomUl>
            <CustomJoin>
                <p style={{ marginTop: 10 }}>Join Us</p>
            </CustomJoin>
        </CustomHeader>
    );
}

const CustomHeader = styled('div')((props) => {
    return {
        background: "#252933",
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        width: '100%',
        zIndex: 100000,
        top: 0,
        left: 0,
        borderBottom: '1px solid #ffff',
    }
});

const CustomUl = styled('ul')((props) => {
    return {
        display: 'flex',
        listStyle: 'none',
    }
});

const CustomLi = styled('li')((props) => {
    return {
        paddingLeft: 50,
        color: 'white',
        display: 'flex',
        cursor: 'pointer',
        ":hover": {
            color: '#9841ff',
        }
    }
});

const CustomImageLogo = styled('img')((props) => {
    return {
        width: 80,
        height: 60,
    }
});

const CustomJoin = styled('div')((props) => {
    return {
        paddingRight: 5,
        width: 100,
        height: 40,
        borderRadius: 5,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 30,
        cursor: 'pointer',
        background: 'linear-gradient(94deg, #a93eff, #5e40de 51%, #00b3ff)',

    }
})
export default Header;