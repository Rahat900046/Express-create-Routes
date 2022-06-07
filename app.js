const express = require('express')
const res = require('express/lib/response')
const morgan = require('morgan')
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')

const app = express()
app.use(morgan('dev'))

app.use('/user', userRouter)
app.use('/posts', postRouter)
// app.get('/products/:prodId/reviews/:reviewId',(req,res)=>{
//     console.log(req.params);
//     res.send('I am Listening'+req.params.prodId)
// })

app.get('/', (req, res) => {
    res.send('<h1>This is Home PAGE..NodeJS is Awesome!!!!!</h1>')
})
const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
    console.log(`Server is Running On PORT ${PORT}`);
})