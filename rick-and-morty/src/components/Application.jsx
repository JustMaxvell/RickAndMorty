import React from "react";
import { CSSTransition } from "react-transition-group";

import "./Application.css";

export class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _data: this.props.chars,
      chars: this.props.chars,
      episode: "",
      fade: false,
    };
    this.episoderValue = React.createRef();
  }

  componentDidMount() {
    this.setState({
      fade: true,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  isValidSimbol = simbol => simbol>0 && simbol<=9;

  updateChars = () => {
    if (this.episoderValue.current.value) {
      this.setState({
        chars: this.state._data.filter( char => char.episode.some( el => el.includes(this.episoderValue.current.value)))
      })
    } else {
      this.setState({
        chars: this.state._data
      })
    }
  }
  
  render() {
    return (
      <div className="App">
        <div className="chars">
          {this.state.chars.map((char, index) => (
            <CSSTransition
              key={char.id}
              in={this.state.fade}
              timeout={200}
              classNames="fade"
            >
              <div
                className="chars__char"
                style={{
                  background: `url(${char.image}) no-repeat center center / cover`,
                }}
              >
                <div className="chars__char__id">{char.id}</div>
                <div className="chars__char__name">{char.name}</div>
                <div className="chars__char__status">{char.status}</div>
                <div className="chars__char__white-plank"></div>
              </div>
            </CSSTransition>
          ))}
        </div>
        <input
          className="episoder"
          tupe="text"
          placeholder="Episode"
          name="episode"
          value={this.state.episode}
          ref={this.episoderValue}
          onChange={this.handleChange}
          onKeyPress={ e => { 
            if (!this.isValidSimbol(e.key)) {
              e.preventDefault();
              alert('Please, write some number');
            } 
          }
        }
        />
        <button className="button-of-death" type="button" onClick={this.updateChars}>SHOW ME WHO STILL ALIVE!!!</button>
      </div>
    );
  }
}
