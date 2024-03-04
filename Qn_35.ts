function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The size of the shirt is ${size} and it will have "${message}" printed on it.`);
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'Dive into TypeScript');
