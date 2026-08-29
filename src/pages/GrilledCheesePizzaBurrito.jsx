const GrilledCheesePizzaBurrito = () => {
    return (
        <>
            <div id="GrilledCheesePizzaBurrito" className="flex flex-col gap-10 p-4">
                <div id="page-title" className="flex justify-center items-center text-2xl">
                    <h1 className= "p-4 h-full">Grilled Cheese Pizza Burrito</h1>
                </ div>

                <div id="ingredients" className="flex flex-col">
                    <h2 className="">Ingredients</h2>
                        <ul className="list-disc pl-4">
                            <li>500g 10% fat Beef Mince</li>
                            <li>70g Low fat Pepperoni slices(You can swap out this item for your favourite pizza topping, weights will vary)</li>
                            <li>1 Clove of Garlic</li>
                            <li>50g Light Soft Cheese</li>
                            <li>100g Passata</li>
                            <li>10g Parmesan Cheese</li>
                            <li>Mozzorella to taste</li>
                            <li>30ml of hot sauce, or any topping sauce of your choice. Volumes may vary (optional)</li>
                            <li>5 High Protien Wraps</li>                            
                            <br />
                            <li>1 Tablespoon of Salt</li>
                            <li>1 Tablespoon of Oregano</li>
                            <li>1.5 Tablespoons of Onion Powder</li>
                            <li>2 Tabelespoons of Garlic</li>
                        </ul>
                </div>

                <div className="steps">
                    <h2>Steps</h2>
                        <ol className="list-decimal list-inside">
                            <li>Chop Pepperoni into quaters and fry in a large pan, on a medium-high heat until crispy</li>
                            <li>Once crispy, remove the Pepperoni from the pan and set aside, but leave the remaining juice in the pan</li>
                            <li>Add beef to the same pan as the Pepperoni. Add salt, oregano, onion powder and 1.5tbsp of garlic. Mix well and fry beef on medium-high heat</li>
                            <li>When browned, addcream cheese, Passata, hot sauce and 1/2 tbsp of garlic. Mix until creamy</li>
                            <li>When mixed, add Pamesan cheese and Pepperoni to the beef and mix.</li>
                            <li>Warm tortillas and add beef mixture into them, with a sprinkle of Mozzorella.</li>
                            <li>Wrap the tortillas around the mixture. Sprinkle a pinch of Mozzorella into a pan and fry the burritos until golden brown to seal them. Turning after appoximately 2 mins</li>
                        </ol>
                </div>
            </div>
        </>
    )
}

export default GrilledCheesePizzaBurrito;