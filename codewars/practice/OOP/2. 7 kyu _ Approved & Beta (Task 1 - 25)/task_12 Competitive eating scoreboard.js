// https://www.codewars.com/kata/571d2e9eeed4a150d30011e7/train/javascript

function scoreboard(whoAteWhat) {
    let result = []

    for (const player of whoAteWhat) {
        let score = 0
        score = (player.chickenwings * 5) + (player.hamburgers * 3) + (player.hotdogs * 2)
        result.push({ name: player.name, score: score })
    }

    return result.sort((a, b) => b.score == a.score ? a.name.localeCompare(b.name) : b.score - a.score)

}

let whoAteWhat = [
    { name: "Billy The Beast", chickenwings: 17, hamburgers: 7, hotdogs: 8 },
    { name: "Habanero Hillary", chickenwings: 5, hamburgers: 17, hotdogs: 11 },
    { name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15 },
    { name: "Big Bob", chickenwings: 20, hamburgers: 4, hotdogs: 11 }
];

console.log(scoreboard(whoAteWhat))