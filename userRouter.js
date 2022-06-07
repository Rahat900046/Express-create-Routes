const router=require('express').Router()

router.get('/login',(req,res)=>{
    res.send('A am LogIn Page')
})

router.get('/logOut',(req,res)=>{
    res.send('A am LogOut Page')
})

router.get('/signup',(req,res)=>{
    res.send('A am SignUp Page')
})

module.exports=router