import type { CSSProperties } from "react";

const firstName = 'Eduardo';
const lastName = 'Garcia';

const favoriteGames = [
    'The Legend of Zelda: Ocarina of Time',
    'Final Fantasy VII',
    'Metal Gear Solid',
];

const active = false;

const address ={
    street: '123 Main St',
    city: 'Somewhere',
    country: 'USA'  
}

const myStyles: CSSProperties = {
    color: active ? 'blue' : 'red',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px',
    marginTop: '10px',
};
 
export const MyAwesomeApp = () => {
    return (
        <>
         <h1>{firstName}</h1>
         <h3>{lastName}</h3>
         <p> {favoriteGames.join(', ')} </p>
         <p>{2 + 2}</p>


         <h1> {active ? 'Active' : 'Inactive'}</h1>

         <p>{address.street}, {address.city}, {address.country}</p>
         <p style={myStyles}> { JSON.stringify(address) } </p>
        </>
    );
}