function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
const magicians: string[] = ['Ammar', 'Maisam & Kala', 'Husnain & Kodi'];
show_magicians(magicians);