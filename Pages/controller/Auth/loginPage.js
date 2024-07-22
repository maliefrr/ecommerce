export const loginPage = (req,res) => {
    res.render('loginPage',{
        title: 'Ecommerce | Login',
        layout: 'Layouts/basicLayout'
    })
}