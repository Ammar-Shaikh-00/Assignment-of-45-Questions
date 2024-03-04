function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
let magicians: string[] = ['Ammar', 'Maisam & Kala', 'Husnain & Kodi'];
magicians = make_great(magicians);
show_magicians(magicians);
export{}