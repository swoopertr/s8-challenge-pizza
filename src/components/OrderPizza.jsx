import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Barlow', sans-serif;
`;

const Header = styled.header`
  background-color: #ce2829;
  color: white;
  padding: 50px 0;
  text-align: center;
  h1 { font-size: 2.5rem; margin-bottom: 10px; font-weight: 700; }
  nav { font-size: 0.9rem; opacity: 0.9; a { color: white; text-decoration: none; margin: 0 5px; } }
`;

const MainContent = styled.main`
  max-width: 600px;
  margin: 40px auto;
  padding: 0 20px;
`;

const ProductHeader = styled.div`
  margin-bottom: 20px;
  h2 { font-size: 1.5rem; margin-bottom: 15px; }
  .info-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.4rem;
    .rating-info { font-size: 0.9rem; font-weight: normal; color: #5f5f5f; }
  }
`;

const Description = styled.p`
  color: #5f5f5f;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 30px;
`;

const FormSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  h4 { margin-bottom: 15px; }
  label { display: block; margin-bottom: 8px; font-size: 0.9rem; }
`;

const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 40px;
`;

const OrderSummary = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  background: #fafafa;
  .row { display: flex; justify-content: space-between; margin-bottom: 10px; }
  .total { color: #ce2829; font-weight: bold; }
`;

const SubmitButton = styled.button`
  background-color: #fdc913;
  border: none;
  width: 100%;
  padding: 15px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0 0 5px 5px;
  text-transform: uppercase;
`;

export default function OrderPizza() {
  const [order, setOrder] = useState({
    boyut: "",
    hamur: "",
    malzemeler: [],
    not: "",
    adet: 1
  });

  const sizes = ["Küçük", "Orta", "Büyük"];
  const ingredients = ['Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır', 'Sucuk', 'Kanada Jambonu', 'Ananas', 'Jalepeno'];
  const basePrice = 85.50;
  const ingredientPrice = 5;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleIngredientChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setOrder({ ...order, malzemeler: [...order.malzemeler, value] });
    } else {
      setOrder({ ...order, malzemeler: order.malzemeler.filter(m => m !== value) });
    }
  };

  const totalIngredientsPrice = order.malzemeler.length * ingredientPrice;
  const totalPrice = (basePrice + totalIngredientsPrice) * order.adet;

  return (
    <>
      <Header>
        <h1>Teknolojik Yemekler</h1>
        <nav>
          <a href="#">Anasayfa</a> - <a href="#">Seçenekler</a> - <strong>Sipariş Oluştur</strong>
        </nav>
      </Header>

      <PageContainer>
        <MainContent>
          
          <ProductHeader>
            <h2>Position Absolute Acı Pizza</h2>
            <div className="info-bar">
              <span>{basePrice.toFixed(2)}₺</span>
              <div className="rating-info">
                <span>4.9</span> <span>(200)</span>
              </div>
            </div>
          </ProductHeader>

          <Description>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
            Pizza, domates, peynir ve malzemelerle hazırlanan geleneksel bir lezzettir.
          </Description>

          <FormSection>
            <div>
              <h4>Boyut Seç <span style={{ color: 'red' }}>*</span></h4>
              {sizes.map((size) => (
                <label key={size}>
                  <input type="radio" name="boyut" value={size} checked={order.boyut === size} onChange={handleChange} /> {size}
                </label>
              ))}
            </div>
            <div>
              <h4>Hamur Seç <span style={{ color: 'red' }}>*</span></h4>
              <select name="hamur" value={order.hamur} onChange={handleChange} style={{ padding: '8px', width: '150px' }}>
                <option value="" disabled>Hamur Kalınlığı</option>
                <option value="İnce">İnce</option>
                <option value="Normal">Normal</option>
                <option value="Kalın">Kalın</option>
              </select>
            </div>
          </FormSection>

          <h4>Ek Malzemeler</h4>
          <p style={{ fontSize: '0.8rem', marginBottom: '15px' }}>Her bir malzeme {ingredientPrice}₺</p>
          <IngredientsGrid>
            {ingredients.map((item) => (
              <label key={item}>
                <input type="checkbox" value={item} checked={order.malzemeler.includes(item)} onChange={handleIngredientChange} /> {item}
              </label>
            ))}
          </IngredientsGrid>

          <h4>Sipariş Notu</h4>
          <textarea
            name="not"
            value={order.not}
            onChange={handleChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            style={{ width: '100%', height: '80px', padding: '10px', marginBottom: '30px', borderRadius: '5px', border: '1px solid #ccc' }}
          />

          <hr style={{ opacity: '0.3', marginBottom: '30px' }} />

          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex' }}>
              <button onClick={() => setOrder({ ...order, adet: Math.max(1, order.adet - 1) })} style={{ padding: '15px', background: '#fdc913', border: 'none' }}>-</button>
              <div style={{ padding: '15px 25px', borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>{order.adet}</div>
              <button onClick={() => setOrder({ ...order, adet: order.adet + 1 })} style={{ padding: '15px', background: '#fdc913', border: 'none' }}>+</button>
            </div>

            <div style={{ flexGrow: 1 }}>
              <OrderSummary>
                <h4 style={{ marginBottom: '15px' }}>Sipariş Toplamı</h4>
                <div className="row">
                  <span>Seçimler</span>
                  <span>{totalIngredientsPrice.toFixed(2)}₺</span>
                </div>
                <div className="row total">
                  <span>Toplam</span>
                  <span>{totalPrice.toFixed(2)}₺</span>
                </div>
              </OrderSummary>
              <SubmitButton onClick={() => console.log(order)}>SİPARİŞ VER</SubmitButton>
            </div>
          </div>
        </MainContent>
      </PageContainer>
    </>
  );
}