let guest:string[]=["Ammar","Maisam","Husnain"]

// Print the initial set of invitation messages
console.log("Initial invitations:");
guest.forEach(guest => {
    console.log(`${guest}, I would like to invite U in dinner at my home.`)
})
let guestWhoCantMakeIt: string = "Maisam";
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the name of the guest who can't make it with a new person
let indexOfGuestWhoCantMakeIt: number =guest.indexOf(guestWhoCantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guest[indexOfGuestWhoCantMakeIt] = ("Shahmir")
}

// Print a statement about the change
console.log(`\n${guestWhoCantMakeIt} has been replaced with Shahmiri in the guest list.`);

// Print a second set of invitation messages
console.log("\nNew set of invitations:")
guest.forEach(guest => {
    console.log(`${guest}, I would like to invite U in dinner at my home.`)
})
export{}