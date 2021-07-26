import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import HeaderSearchPage from "../HeaderSearchPage/HeaderSearchPage";
import "./style.css";
const myKey = process.env.REACT_APP_API_KEY;

const SearchPage = () => {
  console.log(useParams());
  const { keyword } = useParams();
  console.log(keyword);
  let [searchData, setSearchData] = useState([]);

  useEffect(() => {
    let url;
    if (keyword) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=${keyword}&page=1&include_adult=false`;
    } else {
      url = `
      https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US`;
    }
    try {
      const getData = async () => {
        let result = await getData(url);
        let results = result.results;
        setSearchData(results);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [keyword]);

  console.log(searchData);

  return (
    <div>
      <HeaderSearchPage />
      <Row className="search-page">
        {searchData
          ? searchData.map((e) => {
              console.log({ e });
              return (
                <div key={e.id}>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/original${e.poster_path}`}
                        alt="./notfound.jpeg"
                      />
                      <Card.Body className="mainCard search-page">
                        <Card.Title>{e.title}</Card.Title>
                        <br />
                        <Card.Subtitle style={{ color: "grey" }}>
                          User Rating: {e.vote_average}
                        </Card.Subtitle>
                        <br />
                        <Card.Text style={{ color: "white" }}>
                          {e.overview}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              );
            })
          : ""}
      </Row>
      <Footer />
    </div>
  );
};

export default SearchPage;
