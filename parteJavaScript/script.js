// const usuarios = new Map();

// usuarios.set('Lucas', 'Admin');
// usuarios.set('Jack Black', 'user');
// usuarios.set('Slash', 'Admin');
// usuarios.set('Bob Dylan', 'Admin');

// function getAdmins(map){
//     let admins = [];
//     for([key, value] of map){
//         if(value === 'Admin'){
//             admins.push(key);
//         }
//     }
//     return admins;
// }

// console.log(getAdmins(usuarios));

function validaArray(arr, num){
    try{
        if( !arr && !num) throw new ReferenceError("Envie os parametros!");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
        if(typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");
        
        if( arr.length !== num) throw new RangeError("Tamanho invalido");

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Esse erro é um ReferenceError");
            console.log(e.message)            
        }
        else if (e instanceof TypeError){
            console.log("Esse erro é um TypeError");
            console.log(e.message)  
        }
        else if(e instanceof RangeError){
            console.log("Esse erro é um RangeError");
            console.log(e.message)  
        }
        else{
            console.log("Tipo de erro não esperado: " + e)
        }
    }
}

console.log(validaArray([1, 2 ,3, 4, 5], 5))

