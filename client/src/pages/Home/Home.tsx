import React from "react";
import Container from "../../UI/Container/Container";
import HomeSlider from "../../modules/HomeSlider/HomeSlider";
import CardList from "../../modules/CardList/CardList";
import { ToastContainer } from 'react-toastify';


const Home = (): ReturnType<React.FC> => {
    return (
        <Container style={{
            maxWidth: '1270px'
        }}>
            <HomeSlider />
            <CardList category="Авто" />
            <CardList category="Дом и сад" />
            <CardList category="Одежда, обвуь и аксессуары " />
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light" />
        </Container>
    )
}

export default Home;