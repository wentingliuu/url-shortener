function createShortenUrl () {
  const charsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const charsLower = charsUpper.toLowerCase()
  const numbers = '0123456789'

  const chars = charsUpper + charsLower + numbers
  let shortenUrl = ''

  for (let i = 0; i < 5; i++) {
    shortenUrl += chars[Math.floor(Math.random() * chars.length)]
  }

  return shortenUrl
}

module.exports = createShortenUrl
