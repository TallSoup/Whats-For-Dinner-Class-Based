import { Component } from 'react';
import RecipeCard from './RecipeCard';

class Recipes extends Component {
  render() {
    if (this.props.recipes) {
      return (
        <div className='row'>
          {this.props.recipes.map((recipe, i) => (
            <RecipeCard key={i} recipe={recipe} />
          ))}
        </div>
      );
    }
  }
}

// const Recipes = (props) => {
//   if (props.recipes) {
//     return (
//       <>
//         <div className='row'>
//           {props.recipes.map((recipe, i) => (
//             <RecipeCard key={i} recipe={recipe} />
//           ))}
//         </div>
//       </>
//     );
//   }
// };

export default Recipes;
