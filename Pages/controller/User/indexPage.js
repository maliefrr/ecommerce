export const indexPage = (req,res) => {
    res.render('homePage',{
        layout: "Layouts/basicLayout",
        title: "Home Page"
    })
}