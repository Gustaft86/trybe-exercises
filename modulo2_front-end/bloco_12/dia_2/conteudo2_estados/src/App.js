import React from 'react';
import Button from './Button'

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);

    // O componente pai é o dono do estado!
    this.state = {
      numeroDeCliques: 0,
    };
  }

  /* A função de alterar o estado é definida no componente pai*/
  handleClick(event) {
    console.log(event);
    this.setState((estadoAnterior) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  /* O componente filho recebe a função de alterar estado do pai via `props`,
     na forma de uma callback */
  render() {
    return (
      <div>
        <h1>{`${this.state.numeroDeCliques} cliques!`}</h1>
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App
