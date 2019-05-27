/**
 * Sample apis for async demo
 */
const apiUrl1 = 'http://jsonplaceholder.typicode.com/posts';
const apiUrl2 = 'https://reqres.in/api/users/1';

/**
 * Get data from api 1
 */
function getPosts(url){
    return new Promise((resolve, reject)=> {
        fetch(url)
        .then(res =>{
            resolve(res.json());
        })
        .catch(err=>{
            reject("error is ", err);
        })
    })
}

/**
 * Get data from api 2
 */
function getUsers(url){
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(res=> resolve(res.json()))
        .catch(err=> reject(err))
    })
}


function getDataAll(){
    let promise1 = getPosts(apiUrl1);
    let promise2 = getUsers(apiUrl2);
    return Promise.all([promise1, promise2]);
}

function getDataRace(){
    let promise1 = getPosts(apiUrl1);
    let promise2 = getUsers(apiUrl2);
    return Promise.race([promise1, promise2]);
}

// export {
//     getPosts,
//     getUsers,
//     getDataAll,
//     getDataRace
// }
