import React from "react";

type AccordionPropsType = {
    titleValue: string
}

function Accordion (props:AccordionPropsType){
    console.log('accc')

    return <>

        <AccordionTitle title={props.titleValue}/>
        <AccordionBody/>
    </>
}
type AccordionTitlePropsType =  {
    title: string
}

function AccordionTitle (props:AccordionTitlePropsType) {

    console.log('howt')
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log('howb')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>

    </ul>
}

export default Accordion;