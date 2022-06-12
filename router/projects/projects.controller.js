exports.projects = (req, res, next) => {
    res.render('projects.ejs', {
        title: 'projects',
        styleNo: 3
    });
}