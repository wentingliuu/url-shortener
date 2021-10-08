const express = require('express')
const router = express.Router()

const url = require('../../models/url')
const createShortenUrl = require('../../public/javascripts/createShortenUrl')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/shorten', (req, res) => {
  const originalUrl = req.body.originalUrl
  const originalUrlShow = originalUrl.slice(originalUrl.indexOf('/') + 2, originalUrl.length)
  let shortenUrl
  let shortenUrlShow
  url
    .findOne({ originalUrl })
    .lean()
    .then(url => {
      if (!url) {
        shortenUrl = `http://localhost:3000/${createShortenUrl()}`
        url.create({ originalUrl, shortenUrl })
      } else {
        shortenUrl = url.shortenUrl
      }
      shortenUrlShow = shortenUrl.slice(shortenUrl.indexOf('/') + 2, shortenUrl.length)
      return res.render('shorten', { originalUrl, originalUrlShow, shortenUrl, shortenUrlShow })
    })
    .catch(error => console.log(error))
})

router.get('/:shortenUrl', (req, res) => {
  return url
    .findOne({ shortenUrl: req.params.shortenUrl })
    .lean()
    .then(url => {
      if (!url) {
        res.redirect('/')
      } else {
        res.redirect(url.originalUrl)
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
