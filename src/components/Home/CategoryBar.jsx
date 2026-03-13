import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 26px 0;
  gap: 52.13px;
`;

const CategoryItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`
const CategoryIcon = styled.img`
    width: 42px;
    height: 42px;
`
const CategoryName = styled.span`
    font-family: "Barlow", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 32.4px;
    color: #292929;
`

const categories = [
  {
    id: 1,
    name: "YENİ! Kore",
    img: "./../images/iteration-2-images/icons/1.svg",
  },
  { id: 2, name: "Pizza", img: "./../images/iteration-2-images/icons/2.svg" },
  { id: 3, name: "Burger", img: "./../images/iteration-2-images/icons/3.svg" },
  {
    id: 4,
    name: "Kızartmalar",
    img: "./../images/iteration-2-images/icons/4.svg",
  },
  {
    id: 5,
    name: "Fast food",
    img: "./../images/iteration-2-images/icons/5.svg",
  },
  {
    id: 6,
    name: "Gazlı içecek",
    img: "./../images/iteration-2-images/icons/6.svg",
  },
];

export default function CategoryBar() {
  return <NavContainer>
    {categories.map(category => (
        <CategoryItem key={category.id}>
            <CategoryIcon src={category.img} />
            <CategoryName>{category.name}</CategoryName>
        </CategoryItem>
    ))}
  </NavContainer>;
}
