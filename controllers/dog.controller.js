
/**
 * Métodos ocultados
 */
var dogController = function () {
    var meuController = {}

    const criarDog = function (req, res) {
        console.log(req.body);
        res.json("Criando um dog, BOA MLK");
    };

    const listarDog = function (req, res) {
        res.json("Listando um dog!!");
    };

    const apagarDog  = function (req, res) {
         res.json("Apagando um dog... SAD MOMENT");
    }


    var proto = {criarDog, listarDog, apagarDog};

    const result = function () {
        result.__proto__ = proto;
        return result;
    }

    return {result};
};


module.exports = dogController().result;