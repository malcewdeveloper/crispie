import React from "react";
import Container from "../../UI/Container/Container";
import HomeSlider from "../../modules/HomeSlider/HomeSlider";
import CardList from "../../modules/CardList/CardList";


const Home = (): ReturnType<React.FC> => {
    return (
        <Container style={{
            maxWidth: '1270px'
        }}>
            <HomeSlider />
            <CardList category="Авто" />
            <CardList category="Дом и сад" />
            <CardList category="Одежда, обвуь и аксессуары " />
        </Container>
    )
}

export default Home;