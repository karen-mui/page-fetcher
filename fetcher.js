const args = (process.argv).slice(2);
const fs = require('fs');
const request = require('request');

request(args[0], (error, response, body) => {

  fs.writeFile(args[1], body, err => {
    console.log(body.length);
    if (err) {
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`);
    }
  });
});



