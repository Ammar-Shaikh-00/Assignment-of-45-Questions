let current_users: string[] = ["Ammar", "admin", "Atif", "Maisam", "Husnain"];
let new_users: string[] = ["Adil", "Ali", "Ameer", "Najeeb", "Shahmir"];

function checkUsernames(current_users: string[], new_users: string[]): void {
    let lowerCurrentUsers = current_users.map(user => user.toLowerCase());

    for (let newUser of new_users) {
        if (lowerCurrentUsers.includes(newUser.toLowerCase())) {
            console.log(`The username "${newUser}" has already been used. You will need to enter a new username.`);
        } else {
            console.log(`The username "${newUser}" is available.`);
        }
    }
}
checkUsernames(current_users, new_users);
