let current_users = ['Matt', 'admin', 'Eric', 'Jeff', 'John'];
let new_users = ['Matt', 'Sam', 'JOHN', 'Mike', 'Tom'];
let new_user;
for (let i = 0; i < new_users.length; i++) {
    new_user = true;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            new_user = false;
            break;
        }
    }
    if (new_user) {
        console.log('Username is available');
    }
    else {
        console.log('Username is not available. Enter a new username');
    }
}
export {};
