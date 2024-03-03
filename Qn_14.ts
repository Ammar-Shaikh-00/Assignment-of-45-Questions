let dinnerGuests:string[] = ["Ammar","Maisam","Husnain"]

console.log("Great news! I found a bigger dinner table, so more guests can be invited.")

dinnerGuests.unshift("Shahmir")

let middleIndex: number = Math.floor(dinnerGuests.length / 2)
dinnerGuests.splice(middleIndex, 0, "Najeeb")

// (Note: In TypeScript/JavaScript, it's `push` not `append`)
dinnerGuests.push("Ali")

console.log("\nNew set of invitations:")
dinnerGuests.forEach(guest => {
    console.log(`Dear ${guest}, I would be thrilled if you could join me for an even bigger dinner celebration.`)
})
export{}