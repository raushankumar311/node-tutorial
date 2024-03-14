// const amount =9

// if(amount < 10 ) {
//    console.log('small number');
// } else {
//    console.log('large number');
// }

// console.log(`THey, this is my first node program!!`);

const os = require('os');

// info about the current user
const user = os.userInfo();
console.log(user);


//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);



// console.log(`Hello ${os.userInfo().username}`);
// console.log(os.userInfo().homedir);


const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem(),
}

console.log(currentOS)