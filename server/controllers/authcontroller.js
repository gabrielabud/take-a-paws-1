exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('https://www.theguardian.com/');
    });
}
