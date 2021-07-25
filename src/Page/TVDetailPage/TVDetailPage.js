import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { Container, Jumbotron, Button, Image } from 'react-bootstrap'
import './TVDetailPage.css'
const API_KEY = process.env.REACT_APP_API_KEY

const TVDetailPage = () => {
    const { id } = useParams()
    const [tvDetail, setTvDetail] = useState({})

    useEffect(() => {

        const fetchTvDetail = async () => {
            const resp = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
            const json = await resp.json()
            console.log({ json })
            setTvDetail(json)
        }

        fetchTvDetail()
    }, [id])

    return (
        <div className="tv-page">
            <Header />
            <Container className='tv-page'>
                <Jumbotron className="bg-dark">

                    <Image src={"https://image.tmdb.org/t/p/w500/" + tvDetail.poster_path} style={{ margin: "20px 0 20px 0" }} />
                    <h4>{tvDetail.tagline}</h4>
                    <hr className='solid'></hr>
                    <p>Genres: {tvDetail.genres?.map(g => {
                        return (
                            <Button variant='success' className='ml-2'>{g.name}</Button>
                        )
                    })}
                    </p>

                    <strong><p>{tvDetail.overview}</p></strong>
                    <p>Episode number: {tvDetail.episode_number}</p>
                    <Button href={tvDetail.homepage}>To TV Show's Page</Button>
                    <hr className='solid'></hr>
                </Jumbotron>
            </Container>

        </div>
    )
}

export default TVDetailPage

