
import React, { useEffect, useRef, useState } from "react";
import uniqueCardsArr from './db'

import { Col, Container, Row } from "react-bootstrap";
import Card from "./components/Card/Card"

import Bar from "./components/Bar/Bar"
import Finish from "./components/Finish/Finish"

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function shuffleYourCards(arr) {
  const length = arr.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    swap(arr, currentIndex, randomIndex);
  }
  return arr;
}
function App() {
  const [cards, setCards] = useState(() =>
    shuffleYourCards(uniqueCardsArr.concat(uniqueCardsArr)))

  return (

    <div>
      <Bar />
      <Container>
        <Row>
          {cards.map((card, index) => {
            return (
              <Col xs={6} md={3} lg={2}>
                <Card
                  key={index}
                  card={card}
                  index={index} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>


  );
}

export default App;
