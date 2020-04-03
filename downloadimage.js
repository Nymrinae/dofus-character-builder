const urls = ['http://static.ankama.com/dofus/www/game/items/200/1001.png']
const api = 'https://fr.dofus.dofapi.fr/equipments'
const fs = require('fs')
const http = require('http')
const https = require('https')

for (url of urls) {
  let i = 0
  const fileName = url.split('/').slice(-1)[0]
  const file = fs.createWriteStream(fileName)
  
  http.get(url, res => res.pipe(file))
  https.get(api, function(res) {

    console.log("Got response: " + res.statusCode);
  
    res.on("data", e => {
      console.log("BODY: " + e.map(e => e)['id']);
      i++
    });
  })
}

/* const fs = require('fs')
const Axios = require('axios')

async function downloadImage () {
  const url = 'https://static.ankama.com/dofus/www/game/items/200/1001.png'
  const writer = fs.createWriteStream('test.png')

  const response = await Axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
} */