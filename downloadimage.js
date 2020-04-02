const urls = []
const fs = require('fs')
const http = require('http')

for (url of urls) {
  const fileName = url.split('/').slice(-1)[0]
  const file = fs.createWriteStream(fileName)
  http.get(url, res => res.pipe(file))
}