import React, { useEffect, useRef, useState } from "react";
import uniqueCardsArr from './db';
import { Col, Container, Row } from "react-bootstrap";
import Card from "./components/Card/Card";
import Bar from "./components/Bar/Bar";
import Finish from "./components/Finish/Finish";

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
    shuffleYourCards(uniqueCardsArr.concat(uniqueCardsArr)));
  const [openCards, setOpencards] = useState([]);
  const [matchedCards, setMatchedcards] = useState({});
  const [moves, setMoves] = useState(0);

  const [modal, setModal] = useState(false);
  const timeout = useRef(null);
  const [disableAllCards, setDisableAllCards] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const disable = () => {
    setDisableAllCards(true);
  }

  const enable = () => {
    setDisableAllCards(false);
  }
  const checkIfCompleted = () => {
    if (Object.keys(matchedCards).length === uniqueCardsArr.length) {
      setModal(true)
      const highScore = Math.min(moves, bestScore)
      setBestScore(highScore)
      localStorage.setItem("bestScore", highScore)
    }
  }

  const evaluate = () => {
    const [first, second] = openCards;
    enable()
    if (cards[first].type === cards[second].type) {
      setMatchedcards((prev) => ({ ...prev, [cards[first].type]: true }))
      setOpencards([])
      return
    }
    timeout.current = setTimeout(() => {
      setOpencards([])
    }, 5000)
  }


  const handleOnCardClick = (index) => {
    if (openCards.length === 1) {
      setOpencards((prev) => [...prev, index])
      setMoves((moves) => moves + 1)
      disable()
    }
    else {
      clearTimeout(timeout.current)
      setOpencards([index])
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [openCards]);


  useEffect(() => {

    checkIfCompleted();
    // eslint-disable-next-line
  }, [matchedCards]);

  const isFlipped = (index) => {
    return openCards.includes(index);

  }


  const isNotActive = (card) => {
    return Boolean(matchedCards[card.type]);

  }

  const handleRestart = () => {
    setMatchedcards({});
    setOpencards([]);
    setModal(false);
    setMoves(0);
    setDisableAllCards(false);
    setCards(shuffleYourCards(uniqueCardsArr.concat(uniqueCardsArr)));
  };

  return (

    <>
      <Bar
        moves={moves}
        bestScore={bestScore}
        handleRestart={handleRestart} />
      <Container>
        <Row>
          {cards.map((card, index) => {
            return (
              <Col key={index} xs={6} md={3} lg={2}>
                <Card

                  card={card}
                  index={index}
                  isDisabled={disableAllCards}
                  isInactive={isNotActive(card)}
                  isFlipped={isFlipped(index)}
                  onClick={handleOnCardClick} ></Card>
              </Col>
            )
          })}
        </Row>
      </Container>

      <Finish

        modal={modal}
        moves={moves}
        handleRestart={handleRestart} />
    </>


  );
}

export default App;
