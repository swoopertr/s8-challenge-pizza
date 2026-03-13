import styled from "styled-components";

const Header = styled.header`
  background-color: #ce2829;
  color: white;
  padding: 50px 0;
  text-align: center;
  h1 { font-size: 2.5rem; margin-bottom: 10px; font-weight: 700; }
  nav { font-size: 0.9rem; opacity: 0.9; a { color: white; text-decoration: none; margin: 0 5px; } }
`;

export default function OrderHeader(){
    return <Header>
        <h1>Teknolojik Yemekler</h1>
        <nav>
          <a href="#">Anasayfa</a> - <a href="#">Seçenekler</a> - <strong>Sipariş Oluştur</strong>
        </nav>
      </Header>

}