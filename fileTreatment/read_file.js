const fs = require('fs');
const { type } = require('os');
const tspR = require('./tsp_rough');

module.exports = {
    helpme: function() {
        fs.readFile('./tsp1_253.txt', 'utf8' , (err, string) => { //1_253, 2_1248, 3_1194,
                if (err) {                                          //4_7013, 5_27603
                    console.error(err)
                    return
                }

                var stringArray = [];
                var array = [];
                var temp = string.split(/[^\d]*\n/g);
                temp.forEach(element => {
                    stringArray.push(element.replace(/[^\d]+/g, ","));
                    if(element[element.length-1] == ",") element.pop();
                });
        
               stringArray.forEach (element => {
                   
                    array.push(element.split(","));
               });
        
               for(var i = 0; i < array.length; i++) {
                   for(var j = 0; j < array[i].length; j++) {
                        array[i][j] = parseInt(array[i][j]);
                   }
               }   
        });
    },
}