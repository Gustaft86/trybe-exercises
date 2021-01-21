import React from 'react';

class Button extends React.Component {
  render() {
    /* A função que altera o estado do componente pai chega
       ao componente filho via `props`! */
    const { handleClick } = this.props;

    return (
    <button 
      type="button" 
      onClick={handleClick}>
      Contar clique!
    </button>);
  }
}

export default Button;