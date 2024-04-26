import React from 'react'
import styled, { keyframes } from 'styled-components';
import IconMail from '../../../assets/icons/IconMail';
import { Input } from 'antd';
export default function GetInTouch() {
    return (
        <div>
            <CustomPricing>
                Get in touch
            </CustomPricing>
            <CustomSlogan>
                Say hello or leave a feedback for our mobile app. We will reply during 24 hours.
            </CustomSlogan>
            <CustomLine>
                <CustomLineContent />
                <CustomAnimation >
                    <CustomIconTable>
                        <IconMail />
                    </CustomIconTable>
                </CustomAnimation>
                <CustomLineContent />
            </CustomLine>
            <CustomForm>
                <CustomInput prefix={<IconMail style={{ color: 'white', fontSize: 10 }} />} placeholder="Enter your email" />
                <CustomButtonSend>
                    SUBCRIBE
                </CustomButtonSend>
            </CustomForm>
        </div>
    )
}

const CustomForm = styled('div')((props) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 100
    }
});

const CustomButtonSend = styled('button')((props) => {
    return {
        background: '#d90e30',
        color: 'white',
        width: 120,
        height: 45,
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: 10,
        marginTop: -2,
    }
})

const CustomIconTable = styled('div')((props) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});

const CustomInput = styled(Input)((props) => {
    return {
        width: 500,
        height: 40,
        background: '#3b3f48',

        paddingLeft: 10,
        color: 'white',
        ":hover": {
            background: '#686262'
        }
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
});

const CustomLineContent = styled.div((props) => ({
    position: 'relative',
    borderTop: '1px solid #d90e30',
    marginTop: 50,
    width: '550px',
    marginLeft: 30,
    marginRight: 30
}));