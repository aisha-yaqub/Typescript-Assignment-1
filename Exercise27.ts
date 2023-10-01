let alien_color:string;

// Alien's color is green - executes if block
alien_color = 'green';

// Alien's color is yellow - executes first else if block
//alien_color = 'yellow';

// Alien's color is red - executes second else if block
//alien_color = 'red';

if (alien_color === 'green'){

    console.log("Congratulations! You earned 5 points.");
}

else if (alien_color === 'yellow'){

    console.log("Congratulations! You earned 10 points.");
}

else if (alien_color === 'red'){

    console.log("Congratulations! You earned 15 points.");
}
