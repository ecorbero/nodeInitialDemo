

const authUser = (req, res, next) => {
    const { user, pass } = req.headers;
    const { USER, PASS } = process.env;

    if(user !== USER || pass !== PASS) {
        res.status(401).json({
            status:"Error", 
            msg:"Usuari i/o contrasenya incorrectes"
        });
        return;
    }
    next();
}

const nocache = (req, res, next) => {
    
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
    next();
}

module.exports = {
    authUser,
    nocache
}