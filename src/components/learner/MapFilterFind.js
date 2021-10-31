import React from "react";

const MapFilterFind = () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const squares = numbers.map((item) => {return item * item});
    const even = numbers.filter(item => item % 2 === 0);
    const odd = numbers.filter(item => {return item % 2 !== 0});
    const four = numbers.find((item) => {return item === 4});
    const foursIndex = numbers.findIndex((item) => {return item === 4});
    const huo = ['gx','cu','hs','ee','dp'];
    const ewq = [28,107,26,65,95];
    const eia = [97,77,87,13,11];




    return(
        <div>
            <h2>Map exam</h2>

            <h2>Option 1</h2>


            <ul>
                {
                    huo.map(hsl => <li>{hsl}</li>)
                }
            </ul>


            <h2>Option 4</h2>


            <ul>
                {
                    huo.map(hsl => {
                            return <li>{hsl}</li>
                        }
                    )
                }
            </ul>



            <h2>EWQ</h2>


            <h2> Option 1</h2>
            <ul>
                {
                    ewq.filter(
                        function(dsa){
                            return dsa > 50
                        })
                        .map(
                            function(rew) {
                                return(
                                    <li>{rew}</li>
                                )
                            })
                }
            </ul>

            <h2> Option 2</h2>


            <ul>
                {
                    ewq.filter(dsa => dsa > 50).map(rew =>
                        <li>{rew}</li>
                    )
                }
            </ul>


            <h2> Option 3</h2>

            <ul>
                {
                    ewq.map(dsa => dsa > 50).filter(rew =>
                        <li>{rew}</li>
                    )
                }
            </ul>


            <h2> Option 4</h2>


            <ul>
                {
                    ewq.map(rew =>
                        <li>{rew}</li>
                    ).filter(dsa => dsa > 50)
                }
            </ul>


            <h2>EIA</h2>


            <h2> Option 1</h2>
            <ul>
                {
                    eia.filter(noo => noo > 59).map(qmf =>
                        <li>{qmf}</li>
                    )
                }
            </ul>

            <h2> Option 2</h2>


            <ul>
                {
                    eia.map(qmf =>
                        <li>{qmf}</li>
                    ).filter(noo => noo > 59)
                }
            </ul>


            <h2> Option 3</h2>

            <ul>
                {
                    eia.map(noo => noo > 59).filter(qmf =>
                        <li>{qmf}</li>
                    )
                }
            </ul>


            <h2> Option 4</h2>


            <ul>
                {
                    eia.filter(
                        function(noo){
                            return noo > 59
                        })
                        .map(
                            function(qmf) {
                                return(
                                    <li>{qmf}</li>
                                )
                            })
                }
            </ul>


            <h2>Map Filter Find examples</h2>
            <ul>
                <li>numbers: {JSON.stringify(numbers)}</li>
                <li>squares: {JSON.stringify(squares)}</li>
                <li>even: {JSON.stringify(even)}</li>
                <li>odd: {JSON.stringify(odd)}</li>
                <li>four: {JSON.stringify(four)}</li>
                <li>foursIndex: {JSON.stringify(foursIndex)}</li>
            </ul>
        </div>
    );
}

export default MapFilterFind;