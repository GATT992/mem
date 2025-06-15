const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const data = {
  'gatt123': {
    title: 'Notif Costum',
    description: 'Gabung sekarang untuk kejutan spesial!',
    image: 'https://example.com/fake-thumb.jpg',
    url: 'https://example.com/tujuan'
  }
}

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('form')
})

app.get('/:id', (req, res) => {
  const { id } = req.params
  const content = data[id]
  if (!content) return res.status(404).send('ID tidak ditemukan')

  res.render('og', { ...content })
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
