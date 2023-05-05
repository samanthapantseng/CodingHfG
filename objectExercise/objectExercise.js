const person1 = {
    name: "Josef",
    friends: []
}

const person2 = {
    name: "Paula",
    friends: []
}

const shoppingList = {
    fruits: [
        "pomegranate",
        ,
        "watermelon",
        "cantaloupe",
        ,
        ,
        "mango",
    ]
}

person1.friends.push("Mary");
person1.friends.push("Ago");
person1.friends.push("Hedda");

person2.friends.push("Hedda");
person2.friends.push("Simge");

console.log("These are " + person1.name + "'s friends: " + person1.friends);
console.log("These are " + person2.name + "'s friends: " + person2.friends);

console.log("There are " + shoppingList.fruits.length + " fruits in my shopping list: " 
+ shoppingList.fruits);

console.log(shoppingList.fruits);