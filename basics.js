// Select class 
var hektor = document.querySelector('.hektor');

// Add class to div hektor
hektor.classList.add("red");

// Run through array and assign number value
var blazer = ['dog', 'female', 'pointer'];

for (let i = 0; i < blazer.length; i++) {
  console.log(blazer[i]) //value
  console.log(i) //index
}

// Another way to do this! ^

blazer.forEach((item, index) => {
  console.log(item) //value
  console.log(index) //index
})



console.log(hektor);