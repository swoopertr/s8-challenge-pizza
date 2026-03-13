import styled from 'styled-components';
import homebanner from './../assets/home-banner.png';
import logo from './../assets/logo.svg';
import CategoryBar from './Home/CategoryBar';
import PromoCard from './Home/PromoCard';


import { useHistory } from 'react-router-dom';

const Container = styled.div`
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 60px;
    color: white;
    text-align: center;
    font-family: 'Barlow', sans-serif;
`;
const Title = styled.h1`
    font-size: 64px;
    font-weight: 300;
    letter-spacing: 2px;
    margin: 40px 0 20px 0;
    line-height: 1.1;
    text-transform: uppercase;
`;

const Button = styled.button`
    background-color: #FDC913;      
    border: none;
    border-radius: 50px;
    padding: 15px 50px;
    color: #292929;
    font-size: 16px;
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`

export default function Home() {
    const history = useHistory();
    return (
        <>
            <Container style={{backgroundImage: `url(${homebanner})`}} >
                
                <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <img src={logo} alt="Teknolojik Yemekler" style={{ width: '300px' }} />
                </div>
                <Title>
                    KOD ACIKTIRIR <br />
                    PİZZA, DOYURUR
                </Title>
                <Button onClick={() =>history.push('/order')}>Acıktım</Button>
            </Container>
            <CategoryBar />
            <PromoCard/>
            
        </>
        
        
        
    )
}