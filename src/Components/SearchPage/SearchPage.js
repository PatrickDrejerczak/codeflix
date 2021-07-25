import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap"
import Color from "color";

const SearchPage = () => {
  console.log(useParams());
  const { keyword } = useParams();
  console.log(keyword);
  let [searchData, setSearchData] = useState({});

  useEffect(() => {
    const getData = async () => {
      let url;
      if (keyword) {
        url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=a789c89d7c354c64afc320506517b71f`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a789c89d7c354c64afc320506517b71f`;
      }

      const data = await fetch(url);
      const result = await data.json();
      setSearchData(result);
    };
    getData();
  }, [keyword]);
  console.log(searchData);
  return (
    <div>
      <Row>
        {searchData.articles
          ? searchData.articles?.map((e) => {
            console.log({ e })
            return (
              <div>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img
                      variant="top"
                      src={e.urlToImage}
                    />
                    <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Subtitle className="my-3 text-muted">By: {e.author}</Card.Subtitle>
                      <Card.Text style={{ color: 'black' }}>
                        {e.description}
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
