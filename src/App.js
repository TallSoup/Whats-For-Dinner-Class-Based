import { Component } from 'react';
import Form from './Components/Form';
import Suggestions from './Components/Suggestions';
import AddedIngredients from './Components/AddedIngredients';
import Recipes from './Components/Recipes';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedIngredients: [],
      recipes: undefined,
      random: undefined,
    };
  }

  addIngredient(ingredient) {
    if (this.state.selectedIngredients.includes(ingredient)) {
      return;
    } else {
      this.setState((prev) => {
        return {
          selectedIngredients: [...prev.selectedIngredients, ingredient],
        };
      });
    }
  }

  deleteIngredient(ingredient) {
    if (this.state.selectedIngredients.includes(ingredient)) {
      let newIngredients = this.state.selectedIngredients.filter(
        (item) => item !== ingredient
      );
      this.setState({ selectedIngredients: newIngredients });
    }
  }

  reset() {
    this.setState({ selectedIngredients: [] });
  }

  search() {
    if (this.state.selectedIngredients.length > 0) {
      const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
        process.env.REACT_APP_API
      }&ingredients=${this.state.selectedIngredients.toString()}&ranking=2&ignorePantry=true&number=12`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({ recipes: data }));
      this.setState({ random: false });
    }
  }

  componentDidMount() {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=12`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ recipes: data.recipes }));
    this.setState({ random: true });
  }

  render() {
    return (
      <div className='container text-center pb-5'>
        <h1 className='mt-5'>What's For Dinner?</h1>
        <p>
          With Class-Based Components. See Functional Components{' '}
          <a href='https://effulgent-bunny-bbabbb.netlify.app/'>Here</a>.
        </p>
        <div className='border border-2 border-white rounded-3 m-4 p-5'>
          <Form addIngredient={this.addIngredient.bind(this)} />
          <Suggestions addIngredient={this.addIngredient.bind(this)} />
          <AddedIngredients
            ingredients={this.state.selectedIngredients}
            delete={this.deleteIngredient.bind(this)}
          />
          {this.state.selectedIngredients.length > 0 ? (
            <>
              <button
                className='btn btn-secondary btn-sm rounded-pill m-1'
                onClick={this.reset.bind(this)}
              >
                reset ingredients
              </button>
              <p className='mt-2'>click individual ingredients to delete</p>
            </>
          ) : (
            ''
          )}
          <div className='mt-4'>
            <button
              className='btn btn-lg btn-success rounded-pill m-1'
              onClick={this.search.bind(this)}
            >
              LET'S COOK!
            </button>
          </div>
        </div>
        {this.state.random ? (
          <h3>Random Recipes</h3>
        ) : (
          <h3>Recipes You Can Make</h3>
        )}
        <Recipes recipes={this.state.recipes} />

        <Footer />
      </div>
    );
  }
}

// function App() {
//   const [selectedIngredients, setSelectedIngredients] = useState([]);
//   const [recipes, setRecipes] = useState();
//   const [random, setRandom] = useState();

//   const addIngredient = (ingredient) => {
//     if (selectedIngredients.includes(ingredient)) {
//       return;
//     } else {
//       setSelectedIngredients((prev) => {
//         return [...prev, ingredient];
//       });
//     }
//   };

//   const deleteIngredient = (ingredient) => {
//     if (selectedIngredients.includes(ingredient)) {
//       let newIngredients = selectedIngredients.filter(
//         (item) => item !== ingredient
//       );
//       setSelectedIngredients(newIngredients);
//     }
//   };

//   const reset = () => {
//     setSelectedIngredients([]);
//   };

//   const search = () => {
//     if (selectedIngredients.length > 0) {
//       const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${
//         process.env.REACT_APP_API
//       }&ingredients=${selectedIngredients.toString()}&ranking=2&ignorePantry=true&number=12`;

//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => setRecipes(data));
//       setRandom(false);
//     }
//   };

//   useEffect(() => {
//     const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=12`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setRecipes(data.recipes));
//     setRandom(true);
//   }, []);

//   return (
//     <div className='container text-center pb-5'>
//       <h1 className='mt-5'>What's For Dinner?</h1>
//       <div className='border border-2 border-white rounded-3 m-4 p-5'>
//         <Form addIngredient={addIngredient} />
//         <Suggestions addIngredient={addIngredient} />
//         <AddedIngredients
//           ingredients={selectedIngredients}
//           delete={deleteIngredient}
//         />
//         {selectedIngredients.length > 0 ? (
//           <>
//             <button
//               className='btn btn-secondary btn-sm rounded-pill m-1'
//               onClick={reset}
//             >
//               reset ingredients
//             </button>
//             <p className='mt-2'>click individual ingredients to delete</p>
//           </>
//         ) : (
//           ''
//         )}
//         <div className='mt-4'>
//           <button
//             className='btn btn-lg btn-success rounded-pill m-1'
//             onClick={search}
//           >
//             LET'S COOK!
//           </button>
//         </div>
//       </div>
//       {random ? <h3>Random Recipes</h3> : <h3>Recipes You Can Make</h3>}
//       <Recipes recipes={recipes} />

//       <Footer />
//     </div>
//   );
// }

export default App;
