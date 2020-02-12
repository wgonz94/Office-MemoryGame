import React, { Component } from "react";
import Card from "./components/Card";
import { Container, Row, Col } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import Alert from "./components/Alert";
import Score from "./components/Score";
import office from "./cards.json";
import Header from "./components/Header";
import './App.css'

class App extends Component {
    // this handles state of cards along with scores and game logic
    state = {
        highScore: 0,
        office: office,
        pickedCards: [],
        alertMessage: ""
    };

    handlePicked = (event) => {
        const name = event.target.attributes.name.value;
        console.log(event.target.attributes.name.value)
        this.shuffleOffice()
        this.endGame(name, this.newHighScore)
    } 
    
     shuffleOffice = () => {
        this.setState({ [office] : this.shuffleArr(this.state.office)})
    }

    shuffleArr = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
        }
        return a;
      }
      //if a user picks the same card/office char... the game will display a message and reset the game 
      //Otherwise, character picked will update to arr to track score
      //display winner message if they picked all cards
    endGame = (name, result) => {
      const newState = {...this.state};
      if(newState.pickedCards.includes(name)) {
          newState.alertMessage = `Oh No! you picked "${name}" already!`
          this.setState({ alertMessage: newState.alertMessage})
          console.log(newState.alertMessage)
          newState.pickedCards.length = 0
          this.setState({ [this.state] : newState})
      } else {
          newState.pickedCards.push(name)
          console.log(newState.pickedCards)
          newState.alertMessage = `Great Job!`
          this.setState({ alertMessage: newState.alertMessage})
          this.setState({ [this.state] : newState})
      }
      result(newState, this.resultWinner)
    }
   
    newHighScore = (newState, result) => {
        if(newState.pickedCards.length > newState.highScore) {
            newState.highScore++
            console.log(newState.highScore)  
            this.setState(this.state = newState)
        }
        result(newState)
    }

    resultWinner = (newState) => {
        if(newState.pickedCards.length === 16) {
            newState.alertMessage = "Office Winner!"
            newState.pickedCards = []
            this.setState({ [this.state] : newState})

        }
    }


    render() {
        return (
            <div className="background">
                
                <Container>
                    <Row>
                    <Col size="md-12">
                        <Header>
                        <Jumbotron />
                        <div className="d-flex justify-content-end">
                            <Col size="md-2">
                            <Score type="Score" score={this.state.pickedCards.length}/>
                            </Col>
                            
                            <Col size="md-3">
                             <Score type="High Score" score={this.state.highScore}/>   
                            </Col>
                            
                        </div>

                        <div className="d-flex justify-content-center">

                        <Alert message={this.state.alertMessage} />
                        </div>
                    </Header>
                    </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            {this.state.office.map(card => (
                                <Card handlePicked={this.handlePicked}
                                      name={card.name}
                                      id={card.id}
                                      key={card.id}
                                      image={card.image}

                                />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default App;