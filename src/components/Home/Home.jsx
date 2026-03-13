import styled from 'styled-components';
import CategoryBar from './CategoryBar';
import PromoCard from './PromoCard';
import HeadContainer from './HeadContainer';

export default function Home() {
    return (
        <>
            <HeadContainer />
            <CategoryBar />
            <PromoCard/>
        </>
    )
}