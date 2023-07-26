// Q1:
// Use the array of shop items provided and present the the information in the following format

```
=======================================
Name: 	 Air Max 97
Price: 	 130
About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. 
Category: shoes
=======================================
Name: 	 Adidas NMD R1
Price: 	 128
About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
Category: shoes
=======================================
Name: 	 Gucci Oversize T-shirt with Interlocking G
Price: 	 580
About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
Category: shirts
=======================================
Name: 	 Nike Sportswear Club
Price: 	 18.97
About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
Category: shirts
=======================================
Name: 	 Spanx Flare Jeans, Vintage Indigo
Price: 	 148
About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
Category: pants
=======================================
Name: 	 Bonobos Premium Stretch Jeans
Price: 	 69
About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
Category: pants
```

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]

function displayItems(items) {
    for (const item of items) {
        console.log("=======================================")
        console.log(`Name: \t ${item.name}`)
        console.log(`Price: \t ${item.price}`)
        console.log(`About: \t ${item.desc}`)
        console.log(`Category: ${item.category}`)
        console.log("=======================================")
    }
}

displayItems(shopItems)

// Question 2:
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function allElementsOfObject(obj) {
    for (const ele of Object.keys(obj)) {
        if (obj[ele] instanceof Array) {
            console.log(`${ele} contains:`)
            for (const item of obj[ele]) {
                console.log(`  ${item}`)
            }
        } else if (obj[ele] instanceof Object) {
            console.log(`${ele} contains:`)
            allElementsOfObject(obj[ele])
        } else {
            console.log(`${ele}: ${obj[ele]}`)
        }
    }
}

allElementsOfObject(hwPerson);

// Create a Promised based function that will check a string to determine if it's length is greater than 10.

// If the length is greater than 10 then resolve it and console log "Big word". 

// If the length of the string is less than 10 then reject it and  console log "Small String"

function wordLength(str) {
    return new Promise((resolve, reject) => {
        str.length > 10 ? resolve('Big word') : reject('Small String')
    })
}

// Question 4:
// Create a base class of GameMember and 2 children classes of Dealer, Player

// both dealer and player have:

// hand : array of 2 numbers (1-13) ex: [5, 12] which starts with 2 random numbers

// hit() : ability to add  a random number [1-13] to their hand

// When a Dealer trys to hit he can only hit if he has his hand adds up to less than a total of 17 (so 16 and under)

// When a Player hits they can hit as long as their total is under 21

// Use the randomNumber function provided below to gernerate a random number 1-12


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  class GameMember {
    constructor() {
      this.hand = [randomNumber(1, 13), randomNumber(1, 13)]
    }
  
    hit() {
      throw new Error("The hit method must be implemented in the child class.")
    }
  }
  
  class Dealer extends GameMember {
    hit() {
      const handTotal = this.hand.reduce((sum, card) => sum + card, 0)
      if (handTotal < 17) {
        this.hand.push(randomNumber(1, 13))
      }
    }
  }
  
  class Player extends GameMember {
    hit() {
      const handTotal = this.hand.reduce((sum, card) => sum + card, 0)
      if (handTotal < 21) {
        this.hand.push(randomNumber(1, 13))
      }
    }
  }
  
  
  const dealer = new Dealer()
  const player = new Player()
  
  console.log("Dealer's initial hand:", dealer.hand)
  console.log("Player's initial hand:", player.hand)
  
  dealer.hit()
  player.hit()
  
  console.log("Dealer's hand after hit:", dealer.hand)
  console.log("Player's hand after hit:", player.hand)
  
//Question 5:

//   Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python.  Paste a link here to the 3 questions you completed
// 1.https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

const isPrime = num => {
    for (let i = 2; i <= num ** .5; i++) {
      if (!(num % i)) return false
    }
    return num > 1
  }


//   https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
//   
function toWeirdCase(str) {
    const words = str.split(" ");
    const result = words.map((word) => {
      let weirdWord = "";
      for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
          weirdWord += word[i].toUpperCase()
        } else {
          weirdWord += word[i].toLowerCase()
        }
      }
      return weirdWord;
    })}