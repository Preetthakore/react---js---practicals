import React from 'react';
function Map1(){
    const arr=[1,2,3,4,5,6,7,8,9];
    return (
        <div>
            <h1>example of mapping</h1>
            {
                arr.filter((value)=>


                    {
                        if(value<=6){
                        return <h2>array values={value}</h2>
                        }
                    }
                
                )
            }
        </div>
    )
}

export default Map1