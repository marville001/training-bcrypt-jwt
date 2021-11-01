require('dotenv').config();
const jwt = require('jsonwebtoken')

const generateToken = ()=>{
    const token = jwt.sign({id: 23, email:"johnbrian@gmail.com"},process.env.SECRET_KEY, {expiresIn: '1800s'} );
}

const verifyToken = (token)=>{
    const decodedData = jwt.decode(token, process.env.SECRET_KEY);
    console.log({decodedData});
}

verifyToken("ayJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImVtYWlsIjoiam9obmJyaWFuQGdtYWlsLmNvbSIsImlhdCI6MTYzNTc2NzA3MywiZXhwIjoxNjM1NzY4ODczfQ.XJL5xgsBnSGx_Oj30o5OCbbuJ6H6423mm3IWdJ07Zo4")

