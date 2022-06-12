exports.aboutme = (req, res, next) => {
    res.render('aboutme.ejs', {
        title: 'about me',
        styleNo: 1
    });
}