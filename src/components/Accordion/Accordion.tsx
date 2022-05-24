import React from "react";

function AccordionTitle(props: any) {
    console.log('howt')
    return <h3>Меню</h3>
}
function AccordionBody (props: any) {
    console.log('howb')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>

    </ul>
}

function Accordion(props: any) {
    console.log('accc')
debugger
    return <>
        <AccordionTitle/>
        <AccordionBody/>
    </>
}
export default Accordion;