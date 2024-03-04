let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function printOrdinals(numbers: number[]): void {
    for (let number of numbers) {
        let suffix: string;

        switch (number) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
                break;
        }

        console.log(`${number}${suffix}`);
    }
}
printOrdinals(numbers);
