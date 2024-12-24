import React,{createContext}from"react";
import C1

const Fname=createContext();
const Lname=createContext();

fuction PureComponent(){

    return {
        <>
        <Fname.provider value="ABC">
        <Lname.provider value="xyz">
        <C1/>
       </Lname.provider>
       </Fname.provider>
    }
}