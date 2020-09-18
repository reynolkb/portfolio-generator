// const fs = require('fs'); // allows the file to access the fs module's functions through the fs assignment.
// const generatePage = require('./src/page-template.js');
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// const [name, github] = profileDataArgs;
// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// console.log(name, github); // logs to the console only name and github
// console.log(generatePage(name, github)); // logs to the console the return of the function with parameters name and github

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// })

const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));