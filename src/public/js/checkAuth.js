//
// Check if current session is still valid
//

module.exports = function checkAuth(req, res, next) {
    if (req.session.user) {
        next();
    }
    else
        return res.redirect("login");
};