exports.main = (req, res, next) => {
    res.render('main.ejs', {
        title: 'main',
        styleNo: 0
    });
}