import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { Container, Jumbotron, Button, Image } from 'react-bootstrap'

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
        <div>
            <Header />
            <Container>
                <Jumbotron className='bg-white'>
                    <h1>{tvDetail.name}</h1>
                    <hr className='solid'></hr>
                    <Image src={"https://image.tmdb.org/t/p/w500/" + tvDetail.poster_path} />
                    <h4>{tvDetail.tagline}</h4>
                    <hr className='solid'></hr>
                    <p>Genres: {tvDetail.genres?.map(g => {
                        return (
                            <Button className='ml-2'>{g.name}</Button>
                        )
                    })}
                    </p>

                    <strong><p>{tvDetail.overview}</p></strong>
                    <p>Episode number: {tvDetail.episode_number}</p>
                    <a href={tvDetail.homepage}>HomePage</a>
                    <hr className='solid'></hr>
                </Jumbotron>
            </Container>

        </div>
    )
}

export default TVDetailPage

