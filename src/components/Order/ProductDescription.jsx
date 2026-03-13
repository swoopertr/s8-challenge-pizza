import styled from "styled-components";

const InfoP = styled.p`
  color: #5f5f5f;
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 30px;
`;

export default function ProductDescription() {
  return (
    <InfoP>
      Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza
      tam sana göre. Pizza, domates, peynir ve malzemelerle hazırlanan
      geleneksel bir lezzettir.
    </InfoP>
  );
}
