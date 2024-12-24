import React,{useState}from"react";

function Us2(){

    const[name,setName]=useState("LJ university");
    const[textColor,setColor]=useState("red");
    

    function changeName(){
        if(name === "LJ UNiversity"){
            setName("LJ Univeritsy")
        }else{
            setName("Indus University")
        }
    }

    return (

        <div>
        
           <button onClick={changeName}>change Text</button>
           {/* <button onClick={changeColor}>change Color</button> */}

           <h1 style={{color:textColor}}>{name}</h1>


        </div>
    )
}

export default Us2