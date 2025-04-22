//node js

const express = require('express')
const app = express()
const port = 5000
const {User} = require("./modules/User");
const bodyPaser = require("./models/User");
const bodyParser = require('body-parser');

//application/x-www-form-urlencoded 를 분석해서 가져올 수 있도록 해줌
app.use(bodyPaser.urlencod( {extended: true} ));

//application/json 관련 정보를 분석해서 가져올 수 있도록 해줌
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/register', (req, res) => {
  //회원 가입시 정보가 client에서 넘어오면 db에 저장
  const user = new User(req.body)
  user.save( (err, userInfo) => {
    return res.status(200).json({
      success: true
    })
  })
})

