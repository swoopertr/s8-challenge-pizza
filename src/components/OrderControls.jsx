import React from 'react';
import styled from 'styled-components';

const flexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SummaryBox = styled.div`
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    padding: 10px;
    background: #F9F9F9;
    flex: 1;
    margin-right: 20px;
    .row{
        display: flex; justify-content: space-between; margin-bottom: 10px; color: #5f5f5f; font-weight: bold;
    .total{
        font-size: 18px; color: #CE2829; margin-top: 10px;
    }
`;

const CounterBox = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #E5E5E5; 
    border-radius: 5px;
    overflow: hidden;
    button{
        background: #E5E5E5;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
    }
    .count{
        padding: 0 15px;
        background: #F9F9F9;
        text-align: center;
        font-weight: bold;
        width: 40px;
    }
`;

const SubmitBtn = styled.button`
    background: #fac60b;
    border: none;
    padding: 15px;
    margin-top: 15px;
    width: 150px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
`;

export default function OrderControls({ order, updateCount, submitOrder, totalIngredientsPrice, totalPrice }) {
    return (<></>)
}