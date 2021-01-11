
export const shuffleLetters = (letterArray) => {
    let randomized = [];
    while(letterArray.length > 0) {
        let randomIndex = Math.floor(Math.random() * letterArray.length);
        let randomLetter = letterArray.splice(randomIndex, 1);
        randomized.push(randomLetter[0]);
    }

    return randomized;
}
