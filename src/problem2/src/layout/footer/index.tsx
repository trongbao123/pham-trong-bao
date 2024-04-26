import styled from "styled-components";
import ContactIcon from "../../assets/icons/ContactIcon";

function Footer() {
    return (
        <CustomFooter>
            <CustomImageLogo src="https://99tech.co/assets/img/99Tech.png" alt="logo" loading="lazy" />
            <span style={{ color: 'white', marginTop: 20 }}>© 99Tech 2023 - All rights reserved</span>
            <CustomLi>
                <p >Contact with us</p>
                <div style={{ textAlign: 'end' }}>
                    <ContactIcon />
                </div>
            </CustomLi>
        </CustomFooter>
    );
}

const CustomFooter = styled('div')((props) => {
    return {
        background: "#252933",
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid #ffff',
    }
});

const CustomImageLogo = styled('img')((props) => {
    return {
        width: 80,
        height: 60,
    }
});
const CustomLi = styled('div')((props) => {
    return {
        paddingLeft: 50,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        ":hover": {
            color: '#9841ff',
        }
    }
});
export default Footer;