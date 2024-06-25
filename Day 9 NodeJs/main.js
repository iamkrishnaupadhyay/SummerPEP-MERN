const figlet = require('figlet');


figlet("Krishna", (err, data) => {
    if (err) {
        console.log("Something went wrong");
        console.dir(err);
    }

    console.log(data);
})