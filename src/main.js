// import {getDataAll,getDataRace,getPosts,getUsers } from './promises';
/**
 * Async/await
 *  There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”.
 */

async function handleData(){
    let result = await getDataAll();
    console.log("from handle data ", result);
}

async function handleRace(){
    let result = await getDataRace();
    console.log("from handle race ", result);
}

async function handleErr(){
    let result = await getDataAllError();
    console.log("Results from error scenario");
    console.log(result);
}
/**
 * Callback example 
 * In JavaScript, functions are objects. Because of this, functions can take functions as arguments, 
 * and can be returned by other functions. Functions that do this are called higher-order functions. 
 * Any function that is passed as an argument is called a callback function.
*/

handleData();
handleRace();
handleErr();