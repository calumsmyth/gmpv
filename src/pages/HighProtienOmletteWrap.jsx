const HighProtienOmletteWrap = () => {
    return (
        <>
            <div id="high-protien-omlette-wrap" className="flex flex-col gap-10 p-4">
                <div id="page-title" className="flex justify-center items-center text-2xl">
                    <h1 className= "p-4 h-full">High Protein Omlette Wrap</h1>
                </ div>

                <div id="ingredients" className="flex flex-col">
                    <h2 className="">Ingredients</h2>
                        <ul className="list-disc pl-4">
                            <li>Knob of Butter</li>
                            <li>2 Eggs</li>
                            <li>1 Slice of Ham, Shredded</li>
                            <li>Grated cheese</li>
                            <li>Splash of Milk/ Cream</li>
                            <li>Pinch of salt</li>
                            <li>Pinch of Pepper</li>            
                            <li>High Protein Wrap</li>
                            <li>Brown Sauce (Or sauce of personal choice)</li>
                        </ul>
                </div>

                <div className="steps">
                    <h2>Steps</h2>
                        <ol className="list-decimal list-inside">
                            <li>Crack eggs into a bowl, add salt and pepper and whisk. Once mixed, add milk/cream, ham and cheese and whisk once more.</li>
                            <li>Add butter to a frying pan and heat on medium-high heat. Once pan is hot, add egg mixture to cover bottom of pan. Cook until underside begins to turn dark brown, using a spatular to lift edges and monitor progress. Once underside starts browning, flip onto other side. </li>
                            <li>Heat wrap in the microwave for approximately 10-15 seconds, or follow instructions on package. Apply brown sauce to topside of wrap. </li>
                            <li>Once the otherside of the omlette is cooked, place from pan onto wrap. Fold both sides in towards the center before folding bottom upwards.</li>
                            <li>Serve and Enjoy!</li>
                        </ol>
                </div>
            </div>
        </>
    )
}

export default HighProtienOmletteWrap;