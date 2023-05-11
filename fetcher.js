const request = require('request');
const fs = require('fs');


const fetcher = function(inputs) {
  request(inputs[0], function(error, response, body) {
    fs.writeFile(inputs[1], body, err => {
      if (err) {
        console.error(err);
      }
    });
  });
};



fetcher(process.argv.slice(2));

