import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import Color from "color";
const myKey = process.env.REACT_APP_API_KEY;

const SearchPage = () => {
  console.log(useParams());
  const { keyword } = useParams();
  console.log(keyword);
  let [searchData, setSearchData] = useState([]);

  const getData = async (url) => {
    const data = await fetch(url);
    const result = await data.json();
    return await result;
  };

  useEffect(async () => {
    let url;
    if (keyword) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=${keyword}&page=1&include_adult=false`;
    } else {
      url = `
      https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US`;
    }
    try {
      let result = await getData(url);
      let results = result.results;
      setSearchData(results);
    } catch (error) {
      console.log(error);
    }
  }, [keyword]);

  console.log(searchData);

  return (
    <div>
      <Row>
        {searchData
          ? searchData.map((e) => {
              console.log({ e });
              return (
                <div>
                  <Col>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/original${e.backdrop_path}`}
                      />
                      <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Subtitle className="my-3 text-muted">
                          Genre: {e.genre}
                        </Card.Subtitle>
                        <Card.Text style={{ color: "black" }}>
                          {e.overview}
                        </Card.Text>
                        <Card.Link href="#">View more</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              );
            })
          : ""}
      </Row>
    </div>
  );
};

export default SearchPage;
