import React, {Component} from 'react';

import Banner from './Components/Banner';

import Tools from './Components/Tools';
import Board from './Components/Board';
import _ from 'lodash';
import GameInfo from './Components/GameInfo';
import NewGame from './Components/Controls/NewGame';
import ConsoleRight from './Components/ConsoleRight';

import './index.css';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props);

    // cellValues = [ 5,5,5,5,5,5,5,5,5,5,5,5,5,5, .... 5  ]
    // cellsBackgroundColors = [ "bg-white" , "bg-white" , "bg-white" , "bg-white" , "bg-white" , "bg-white" , "bg-white" ,  .....   ]

    this.NewGame = new NewGame();

    this.state = {
      cellValues: new Array(81).fill('5'),
      cellsBackgroundColors: new Array(81).fill('bg-white'),
      gameLevel: null,
      complexityLevel: null,
      countEmptyCells: null,
      complexityLog: 1,

      consoleMessage: 'First Message',
      numberOfSolved: 0,

      messageBoxBelow: ':)',
    };
  }

  handleChange = () => {};

  resetColors = () => {
    const colors = new Array(81).fill('bg-white');
    this.setState({cellsBackgroundColors: [...colors]});
  };

  makeCoral = () => {
    const colors = new Array(81).fill('bg-coral');
    this.setState({cellsBackgroundColors: [...colors]});
  };

  loadAnewGame = () => {
    let gameObj = this.NewGame.getFirstValue();
    let level = gameObj.level;

    console.log(' gameObj  ', gameObj);

    console.log('gameObj.str  ', gameObj.str);

    let newArr = gameObj.str.split(';');
    newArr.pop();

    console.log('newArr ', newArr);

    this.setState({cellValues: [...newArr], gameLevel: level});
    // this.setState({ cellValues: [ ] });

    this.resetColors();

    // it will get a string value from Engine.js game String
    //  var str = "5,,,1,,8,,,9,,,,6,,,,,2,,,2,,5,,,,6";

    //const cells  = new Array(81).fill(  _.sample( [1,2,3,4,5,6,7,8,9] )    ) ;
    //  this.setState( { cellValues : [...cells ] }) ;
  };

  handleShowFound = () => {
    console.log(' handleShowFound ');
  };

  sendConsole = () => {
    console.log(' sendConsole ');
  };

  solve = () => {
    console.log('Solve ');
  };
  stop = () => {
    console.log('stop ');

    this.makeCoral();
  };

  newGame = () => {
    console.log('newGame');
    this.loadAnewGame();
  };
  deleteGame = () => {
    const newArr = new Array(81).fill(''); // [ "NewValue" , "NewValue" , "NewValue" , ]
    this.setState({cellValues: [...newArr]});
    this.resetColors();
  };

  getThisAsStr = () => {
    console.log('getThisAsStr');
    let cValues = [...this.state.cellValues];

    let str = '';

    cValues.map(element => {
      // "2" => 2
      if (parseInt(element) > 0) {
        str = str + element + ';';
      } else {
        str = str + ';';
      }
    });

    this.setState({messageBoxBelow: str});
  };
  goBackT = () => {
    console.log('goBackT');
  };

  componentDidMount() {
    this.loadAnewGame();
  }
  getYear() {
    return new Date().getFullYear();
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div>
          <section className='hero is-fullheight'>
            <div className='container is-fluid'>
              <Banner />

              <div className='container'>
                <Tools
                  solve={this.solve}
                  stop={this.stop}
                  newGame={this.newGame}
                  deleteGame={this.deleteGame}
                  getThisAsStr={this.getThisAsStr}
                  goBackT={this.goBackT}
                />
              </div>
              <div className='container'>
                <div className='columns'>
                  <div className='column'>
                    <Board
                      handleChange={this.handleChange}
                      handleFocus={this.handleFocus}
                      cellValues={this.state.cellValues}
                      cellsBackgroundColors={this.state.cellsBackgroundColors}
                    />
                  </div>
                  {/* Game Info */}
                  <div className='column'>
                    <GameInfo
                      gameLevel={this.state.gameLevel}
                      complexityLevel={this.state.complexityLevel}
                      countEmptyCells={this.state.countEmptyCells}
                      complexityLog={this.state.complexityLog}
                    />
                  </div>
                  <div className='column'>
                    <div className='columns'>
                      <div className='row'>
                        {/* Analysis of the Game
                         Number of solved 
                        */}
                        <div className='column'>
                          <ConsoleRight
                            consoleMessage={this.state.consoleMessage}
                            numberOfSolved={this.state.numberOfSolved}
                            showFound={this.handleShowFound}
                            sendConsole={this.sendConsole}
                          />
                        </div>

                        {/* Input box */}
                        <div className='column'>
                          <input
                            className='button is-large'
                            readOnly
                            id='messageBoxBelow'
                            value={this.state.messageBoxBelow}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className='footer'>
              <div className='content has-text-centered'>
                <p>Sudoku game with React {this.getYear()}</p>
              </div>
            </footer>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
