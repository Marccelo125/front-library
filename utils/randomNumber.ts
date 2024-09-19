export default function randomNumber(min: number, max: number, floor: boolean = true): number {
    if (!floor) {
        return (Math.random() * (max - min + 1)) + min
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}