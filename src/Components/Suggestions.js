import { Component } from 'react';

class Suggestions extends Component {
  sampleIngredients = [
    'egg',
    'apple',
    'pasta',
    'onion',
    'red pepper',
    'milk',
    'peanut butter',
  ];
  clickHandler(event) {
    const ingredient = event.target.value;
    event.preventDefault();
    this.props.addIngredient(ingredient);
  }

  render() {
    return (
      <>
        <h3 className='mt-3'>Suggestions</h3>
        <ul>
          {this.sampleIngredients.map((ingredient, i) => (
            <button
              className='btn btn-light rounded-pill m-2'
              value={ingredient}
              key={i}
              onClick={this.clickHandler.bind(this)}
            >
              {ingredient}
            </button>
          ))}
        </ul>
      </>
    );
  }
}

// const Suggestions = (props) => {
//   const sampleIngredients = [
//     'egg',
//     'apple',
//     'pasta',
//     'onion',
//     'red pepper',
//     'milk',
//     'peanut butter',
//   ];
//   const clickHandler = (event) => {
//     const ingredient = event.target.value;
//     event.preventDefault();
//     props.addIngredient(ingredient);
//   };

//   return (
//     <>
//       <h3 className='mt-3'>Suggestions</h3>
//       <ul>
//         {sampleIngredients.map((ingredient, i) => (
//           <button
//             className='btn btn-light rounded-pill m-2'
//             value={ingredient}
//             key={i}
//             onClick={clickHandler}
//           >
//             {ingredient}
//           </button>
//         ))}
//       </ul>
//     </>
//   );
// };

export default Suggestions;
