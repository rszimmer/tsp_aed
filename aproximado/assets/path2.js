const primMST = require("./primMST");
module.exports = {

    path: function(mst, startNode) {
        var reverseMst = [];
        var path = [], neighbors = [], pathNodes = [];
        var currentNode = startNode;
        var pathSize;

        //Faz a versão da mst onde as arestas tem os nodos ao contrário
        for(var i = 0; i < mst.length; i++) {
            reverseMst.push({source: mst[i].destination,
                            destination:mst[i].source,
                            weight: mst[i].weight
                        })
        }

        mst = mst.concat(reverseMst);

        pathSize = mst.length+reverseMst.length

        //Coloca o primeiro nodo dentro do meu caminho de nodos
        pathNodes.push(currentNode)

        //Condição de parada para sabermos que o contorno está completo: todos os nodos de ambos mst reveso estão
        //no caminho
        //while(path.length < pathSize) {
        for(var i = 0; i < 3; i++) {
            //Pega todos os vizinhos do nodo atual
            neighbors = findNeighbors(mst, currentNode)
            //verifica se os nodos já presentes dentro do caminho tem alguma ligação prévia com o atual
            var nonVisited = neighbors.filter(element => {
                return !pathNodes.includes(element.destination)
            })
            //Verifica se existem vizinhos não visitados pelo nodo atual
            if(nonVisited) {
                //Como existem, escolhe um deles para ser aquele que virará o atual
                currentNode = nonVisited[0].destination
                //e coloca esse atual no caminho do contorno
                pathNodes.push(currentNode)
                console.log(pathNodes)
                //Como existe um caminho inteiro agora
            }
            //else
        }
        console.log(path)
            
    }
}

function findNeighbors(mst, currentNode) {
    neighbors = [];
    for(i = 0; i < mst.length; i++) {
        if(currentNode == mst[i].source) neighbors.push(mst[i]);
    }
    return neighbors;
}

function removeElement(array, element) {
    for(var i = 0; i < array.length && array[i] != element; i++);
    var removed = array.splice(i, 1);
    return array;
}

function isPath(pathNodes, element) {
    for(var i = 0; i < pathNodes.length; i++) {
        if(pathNodes[i] == element.source && pathNodes[i+1] == element.destination) return true;
        else return false;
    }
}