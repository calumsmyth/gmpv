const PeriChickenHalloumi = () => {
    return(
        <>
            <div id="peri-chicken-halloumi" className="flex flex-col gap-10 p-4">
                <div id="page-title" className="flex justify-center items-center text-2xl">
                    <h1 className= "p-4 h-full">Peri-Peri Chicken Halloumi</h1>
                </ div>

                <div id="ingredients" className="flex flex-col">
                    <h2 className="">Ingredients</h2>
                        <ul className="list-disc pl-4">
                            <li>600g Chicken Thighs</li>
                            <li>1 Red Pepper</li>
                            <li>1/2 onion</li>
                            <li>3 Garlic Cloves</li>
                            <li>1-2 Tablespoons Peri-Peri Seasoning - More seasoning = more spice</li>
                            <li>2 Tablespoons Tomato Puree</li>
                            <li>1 Tablespoon Paprika</li>
                            <li>400ml Diced Tomatoes</li>
                            <li>1 Chicken Stock Pot</li>
                            <li>Mixed vegetables</li>
                            <li>1 Cup Uncooked Rice</li>
                            <li>2-3 Tablespoons of Peri-Peri Mayonase</li>
                            <li>1 chopped Jalepeno (Optional)</li>
                            <li>150g fried Halloumi (Optional)</li>
                        </ul>
                </div>

                <div className="steps">
                    <h2>Steps</h2>
                        <ol className="list-decimal list-inside">
                            <li>Fry chicken on medium-high heat with onion, garlic, red pepper and stir through peri-peri seasoning and paprika. Fry for approximately 8 minutes. Ensuring chicken is cooked throughout.</li>
                            <li>Add uncooked rice and tomatoe puree to the pan and stir until mixed. Fry for a couple more minutes until you can smell the rice.</li>
                            <li>Add chopped tomatoes and chicken stock to pan and stir together. Reduced heat on pan to a simmer. Leave to simmer until rice is cooked, rice packaging will often provide information on how long you can expect this to take.</li>
                            <li>Add and stir through mixed vegetables.</li>
                            <li>(Optional) If you are adding fried Halloumi and/or Jalepeno you can either top with these to serve, or mix them through.</li>
                            <li>Either top with Peri-Peri mayonase to serve, or mix through.</li>
                            <li>Serve and Enjoy!</li>
                        </ol>
                </div>
            </div>
        </>
    )
}

export default PeriChickenHalloumi;