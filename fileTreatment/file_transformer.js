module.exports = {
        toArray: function(string) {
            var stringArray = [];
            var array = [];
            //Separa a string enorme que é o caminho em vetores
            var temp = string.split(/[^\d]*\n/g);
            //Retira os espaços e os substitui por virgulas para facilitar o trabalho
            temp.forEach(element => {
                stringArray.push(element.replace(/[^\d]+/g, ","));
                if(element[element.length-1] == ",") element.pop();
            });

            //Retira as virgulas e mantém os vetores
            stringArray.forEach (element => {
                
                    array.push(element.split(","));
            });

            //transforma os valores de caracteres para números
            for(var i = 0; i < array.length; i++) {
                for(var j = 0; j < array[i].length; j++) {
                        array[i][j] = parseInt(array[i][j]);
                }
            }

                return array;
        }
}