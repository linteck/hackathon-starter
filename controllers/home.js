/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('index', {
    title: 'Home'
  });
};

exports.escapeVerti = (req, res) => {
  res.render('verti-index', {
    title: 'Braukšana'
  });
};
exports.escapeVertiLeft = (req, res) => {
  res.render('verti-left-sidebar', {
    title: 'Braukšana'
  });
};
exports.escapeVertiRight = (req, res) => {
  res.render('verti-right-sidebar', {
    title: 'Braukšana'
  });
};
exports.escapeVertiNo = (req, res) => {
  res.render('verti-no-sidebar', {
    title: 'Braukšana'
  });
};
