let usernames: string[] = ['admin', 'Ammar', 'Husnain', 'Maisam', 'Shahmir'];
function greetUsers(usernames: string[]): void {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
        return;
    }
    for (let username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
greetUsers(usernames);
console.log("\nAfter removing all users:");
usernames = []; 
greetUsers(usernames);
