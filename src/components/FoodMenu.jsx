import styled from "styled-components";

const MenuSection = styled.section`
    background-color: #FAF7F2;
    padding: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 40px;
`

const products = [
    {
    id: 1,
    name: "Terminal Pizza",
    rating: 4.9,
    reviews: 200,
    price: 60,
    img: "./../images/iteration-2-images/pictures/food-1.png",    
    },
    {
    id: 2,
    name: "Position Absolute Acı Pizza",
    rating: 4.9,
    reviews: 928,
    price: 85,
    img: "./../images/iteration-2-images/pictures/food-2.png",    
    },
    {
    id: 3,
    name: "useEffect Tavuklu Burger",
    rating: 4.9,
    reviews: 462,
    price: 75,
    img: "./../images/iteration-2-images/pictures/food-3.png",    
    },
];

export default function FoodMenu() {
    return (<MenuSection>

    </MenuSection>)
}