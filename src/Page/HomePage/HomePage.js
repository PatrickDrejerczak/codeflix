import React from 'react'
import Carousels from '../../Components/Carousels/Carousels'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
const HomePage = ({popularMovies,popularTV, trending, actionMovies}) => {
    return (
        <>
            <Header />
            <Carousels popularMovies={popularMovies} popularTV={popularTV} trending={trending} actionMovies={actionMovies}/>
            <Footer />
        </>
    )
}

export default HomePage
