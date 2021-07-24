import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import { Container, Jumbotron, Button, Image } from 'react-bootstrap'

const API_KEY = process.env.REACT_APP_API_KEY

const SinglePage = () => {
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState({})

    useEffect(() => {

        const fetchMovieDetail = async () => {
            const resp = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            const json = await resp.json()
            console.log({ json })
            setMovieDetail(json)
        }

        fetchMovieDetail()
    }, [id])

    return (
        <div>
            <Container>
                <Jumbotron className='bg-white'>
                    <h1>{movieDetail.title}</h1>
                    <hr className='solid'></hr>
                    <Image src={"https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path} />
                    <h4>{movieDetail.tagline}</h4>
                    <hr className='solid'></hr>
                    <p>Genres: {movieDetail.genres?.map(g => {
                        return (
                            <Button className='ml-2'>{g.name}</Button>
                        )
                    })}
                    </p>
                    <p>
                        {movieDetail.production_companies?.map(p => {
                            return (
                                <Image className='mx-3' style={{ width: '90px', height: 'auto' }} src={`https://image.tmdb.org/t/p/w500/${p.logo_path}`} />
                            )
                        })}
                    </p>

                    <strong><p>{movieDetail.overview}</p></strong>
                    <p>Runtime: {movieDetail.runtime} minutes</p>
                    <a href={movieDetail.homepage}>HomePage</a>
                    <hr className='solid'></hr>
                </Jumbotron>
            </Container>
            
        </div>
    )
}

export default SinglePage

