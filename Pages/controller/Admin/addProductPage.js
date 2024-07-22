export const addProductPage = (req,res) => {
    res.render('addProductPage',{
        title: 'Ecommerce | Add Product',
        layout: 'Layouts/basicLayout'
    })
}