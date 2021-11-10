const Empresa = require('../classes/Empresa');

const obtenerEmpresa = (req,res) => {

  
    res.status(200).json({
        ok:true,
        empresa: new Empresa(),
    });


}

module.exports = {
    obtenerEmpresa
}