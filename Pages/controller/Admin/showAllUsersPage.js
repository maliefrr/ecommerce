export const showAllUsersPage = (req,res) => {
    res.render('allUsers',{
        title: 'Ecommerce | All Users',
        layout: 'Layouts/basicLayout'
    })
}