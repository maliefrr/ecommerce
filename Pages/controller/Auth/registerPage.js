export const registerPage = (req,res) => {
    res.render('registerPage',{
        title: 'Ecommerce | Register',
        layout: 'Layouts/basicLayout'
    })
}