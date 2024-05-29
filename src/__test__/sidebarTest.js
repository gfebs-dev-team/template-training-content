require('chromedriver')
const { Builder, By, Key } = require('selenium-webdriver')
const fs = require('fs')

describe('Sidebar Test', function () {
  const slides = fs.readdirSync('src/gfebs-essentials')
  let slideComp = []

  slides.forEach((s) => {
    if (s.startsWith('S')) {
      const file = fs.readFileSync(`src/gfebs-essentials/${s}`).toString()
      let sData = file
        .slice(file.indexOf('const slideData') + 18, file.indexOf('const slides'))
        .replaceAll('{\n  ', '{\n  "')
        .replaceAll(':', '":')
        .replaceAll(',\n  ', ',\n  "')
        .replaceAll("'", '"')
        .replace(/"img": (.+?)\n/, '"img": "$1",\n')
        .replace(/"Section (.)"/, '"Section $1')
      console.log(JSON.parse(sData))
      //console.log(sData)
    }
  })

  //console.log(JSON.parse(slideComp[0]))

  // it('check link', async function () {
  //   let driver = await new Builder().forBrowser('chrome').build()
  //   try {
  //     //open the dev server
  //     await driver.get('https://localhost:5173')
  //     //find the search box and enter a note
  //     await driver
  //       .findElement(By.css('#root > .App > #new-item > input'))
  //       .sendKeys('Hello Selenium', Key.RETURN)
  //     //get the note's text
  //     let note = await driver.findElement(By.css('#items > div > p')).getText()
  //     //assert that the note's text is the same as the input text "Hello Selenium"
  //     assert.equal(note, 'Hello Selenium')
  //     console.log('TEST PASSED')
  //   } finally {
  //     //close the browser
  //     await driver.quit()
  //   }
  // })
})
