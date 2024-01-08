let Movie={

    mname:"happy",

    director: "dshfui",
    cast: {
        hero : ["sdfsd","rfv", "dfvd"],
        heroine : ["awew","efw"],
        vilan : ["aee", "er", "se"],
        comedian: ["ad","fsd"]
    },
    DateRelease: "23/23/2023",
    budget:451654,
    kid: true
}

console.log(Movie.mname)

console.log(JSON.stringify(Movie))

console.log(Movie)

console.log("total no of cast" +Movie.cast.hero.length+Movie.cast.heroine.length)