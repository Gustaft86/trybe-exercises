import React from 'react';
import './App.css';

// /* Embora isso funcione, essa DEFINITIVAMENTE
// não é a maneira correta de se criar eventos
// em React! A função se refere ao componente,
// então deve ser parte de sua classe! */
// function handleClick1() {
//   console.log('Clicou no botão 1!')
// }
// function handleClick2() {
//   console.log('Clicou no botão 2!')
// }
// function handleClick3() {
//   console.log('Clicou no botão 3!')
// }

// class App extends React.Component {
//   /* Repare que, diferentemente do HTML, no
//   JSX você associa uma função a um evento
//   passando a própria função entre chaves `{}` */
//   render() {
//     return (
//       <section>
//         <button onClick={handleClick1}>Meu botão 1</button>
//         <button onClick={handleClick2}>Meu botão 2</button>
//         <button onClick={handleClick3}>Meu botão 3</button>
//       </section>
//     );
//   }
// }


// class App extends React.Component {
//   constructor() {
//     super()
//     this.handleClick1 = this.handleClick1.bind(this);
//     this.handleClick2 = this.handleClick2.bind(this);
//     this.handleClick3 = this.handleClick3.bind(this);
//     console.log('Componente sendo construído')
//   }

//   handleClick1() {
//     console.log('handle1',this);
//     console.log('Clicou no botão 1!')
//   }
//   handleClick2() {
//     console.log('handle2',this);
//     console.log('Clicou no botão 2!')
//   }
//   handleClick3() {
//     console.log('handle3', this);
//     console.log('Clicou no botão 3!')
//   }

//   render() {
//     console.log(this)
//     return (
//       <section>
//         <button onClick={this.handleClick1}>Meu botão 1</button>
//         <button onClick={this.handleClick2}>Meu botão 2</button>
//         <button onClick={this.handleClick3}>Meu botão 3</button>
//       </section>
//     );
//   }
// }

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  handleClick1() {
    console.log('Clicou no botão 1!')
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
    console.log(this);
  }
  handleClick2() {
    console.log('Clicou no botão 2!')
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
    console.log(this);
  }
  handleClick3() {
    console.log('Clicou no botão 3!')
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
    console.log(this);
  }

  render() {
    return (
      <section>
        <button onClick={this.handleClick1}>Meu botão 1 - Ocorrências: {this.state.numeroDeCliques1}</button>
        <button onClick={this.handleClick2}>Meu botão 2 - Ocorrências: {this.state.numeroDeCliques2}</button>
        <button onClick={this.handleClick3}>Meu botão 3 - Ocorrências: {this.state.numeroDeCliques3}</button>
      </section>
    );
  }
}

export default App;