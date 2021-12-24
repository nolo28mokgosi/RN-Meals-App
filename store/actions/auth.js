// export const SIGNUP = 'SIGNUP';

// export const signup = (email,password) =>{
//     const response = await fetch(
//         'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[apikey]]'
//         {
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application.json'
//             },
//             body: JSON.stringify({
//                 email: email,
//                 password: password,
//                 returnSecureToken: true
//             })
//         }
//     );
    
//     if(!response.ok){
//         throw new Error('Somethign not OK');
//     }

//     const resData = await response.json();
//     console.log(resData);

//     return async dispatch => {
//         dispatch({type: SIGNUP });
//     }

// }