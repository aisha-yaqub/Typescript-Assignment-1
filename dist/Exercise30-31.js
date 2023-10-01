let user_names = ['Matt', 'admin', 'Eric', 'Jeff', 'John'];
for (let i = user_names.length; i >= 0; i--) {
    if (user_names.length === 0) {
        console.log('We need to find some users.');
    }
    else {
        let user_name = user_names.shift();
        if (user_name === 'admin') {
            console.log(`Hello ${user_name}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${user_name}, thank you for logging in again.`);
        }
    }
}
export {};
