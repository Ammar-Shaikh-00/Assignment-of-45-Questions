function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
let originalMagicians: string[] = ['Ammar', 'Maisam & Kala', 'Husnain & Kodi'];
let greatMagicians: string[] = make_great([...originalMagicians]);
console.log("Original Magicians:");
show_magicians(originalMagicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
