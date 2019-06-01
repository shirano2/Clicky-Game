# Clicky-Game

This app is the game using the set of cards of Simpsons characters.

If you want to get score, then you have to click a picture that you haven't clicked yet. 

After you click a card, cards are automatically suffled. 

If you click the cards 15 times without failure, you win!


## Site
https://shirano2.github.io/clicky-game/


### Technologies Used

* HTML5
* CSS3
* Javascript
* React.js


### Card Shuffle 

```
shuffle=id=>{
    this.checkClick(id);
    this.setState({
      simpsons : this.state.simpsons.sort(()=>Math.random()-0.5)
    });
}
```


### Creator
This is made by Minseok Choi (https://github.com/shirano2)
