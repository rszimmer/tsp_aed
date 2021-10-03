module.exports = {
    tree: function(mst) {
        var tree;
        for(var i = 0; i < mst.length; i++) {
            tree.push({
                source: mst.element[0],
                destination: mst.element[1],
                weight: mst.priority
            });
        }
        return tree;
    }
}