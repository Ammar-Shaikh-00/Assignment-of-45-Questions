let usernames: string[] = [];
function checkUsers(usernames: string[]): void {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    } else {
        for (let username of usernames) {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
checkUsers(usernames);
export{}