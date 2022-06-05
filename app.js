const port=8080
const http=require('http')
const httpStatus=require('http-status-codes')
const contentTypes = require('./contentTypes')
const router=require('./router')
const utils=require('./utils')
router.get('/',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/Home.html",res)
    
})
router.get('/Acceuil.html',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/Acceuil.html",res)
    
})
router.get('/Accueilen.html',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/Accueilen.html",res)
    
})
router.get('/Accueiles.html',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/Accueiles.html",res)
    
})
router.get('/mesphotos.html',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/mesphotos.html",res)
    
})
router.get('/mesphotosen.html',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/mesphotosen.html",res)
    
})
router.get('/mesphotoses.html',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/mesphotoses.html",res)
    
})
router.get('/monclub.html',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/monclub.html",res)
    
})
router.get('/monclubes.html',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/monclubes.html",res)
    
})
router.get('/moncluben.html',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/moncluben.html",res)
    
})
router.get('/notation.html',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.html)
    utils.getFile("views/notation.html",res)
    
})

router.get('/Acceuil.css',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.css)
    utils.getFile("public/css/Acceuil.css",res)
    
})
router.get('/mesphotos.css',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.css)
    utils.getFile("public/css/mesphotos.css",res)
    
})
router.get('/Home.css',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.css)
    utils.getFile("public/css/Home.css",res)
    
})
router.get('/monclub.css',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.css)
    utils.getFile("public/css/monclub.css",res)
    
})


router.get('/logo.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/logo.png",res)  
})

router.get('/etat%20civil.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/etat civil.png",res)  
})

router.get('/nom_prenom.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/nom_prenom.png",res)  
})

router.get('/date.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/date.jpg",res)  
})
router.get('/cni.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/cni.png",res)  
})
router.get('/ville.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/ville.jpg",res)  
})

router.get('/etat.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/etat.png",res)  
})

router.get('/pdp.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/pdp.jpg",res)  
})
router.get('/esp.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/esp.jpg",res)  
})
router.get('/phone.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/phone.jpg",res)  
})
router.get('/mail.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/mail.jpg",res)  
})
router.get('/facebook.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/facebook.png",res)  
})
router.get('/instagram.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/instagram.png",res)  
})
router.get('/UCAD.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/UCAD.png",res)  
})

router.get('/arriere.gif',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.gif)
    utils.getFile("public/img/arriere.gif",res)  
})
router.get('/Acceuil.gif',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.gif)
    utils.getFile("public/img/Acceuil.gif",res)  
})
router.get('/mouse.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/mouse.png",res)  
})

router.get('/background-wac.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/background-wac.jpg",res)  
})

router.get('/1erAP.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/1erAP.jpg",res)  
})
router.get('/2AP.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/2AP.jpg",res)  
})
router.get('/3AP.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/3AP.jpg",res)  
})
router.get('/4AP.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/4AP.jpg",res)  
})
router.get('/5AP.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/5AP.jpg",res)  
})
router.get('/6AP.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/6AP.jpg",res)  
})
router.get('/1AC.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/1AC.jpg",res)  
})
router.get('/2ac.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/2ac.jpg",res)  
})
router.get('/3ac.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/3ac.jpg",res)  
})
router.get('/Tronc%20commun.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/Tronc commun.jpg",res)  
})
router.get('/1bac.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/1bac.jpg",res)  
})
router.get('/2eme%20bac.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/2eme bac.jpg",res)  
})
router.get('/rababhajarnizarayman.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/rababhajarnizarayman.jpg",res)  
})
router.get('/nadaayman.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/nadaayman.jpg",res)  
})
router.get('/hajarayman.jpeg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpeg)
    utils.getFile("public/img/hajarayman.jpeg",res)  
})
router.get('/3ars.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/3ars.jpg",res)  
})
router.get('/ayoubhaitam.jpeg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpeg)
    utils.getFile("public/img/ayoubhaitam.jpeg",res)  
})
router.get('/mesfreres.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/mesfreres.jpg",res)  
})
router.get('/foter.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/foter.jpg",res)  
})
router.get('/logo-wac.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/logo-wac.png",res)  
})
router.get('/page-une-central.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/page-une-central.png",res)  
})
router.get('/twitter.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/twitter.png",res)  
})
router.get('/ig.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/ig.png",res)  
})
router.get('/youtube.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/youtube.png",res)  
})

router.get('/wac-history.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/wac-history.jpg",res)  
})
router.get('/Wydad_en_1940.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/Wydad_en_1940.jpg",res)  
})
router.get('/Equipe_du_Wydad_1942.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/Equipe_du_Wydad_1942.jpg",res)  
})
router.get('/pere-jego.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/pere-jego.jpg",res)  
})
router.get('/champions-league.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/champions-league.png",res)  
})
router.get('/botola-trophee.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/botola-trophee.png",res)  
})
router.get('/coupe-trone.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/coupe-trone.png",res)  
})
router.get('/super-coupe.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/super-coupe.png",res)  
})
router.get('/logo-wac-footer-2019.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/logo-wac-footer-2019.png",res)  
})
router.get('/film-wydad-oumkaltoum.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/film-wydad-oumkaltoum.jpg",res)  
})
router.get('/fb.png',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.png)
    utils.getFile("public/img/facebook.png",res)  
})

router.get('/.jpg',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.jpg)
    utils.getFile("public/img/",res)  
})
router.get('/zoomunzoom.js',(req,res)=>{
    res.writeHead(httpStatus.OK, contentTypes.js)
    utils.getFile("public/js/zoomunzoom.js",res)  
})

http.createServer(router.handle).listen(port)