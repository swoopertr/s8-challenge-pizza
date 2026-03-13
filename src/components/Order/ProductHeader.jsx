import styled from "styled-components";

const HeaderDiv = styled.div`
  margin-bottom: 20px;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  .info-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.4rem;
    .rating-info {
      font-size: 0.9rem;
      font-weight: normal;
      color: #5f5f5f;
    }
  }
`;

export default function ProductHeader({ basePrice }) {
  return (
    <HeaderDiv>
      <h2>Position Absolute Acı Pizza</h2>
      <div className="info-bar">
        <span>{basePrice.toFixed(2)}₺</span>
        <div className="rating-info">
          <span>4.9</span> <span>(200)</span>
        </div>
      </div>
    </HeaderDiv>
  );
}
