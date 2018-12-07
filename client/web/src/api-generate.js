const swaggerGen = require('swagger-vue')
const fs = require('fs')
const path = require('path')
const axios = require('axios')
axios.get('http://localhost:5000/swagger/v1/swagger.json').then(resp => {
  let opt = {
    swagger: resp.data,
    moduleName: 'api',
    className: 'api'
  }
  const codeResult = swaggerGen(opt)
  fs.writeFileSync(path.join(__dirname, './services/api.js'), codeResult)
})
