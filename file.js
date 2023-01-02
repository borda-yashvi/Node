const fs=require("fs");
fs.readFile("file.txt","utf8",(err,data)=>
{
    if (err) console.log(err);
    else console.log(data);
});

const content="writeFile"
fs.writeFile("file.txt",content,"utf8",(err)=>
{
    if (err) console.log(err);
    else console.log("Done...");
});

data = fs.readFileSync("file.txt","utf-8");
console.log(data);
fs.writeFileSync("file.txt",content,"utf-8");

// fs.rename("file.txt","file_2.txt",(err)=>
// {
//     if (err) console.log(err);
//     else console.log();
// });

// fs.unlink("file_2.txt",(err)=>
// {
//     if (err) console.log(err);
// });

// fs.start("file_1.txt",(err,data)=>
// {
//     if (err) console.log(err);
//     else console.log(data);
// });

fs.copyFile("file.txt", "copied_file.txt", (err) =>
{
    if (err) console.log(err);
    else console.log("Done...");
});

const os = require('os');
console.log("platform " +os.platform());
console.log("architecture " +os.arch());