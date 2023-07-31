

exports.getIndex = (req, res, next) => {
  res.render('home', {
    pageTitle: 'Homepage - Recipes',
    path: '/'
  })
}