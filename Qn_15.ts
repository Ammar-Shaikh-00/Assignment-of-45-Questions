let dinnerGuests:string[] = ['Shahmir', 'Ammar', 'Najeeb', 'Maisam', 'Husnain', 'Ali']

console.log("Unfortunately, my new dinner table won’t arrive in time, and I can only invite two people for dinner.");
while (dinnerGuests.length > 2) {
    
    let removedGuest: string = dinnerGuests.pop()!
    console.log(`I'm terribly sorry, ${removedGuest}, that I can't invite you to dinner.`);
}
dinnerGuests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to my dinner party.`);
})
while (dinnerGuests.length > 0) {
    dinnerGuests.pop()
}
console.log("Current guest list:",dinnerGuests);
export{}