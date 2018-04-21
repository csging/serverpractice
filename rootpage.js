let root_page;

fs.readFile('./home.html', (err, data) => {
    if (err) throw err;
    root_page = data;
})

//so you can store a html page as a variable so you dont have to keep reading the file
//pre-loads static content