const { ifError } = require("assert");
const { WSATYPE_NOT_FOUND } = require("constants");
const { reverse } = require("dns");
const { type } = require("os");
const primMST = require("./primMST");
module.exports = {

    path: function(mst, startNode) {
        console.log('========================MST========================')
        console.log(mst)
        var reverseMst = [];
        var path = [], neighbors = [];
        var currentNode = startNode;
        var pathSize;

        //Faz a versão da mst onde as arestas tem os nodos ao contrário
        for(var i = 0; i < mst.length; i++) {
            reverseMst.push({source: mst[i].destination,
                            destination:mst[i].source,
                            weight: mst[i].weight
                        })
        }

        pathSize = mst.length+reverseMst.length

        //Condição de parada para sabermos que o contorno está completo: todos os nodos de ambos mst reveso estão
        //no caminho
        while(path.length < pathSize) {
        //for(var i = 0; i < 22; i++) {

            //Escolhe um vizinho para ser o destino
            neighbors = neighbor(mst, currentNode);
            //enquanto houverem vizinhos, a árvore segue até achar uma folha
            while(neighbors != undefined) {
                //Coloca esse vizinho no caminho
                path.push(neighbors);
                //e tira ele da árvore
                removeElement(mst, neighbors);
                //também faz dele o nodo atual
                currentNode = path[path.length-1].destination;
                //procura vizinho novamente para recomeçar o processo
                neighbors = neighbor(mst, currentNode);
            }

            //Procura pra ver se há um vizinho do nodo atual na árvore inversa
            //É esperado que sim
            neighbors = neighbor(reverseMst, currentNode);
            //Começa o caminho de volta
            while(neighbors != undefined) {
                //Coloca o vizinho no caminho também
                path.push(neighbors);
                //E o remove da árvore contrária
                removeElement(reverseMst, neighbors);
                //Faz com que esse vizinho seja o novo nodo atual
                currentNode = path[path.length-1].destination;
                //segue para o próximo vizinho
                neighbors = neighbor(reverseMst, currentNode);
                //Se esse vizinho existir, ainda verifica primeiro se ele não está presente na árvore original
                //se estiver, vai 
                if(neighbors != undefined)
                {if(neighbor(mst, currentNode)) break;}
            }
        }

        console.log('========================PATH========================')
        console.log(path);
        console.log('========================MST========================')
        console.log(mst)
        console.log('========================MST REVERSA========================')
        console.log(reverseMst)
            
    }
}

function neighbor(mst, currentNode) {
    for(i = 0; i < mst.length; i++) {
        if(currentNode == mst[i].source) return mst[i];
    }
    return undefined;
}

function removeElement(array, element) {
    for(var i = 0; i < array.length && array[i] != element; i++);
    var removed = array.splice(i, 1);
    return array;
}