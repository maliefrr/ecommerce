export const addCategoryPage = (req,res) => {
    res.render('addCategoryPage',{
        title: 'Ecommerce | Add Category',
        layout: 'Layouts/basicLayout'
    })
}