import React from 'react';
import './App.css';

import Accordion from "./components/Accordion/Accordion";
import {Rating as R} from "./components/Rating/Rating";



function App() {
    console.log("App rendering")

    return (
        <div>

            <PageTitle title = {'This App title'}/>
            <PageTitle title = {'My friends'}/>
            Article1
            <R value={3}/>
            <Accordion title = {"accordoin1"}/>
            <Accordion title = {"accordoin2"}/>
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
function PageTitle(props:any){
    return <h1>{props.title}</h1>
}


export default App;
