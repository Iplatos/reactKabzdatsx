import React from 'react';
import './App.css';

import Accordion from "./components/Accordion/Accordion";
import {Rating as R} from "./components/Rating/Rating";


type PageTitlePropsType ={
    title:string
}

function PageTitle(props:PageTitlePropsType){
    return <h1>{props.title}</h1>
}


export default App;



function App(props:any) {
    console.log("App rendering")

    return (
        <div>

            <PageTitle title = {'This App title'}/>
            <PageTitle title = {'My friends'}/>
            Article1
            <R value={3}/>
            <Accordion titleValue = {"Menu"}/>
            <Accordion titleValue = {"Users"}/>
            Article1
            <R value={0}/>
            <R value={1}/>
            <R value={2}/>
            <R value={3}/>
            <R value={4}/>
            <R value={5}/>

        </div>
    );
}

