exports.main = (req, res, next) => {
    res.render('index.ejs', { title: 'Express' });
}