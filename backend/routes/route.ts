import express from 'express'
const route = express.Router();



route.get('/', (req,res,next)=>{
    try {
        res.send('200')
    } catch (error) {
        console.log(error);
    }
})



export default route