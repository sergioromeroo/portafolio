module.exports = {//TODO ESTO ES PARA  ME RENDERISE EL INDEX.EJS A HTML
    index : (req,res) => {
        return res.render('index')
    },
    index2 : (req,res) => {
        return res.render('index-2')
    },
    topbar : (req,res) => {
        return res.render('blog-topbar')
    },
    minibar : (req,res) => {
        return res.render('blog-minibar')
    },
}