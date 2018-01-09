exports.logout = (req, res) => {
    req.session.destroy((err) => {
        res.redirect('https://www.theguardian.com/');
    });
}
