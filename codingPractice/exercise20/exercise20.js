const fruits = ["cantaloupe", "mango", "watermelon"];
const vegetables = ["broccoli", "cabbage", "pumpkin"];

const allProducts = [];

//push() method by scratch
//push() adds elements to the array
//using the fruits.length we get the last index number which is empty
fruits[fruits.length] = "strawberries";
vegetables[vegetables.length] = "zucchini";

//concat() method by scratch
//concat() joins to arrays
//with a for loop we add each content of the fruits[] to the allProducts[] 
//which was previously empty 
for (let i = 0; i < fruits.length; i++) {
    allProducts[i] = fruits[i];
}

//then with another for loop we add the vegetables[]
//here we use the allProducts[fruits.length + j] because we want the starting index
//to be after all the fruits, so it starts filling the array after the last fruit's position
for (let j = 0; j < vegetables.length; j++) {
    allProducts[fruits.length + j] = vegetables[j];
}

console.log("These are the fruits: " + fruits);
console.log("These are the vegetables: " + vegetables);
console.log("These are all the products: " + allProducts);



