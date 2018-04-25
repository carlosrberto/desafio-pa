import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import api from './api';
import Button from './Button.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      list: [],
      error: '',
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      clicked: true,
    })
    api.developers().then(response => {
      this.setState({
        clicked: false,
        list: response.items,
        error: '',
      })

    }).catch(error => {
      this.setState({
        clicked: false,
        list: [],
        error: error.error
      })
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.list &&
            this.state.list.map(function(item) {
              return <li>{item.name}  -  {item.job}</li>;
            })}
        </ul>
        <p style={{color: 'red'}}>
            {this.state.error}
        </p>
       <Button status={this.state.clicked} onClick={this.onClick} />
      </div>
    );
  }
}


// dom


const button = document.createElement('button');
const list = document.createElement('ul');
const p = document.createElement('p');

p.style.color = 'red';

button.innerText = 'Carregar 2';

button.addEventListener('click', () => {
  list.innerHTML = '';
  button.innerText = 'Carregando...';
  p.innerText = '';
  api.developers().then(r => {
    button.innerText = 'Carregar 2';
    r.items.forEach((item) => {
      const text = document.createTextNode(`${item.name} - ${item.job}`);
      const li = document.createElement('li');
      li.appendChild(text);

      list.appendChild(li);
    });
  }).catch(e => {
    button.innerText = 'Carregar 2';
    p.innerText = e.error;
  });
});

window.onload = () => {
  const dom = document.getElementById('dom');
  dom.appendChild(list);
  dom.appendChild(p);
  dom.appendChild(button);
}


export default App;
