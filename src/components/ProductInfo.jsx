import React from 'react';
import styled from 'styled-components';
import pizzaData from '../data/pizzaData';

const IngredientsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const CustomCheckboxLabel = styled.div`
    display: flex; 
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    color: #5f5f5f;
`;
export default function Ingredients({ order, handleIngredientChange }) {
    return (
        <>
            <h2>Ingredients</h2>
            <p style={{ color: '#5f5f5f', fontSize: '14px' }}>
                Select the ingredients you want on your pizza. You can choose as many as you like!
            </p>
            <IngredientsGrid>
                {
               pizzaData && pizzaData.ingredients.map((item) => {
               
                    return (
                        <CustomCheckboxLabel key={item} checked={isChecked}>
                            <input
                                type="checkbox"
                                checked={order.ingredients.includes(item)}
                                onChange={() => handleIngredientChange(item, e.target.checked)}
                            />
                            "<span className="checkmark"></span>"
                            {item}
                        </CustomCheckboxLabel>
                    );
                })
                    
                }
            </IngredientsGrid>
        </>
    );
}