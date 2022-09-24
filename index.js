const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

//connect ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

//build-in middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home',{layout: 'base/base' ,title: 'Home', home: 'class="active "', profile: '', prestasi: '', mapel: '', piket: '', other: ''})
})

app.get('/profile', (req, res) => {
  res.render('profile',{layout: 'base/base' ,title: 'Profile', home: '', profile: 'class="active "', prestasi: '', mapel: '', piket: '', other: ''})
})

app.get('/prestasi', (req, res) => {
  res.render('prestasi',{layout: 'base/base' ,title: 'Prestasi', home: '', profile: '', prestasi: 'class="active "', mapel: '', piket: '', other: ''})
})

app.get('/jadwal_mapel', (req, res) => {
  res.render('jadwal_mapel',{layout: 'base/base' ,title: ' Jadwal Mapel', home: '', profile: '', prestasi: '', mapel: 'class="active "', piket: '', other: ''})
})

app.get('/Jadwal_piket', (req, res) => {
  res.render('jadwal_piket',{layout: 'base/base' ,title: 'Jadwal Piket', home: '', profile: '', prestasi: '', mapel: '', piket: 'class="active "', other: ''})
})

app.get('/other', (req, res) => {
  res.render('other',{layout: 'base/base' ,title: 'Other', home: '', profile: '', prestasi: '', mapel: '', piket: '', other: 'class="active "'})
})

app.listen(port, () => {
  console.log(`App Running!!!\nin port${port}\nhttp://localhost:3000/`)
}) 