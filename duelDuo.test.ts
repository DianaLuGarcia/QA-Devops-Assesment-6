
const { Builder, Capabilities, By } = require("selenium-webdriver");

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})
afterAll(async () => {
    await (await driver).quit();
  });

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays the div with id', async () => {
    await driver.findElement(By.id("draw")).click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    await driver.sleep(5000)
    expect(displayed).toBe(true)
})

test('clicking an “Add to Duo” button displays the div with id = “player-duo”', async () => {
    await driver.findElement(By.xpath('//button[@class="bot-btn"]')).click()
    const choices = await driver.findElement(By.id('player-duo'))
    const displayed = await choices.isDisplayed()
    await driver.sleep(5000)
    expect(displayed).toBe(true)
})