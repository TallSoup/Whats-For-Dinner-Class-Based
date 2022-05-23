import { Component } from 'react';

class AddedIngredients extends Component {
  clickHandler = (event) => {
    event.preventDefault();
    this.props.delete(event.target.value);
  };

  render() {
    if (this.props.ingredients.length > 0) {
      return (
        <>
          <h3>My Ingredients</h3>
          {this.props.ingredients.map((ingredient, i) => (
            <button
              key={i}
              onClick={this.clickHandler.bind(this)}
              type='button'
              className='btn btn-light rounded-pill m-2'
              value={ingredient}
            >
              {ingredient}
            </button>
          ))}
        </>
      );
    } else {
      return <p>add ingredients to begin</p>;
    }
  }
}

// const AddedIngredients = (props) => {
//   const clickHandler = (event) => {
//     event.preventDefault();
//     props.delete(event.target.value);
//   };

//   if (props.ingredients.length > 0) {
//     return (
//       <>
//         <h3>My Ingredients</h3>
//         {props.ingredients.map((ingredient, i) => (
//           <button
//             key={i}
//             onClick={clickHandler}
//             type='button'
//             className='btn btn-light rounded-pill m-2'
//             value={ingredient}
//           >
//             {ingredient}
//           </button>
//         ))}
//       </>
//     );
//   } else {
//     return <p>add ingredients to begin</p>;
//   }
// };

export default AddedIngredients;
