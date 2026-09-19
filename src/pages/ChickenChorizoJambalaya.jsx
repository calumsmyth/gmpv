const ChickenChorizoJambalaya = () => {
    return (
        <>
            <div id="chicken-chorizo-jambalaya" className="flex flex-col gap-10 p-4">
                <div id="page-title" className="flex justify-center items-center text-2xl">
                    <h1 className= "p-4 h-full">Chicken Chorizo Jambalaya</h1>
                </ div>

                <div id="ingredients" className="flex flex-col">
                    <h2 className="">Ingredients</h2>
                        <ul className="list-disc pl-4">
                            <li>1 Tablespoon Olive Oil</li>
                            <li>2 Chopped Chicken Breasts</li>
                            <li>75g Sliced Chorizo</li>
                            <li>400g Can Plum Tomatoe</li>
                            <li>1 Diced Onion</li>
                            <li>1 Thinly Sliced Red Pepper</li>
                            <li>2 Crushed Garlic Cloves</li>            
                            <li>1 Tablespoon Cajun Seasoning</li>
                            <li>250g Long Grain Rice</li>
                            <li>350ml Chicken Stock</li>
                        </ul>
                </div>

                <div className="steps">
                    <h2>Steps</h2>
                        <ol className="list-decimal list-inside">
                            <li>Heat olive oil in a large frying pan and brown chopped chicken breasts for about 5-8 mins until golden.</li>
                            <li>Remove chicken and set it aside. Add in onions and cook for furhter 3-4 mins until soft.</li>
                            <li>Add red pepper, garlic, Chorizo and Cajun seasoning. Cook for further 5 mins.</li>
                            <li>Add chicken back in with rice. Add tomatoes and chicken stock. Cover and let simmer for approximately 20-25 mins until rice is tender and appears cooked.</li>
                            <li>Serve and Enjoy!</li>
                        </ol>
                </div>
            </div>
        </>
    )
}

export default ChickenChorizoJambalaya;