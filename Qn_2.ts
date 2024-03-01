let Name: string = ("Ammar")

console.log(Name.toLowerCase());
console.log(Name.toUpperCase());

// we create a function to convert a string to title case
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase(Name));
