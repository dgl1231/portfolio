exports.archiving = (req, res, next) => {
    res.render('archiving.ejs', {
        title: 'archiving',
        styleNo: 4
    });
}