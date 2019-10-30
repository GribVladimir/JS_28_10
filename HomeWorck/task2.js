// Write a program that asks user to enter his favorite color.
// If the color is red, suggest him (using alert() function) to buy a Ferrari
// If the color is yellow, suggest him to buy a Lamborghini
// If the color is blue, suggest him to buy a Subaru
// else - display the following message 'We cannot find a car for you'

let color = prompt("What your favorite color ?")

if (color == 'red') {
    alert('Buy Ferrari');
}
else if (color == 'yellow') {
    alert('Buy Lamborghini');
}
else if (color == 'blue') {
    alert('Buy Subaru');
}
else {
    alert('We canot find a car for you');
}