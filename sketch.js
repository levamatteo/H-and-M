let roster = [

  {

    firstName: "Lydia",

    lastName: "Lim",

    color: "blue",

    animal: "dog",

    book: "No",

    movie: "me before you",

    game: "No",

    superHero: "Thor",

    randomFact: " birds are tetrapods even though they only walk on two legs",
  },


  {

    firstName: "Zainib",

    lastName: "Ahmed",

    color: "Blue",

    animal: "Giraffe",

    book: "The book Thief",

    movie: "Amelie",

    game: "none",

    superHero: "The Hulk",

    randomFact: "I love to eat olives."
  },

  {

    firstName: "Toni",

    lastName: "Anguiano",


    color: "blue",

    animal: "cat",

    book: "The Bell Jar",

    movieGenre: "Horror",

    superHero: "batman",

    randomFact: "I like to hangout in cemeteries and research dark California history",
  },

  {

    firstName: "Camila",

    lastName: "Avina Garcia",

    color: "Green",

    animal: "Dog",

    book: "Match",

    movie: "Lady and the Tramp",

    game: " Guitar Hero",

    superHero: "Spiderman",

    randomFact: "I have a twin",

  },

  {

    firstName: "Matteo",

    lastName: "Leva",

    color: "Black",

    animal: "Cat",

    book: "Pillars of the earth",

    movie: "The Godfather",

    game: "Witcher 3",

    superHero: "spider man",

    fact: "I'm disappointed in GOT season 8",
  },

  {

    firstName: "Eddson",

    lastName: "Jose",

    color: "midnight blue",

    animal: "pig",

    book: "The Dark Forest",

    movie: "The Fountain",

    game: "Halo Reach",

    superHero: "Superman",

    fact: "I am made up of stardust"
  },

  {

    firstName: "Hector",

    lastName: "Flores",

    color: "Blue",

    animal: "Dog",

    book: "Captain Underpants",

    movie: "Ace Ventura pet detective",

    game: "Smash Brothers",

    superHero: "Flash",

    randomFact: "I am a Libra",
  },


  {
    firstName: "Lydia",
    lastName: "Lim",
    color: "blue",
    animal: "dog",
    book: "No",
    movie: "me before you",
    game: "No",
    superHero: "Thor",
    randomFact: " birds are tetrapods even though they only walk on two legs",
  },

  {
    firstName: "Chi",
    lastName: "Nguyen",
    color: "purple",
    animal: "bird",
    book: "Math Curse",
    movie: "Big Hero 6",
    game: "Checkers",
    superHero: "Big Hero 6 (team)",
    randomFact: "Lately this year, monsters have especially been occupying my mind, among other things."
  },

  {
    firstName: "Leon",
    lastName: "Quach",
    color: "silver",
    animal: "penguins",
    book: "Letters to a Young Poet",
    movie: "Kung fu Hustle",
    game: "Pokemon Crystal Version",
    superHero: "Batman",
    randomFact: "I have two pet guinea pigs"
  },

  {

    firstName: "Sierra",

    lastName: "Roe",

    color: "purple",

    animal: "dog",

    book: "phantom tollbooth",

    movie: "Naussica of the Valley of the Wind",

    game: "pokemon heartgold",

    superHero: "captain marvel",

    randomFact: "can run 7 minute mile",

  },

  {
    firstName: "Hao",
    lastName: "Rong",
    color: "blue",
    animal: "otter",
    book: "A Brief History of Time",
    movie: "Angry Birds 2",
    game: "Final Fantasy XIV",
    superHero: "Tony Stark",
    randomFact: "I like cats.",
  },

  {
    firstname: "Kaicong",
    lastname: "Tang",
    favcolor: "black",
    animal: "dog",
    movie: "iron man123",
    game: "csgo",
    superHero: "iron man",
    fact: "love gaming",
  },

  {
    firstName: "Sumedh",
    lastName: "Vedanthi",
    favecolor: "Blue",
    animal: "Crow",
    book: "Of Mice and Men",
    movie: "American Psycho",
    game: "Fruit Ninja",
    superHero: "Batman",
    randomFact: "im a black belt",
  },

  {
    firstName: "Chris",
    lastName: "Weber",
    color: "green",
    animal: "cat",
    book: "Hitchhiker's Guide to the Galaxy",
    movie: "Spiderman Into The Spiderverse",
    game: "The Legend of Zelda Breath of the Wild",
    superHero: "Iron Man",
    randomFact: "I'm vegetarian",
  },

  {
    firstName: "Andy",
    lastName: "Wu",
    color: "Red",
    animal: "Kiwi",
    book: "Romance of the Three Kingdoms",
    movie: "Shrek 2",
    game: "Super Mario 64",
    superHero: "Static Shock",
    randomFact: "I've had jaw correction surgery",
  },

  {

    firstName: "xiaowei",

    lastName: "zheng",

    color: " green",

    animal: "babies",

    book: "the little girl at the window",

    movie: "eat drink man woman",

    game: "none",

    superHero: "none",

    randomFact: "don't drink coke"

  },
  {
    firstName: "Anthony",
    lastName: "Valdovinos",
    color: "purple",
    animal: "eagle",
    book: "Hatchet",
    movie: "Titanic",
    game: "Starfox Adventures",
    superHero: "none",
    randomFact: "I studied Japanese for 4 years"
  },

  {
    firstName: "Rachel",
    lastName: "Centinaje",
    color: "green",
    animal: "dogs",
    book: "none",
    movie: "Drive",
    game: "Dishonored",
    superHero: "Deadpool",
    randomFact: "I went camping this weekend"
  },

  {
    firstName: "Alicia",
    lastName: "Breinke",
    color: "purple",
    animal: "dog",
    book: "The Art of Racing in the Rain",
    movie: "Spirited Away",
    superHero: "Wonder Woman",
    randomFact: "I want to live in another country someday"
  },

  {
    firstName: "asra",
    lastName: "siddiqui",
    color: "idk",
    animal: "chameleons",
    book: "codex 1962",
    movie: "pulp fiction",
    game: "idk",
    superHero: "hate em all",
    randomFact: "im grumpy"
  }
]

let randomIndex;
let animating = false;

function setup() {
  createCanvas(400, 400);
    background(220);
textSize(25)

text("click to randomize", 50, 50);


}

function draw() {

if(animating== true){
  ellipse(random(width), random(height), random(50,150))
}
}

function randomizer(){
  animating = false;
    if (roster[0]){
  background(random(255))
    randomIndex = int(random(roster.length));
      text(roster[randomIndex].book, 50, 50);
      roster.splice(randomIndex, 1);
  } else{
    background(random(255))
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
animating = true;
setTimeout(randomizer, 2000);
}
