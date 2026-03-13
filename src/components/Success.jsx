import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  background-color: #ce2829;let 
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Barlow", sans-serif;
`;

const Logo = styled.img`
  width: 150px;
  padding: 20px;
  text-align: center;
  span {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #fff;
`;

const Massage = styled.p`
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
`;

export default function Success() {
  const history = useHistory();
  return (
    <Container>
      <Logo>
        <span>Teknolojik Yemekler</span>
      </Logo>
      <Content>
        <Message>
          TEBRİKLER!<br />
          SİPARİŞİNİZ ALINDI!
        </Message>
      </Content>
    </Container>
  );
}