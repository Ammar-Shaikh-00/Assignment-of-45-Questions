function make_sandwich(...items: string[]): void {
    console.log(`Making a sandwich with the following items:`);
    items.forEach(item => {
        console.log(`- ${item}`);
    });
}
make_sandwich('ham', 'cheese');
make_sandwich('turkey', 'avocado', 'mayo');
make_sandwich('peanut butter', 'jelly', 'banana slices');
