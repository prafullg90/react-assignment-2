import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';
import CharComponents from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text : null,
    length : 0,
    charArrayLength : 0,
    char: []
  }

  inputChangeHandler = (event) =>{
    let textLength = (event.target.value).length;
    let charArray = (event.target.value).split(" ");
    let charArrayLengthNew = (event.target.value).split(" ").length;
    //let charArrayFromState = [...this.state.char]

    this.setState({text : event.target.value,
      length: textLength,
      charArrayLength :charArrayLengthNew,
      char: charArray });
  }

  deletePersonHandler = (personIndex) => {
    console.log('tapped', personIndex);
    const chars = [...this.state.char];
    chars.splice(personIndex, 1);
    let newText = chars.join(' ');
    let textLength = newText.length;
    let charArrayLengthNew = newText.split(" ").length;

    this.setState({text : newText,
      length : textLength,
      charArrayLength : charArrayLengthNew,
      char : chars,
      })

  }

  render() {

    let charCompo = null;
    if(this.state.charArrayLength > 0){
      charCompo = (<ul>
             {this.state.char.map((c ,index) =>{
               return( <CharComponents 
                key={index} 
                click={() => this.deletePersonHandler(index)}
                value={c}/>)
             } )}
          </ul>
      );
    }
    
    return (
      <div className="App">
        <h3> React Second Assignment</h3>

        <div className="firstCard">
        <UserInput text={this.state.text} length={this.state.length} change={this.inputChangeHandler} />
        <Validation length={this.state.length} />
        </div>

        <div className="listComponenet">
        {charCompo}
        </div>

      </div>
    );
  }
}

export default App;
