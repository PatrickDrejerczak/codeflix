import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import ModalBox from '../../Components/ModalBox/ModalBox'
import './MovieDetailPage.css'
import { Container, Jumbotron, Button, Image } from 'react-bootstrap'

const API_KEY = process.env.REACT_APP_API_KEY

const MovieDetailPage = () => {
    const { id } = useParams()
    const [movieDetail, setMovieDetail] = useState({})
    const [movieTrailer, setMovieTrailer] = useState('');
    console.log({ movieTrailer })
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {

        const fetchMovieDetail = async () => {
            const resp = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            const json = await resp.json()
            console.log({ haha: json })
            setMovieDetail(json)
        }
        fetchMovieDetail()
    }, [id])

    const fetchYoutubeId = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
        const resp = await fetch(url);
        const json = await resp.json();
        console.log({ hihi: json });
        if (json.results.length > 0) {
            setMovieTrailer(json.results[0]);
            setModalOpen(!modalOpen)
        }
    };


    return (
        <div className="movie-page">
            <Header />
            <Container className="movie-page">
                <Jumbotron >
                    <Image height={"500px"} src={"https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path} />
                    <ModalBox
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        movieTrailer={movieTrailer}
                    />

                    <Button variant="danger" style={{margin: "20px 0 20px 0"}} onClick={() => fetchYoutubeId(movieDetail.id)}>
                        Play Trailer
                    </Button>
                    <h4>{movieDetail.tagline}</h4>
                    <hr className='solid'></hr>
                    <p>Genres: {movieDetail.genres?.map(g => {
                        return (
                            <Button variant={"success"} className='ml-2'>{g.name}</Button>
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
                    <Button href={movieDetail.homepage}>To Movie Page</Button>
                    <hr className='solid'></hr>
                </Jumbotron>
            </Container>

        </div>
    )
}

export default MovieDetailPage

