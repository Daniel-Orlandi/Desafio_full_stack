class HomeController {
    async getHome(req, res) {
      return res.render('form', {title: 'Login'});
    }    
  }
  
  module.exports = new HomeController();
