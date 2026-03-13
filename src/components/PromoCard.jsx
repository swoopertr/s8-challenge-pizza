import styled from "styled-components";
import { useHistory } from 'react-router-dom';
const PromoCardWrapper = styled.div`
    width: 1072px;
    height: 450px;
    margin: 68px auto;
    gap: 11px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
`

const PizzaCard = styled.div`
    background-image: url("./../images/iteration-2-images/cta/kart-1.png");
    background-size: cover;
    background-position: center;
    width: 530px;
    height: 448.75px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    align-items: flex-start;
    justify-content: flex-start;
    color: white;
    padding: 44px 49px;
`;

const PizzaCardTitle = styled.h2`
    font-family: "Quattrocento", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 68px;
    line-height: 70px;
    margin-bottom: 1rem;
`
const PizzaCardText = styled.p`
    margin-bottom: 25px;
    font-family: "Barlow", sans-serif;
    font-size: 20px;
    font-weight: 600;
`
const PromoCardButton = styled.button`
    background-color: white;
    color: #CE2829;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 12px;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }
`

const PromoCardRightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
`
const PromoCardRight = styled.div`
    border-radius: 12px;
    padding: 28.5px 32px;
    color: white;
    height: 100%;
    background-image: url(${props => props.bgimg});
    
`
const PromoCardRightTitle = styled.h2`
    font-family: "Barlow", sans-serif;
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 29px;
`



export default function PromoCard() {
    const history = useHistory();
    return (
        <PromoCardWrapper>
            <PizzaCard>
                <PizzaCardTitle>Özel<br/>Lezzetus</PizzaCardTitle>
                <PizzaCardText>Position:Absolute Acı Burger</PizzaCardText>
                <PromoCardButton onClick={() =>history.push('/order')}>SİPARİŞ VER</PromoCardButton>
            </PizzaCard>
            <PromoCardRightWrapper >
                <PromoCardRight bgimg='./../images/iteration-2-images/cta/kart-2.png'>
                    <PromoCardRightTitle>Hackathlon<br/>Burger Menü</PromoCardRightTitle>
                    <PromoCardButton onClick={() =>history.push('/order')}>SİPARİŞ VER</PromoCardButton>
                </PromoCardRight>
                <PromoCardRight bgimg='./../images/iteration-2-images/cta/kart-3.png'>
                    <PromoCardRightTitle style={{color: "black"}}><span style={{color: "red"}}>Çoooook</span> hızlı<br/>npm gibi kurye </PromoCardRightTitle>
                    <PromoCardButton onClick={() =>history.push('/order')}>SİPARİŞ VER</PromoCardButton>
                </PromoCardRight>                                                                    
            </PromoCardRightWrapper>
        </PromoCardWrapper>
    );
}
