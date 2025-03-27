const { json } = require("express/lib/response");

exports.getParserService = (req, res) => {
    // Para o endereço IP:
    // Se estiver atrás de um proxy, pode estar no cabeçalho 'x-forwarded-for'
    const ipaddress = req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress;
  
    // Para o idioma preferido:
    const language = req.headers['accept-language'];
  
    // Para o software (user agent):
    const software = req.headers['user-agent'];
  
    res.json({ ipaddress, language, software });
  };