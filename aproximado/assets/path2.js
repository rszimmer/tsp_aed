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
        for(var i = 0; i < 5; i++) {
            //Pega todos os vizinhos do nodo atual
            neighbors = findNeighbors(mst, currentNode)
            //verifica se os nodos já presentes dentro do caminho tem alguma ligação prévia com o atual
            console.log("===NEIGHBORS===")
            console.log(neighbors)
            var nonVisited = neighbors.filter(element => {
                //return !pathNodes.includes(element.destination)
                return isPath(pathNodes, element)
            })
            //Verifica se existem vizinhos não visitados pelo nodo atual
            console.log("===NONVISITED===")
            console.log(nonVisited)
            if(nonVisited.length > 0) {
                //Como existem, escolhe um deles para ser aquele que virará o atual
                currentNode = nonVisited[0].destination
                console.log("===CURRENT NODE===")
                console.log(currentNode)
                //e coloca esse atual no caminho do contorno
                pathNodes.push(currentNode)
                //faz um contorno de objetos também
                path.push(nonVisited[0]);
                console.log("===PATH===")
                console.log(path)
                console.log("===PATHNODES===")
                console.log(pathNodes)
                //Como existe um caminho inteiro agora
            }
            else{
                pathNodes.push(neighbors[0].destination)
                path.push({
                    source: neighbors[0].destination,
                    destination:neighbors[0].source,
                    weight:neighbors[0].weight
                })
                console.log("===PATH===")
                console.log(path)
                console.log("===PATHNODES===")
                console.log(pathNodes)
            }
            console.log("\n===NOVO PASSO===\n")
        }

            
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