var catController = function () {
    var meuController = {};

    var listarCat = function (req, res) {
         res.json("Listando Cats :3");        
    };

    var criarCat = function (req, res) {
        console.log(req.body);
         res.json("Criando um Cat :3");
    };

    var removerCat = function (req, res) {
         res.json("Revendo um Cat :'(");
    };

    var proto_cat = {listarCat, criarCat, removerCat};

    const result = function(){
        result.__proto__ = proto_cat;
        return result;
    }

    return {result}
};

module.exports = catController().result;