import HamburgerMenu from './HamburgerMenu';
import { useState } from "react";
import { Link } from "react-router-dom";
import recipes from '../data/recipes';

const Header = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
    };

    const filteredRecipes = recipes.filter(
        (recipe) => recipe.tags.includes(selectedCategory)
    );

    return (
        <header className = "header relative text-white px-8 py-4 flex flex-col lg:flex-row justify-between items-center gap-4 border-b-2 border-gray-300">
            <h1 className= "page-name text-emerald-900 text-left text-3xl">Gym Meal Prep</h1>
            <div className ="search-category flex items-center gap-4 lg:absolute lg:left-1/2 lg:-translate-x-1/2 sm:flex-col sm:gap-4">
                <section className = "categories text-emerald-900 text-xl flex gap-6">
                    <button onClick={() => handleCategoryClick("Chicken")}>Chicken</button>
                    <button onClick={() => handleCategoryClick("Beef")}>Beef</button>
                    <button onClick={() => handleCategoryClick("Pork")}>Pork</button>
                    <button onClick={() => handleCategoryClick("Vegetarian")}>Vegetarian</button>
                </section>
            </div>

      {selectedCategory && (
        <div className="recipe-dropdown">
          {filteredRecipes.map((recipe) => (
            <Link
              key={recipe.path}
              to={recipe.path}
              className="recipe-dropdown-link"
              onClick={() => setSelectedCategory(null)}
            >
              {recipe.name}
            </Link>
          ))}
        </div>
                )}
            <HamburgerMenu />
        </header>
    )
};


export default Header;