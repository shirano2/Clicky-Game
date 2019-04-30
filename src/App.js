import React from "react";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import SimpsonsCard from "./components/SimpsonsCard";
import simpsons from "./simpsons.json";

class App extends React.Component {

  state = {
    simpsons,
    score:0,
    maxScore:0
  };

  checkClick=id=>{
    this.state.simpsons.map(simpson => {
      if(simpson.id===id) {
        if(simpson.clicked==="false") {
          simpson.clicked="true";
          const checkScore=this.state.score+1;
          this.setState({score:checkScore});
          if(this.state.maxScore<checkScore) {
            this.setState({maxScore:checkScore});
          }
          if(checkScore===this.state.simpsons.length) {
            this.gameOver("win");
          }
        } else {
          this.gameOver();
        }
      }
      return true;
    });
  }

  shuffle=id=>{
    this.checkClick(id);
    this.setState({
      simpsons : this.state.simpsons.sort(()=>Math.random()-0.5)
    });
  }

  gameOver=text=>{
    if(text===undefined) {
      alert("Try again!");
    } else {
      alert("You Win!");
    }
    this.state.simpsons.map(simpson => simpson.clicked="false");
    this.setState({
      score:0
     });
  }
 
  render() {
    return (
      <div>
      <Nav score={this.state.score} maxScore={this.state.maxScore}/>
      <Wrapper>
        {this.state.simpsons.map(simpson => (
          <SimpsonsCard
            shuffle={this.shuffle}
            id={simpson.id}
            key={simpson.id}
            image={simpson.image}
            name={simpson.name}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
