import {chromium} from 'playwright'

(async () => {
   const browser = await chromium.launch();
    // const page = await browser.newPage();
    // await page.goto('https://www.stock.com.py/Ofertas.aspx');
    //
    // const categories =  await page.locator(' .caja-categoria a');
    // const categoriesCount = await categories.count();
    // for (let i = 0; i < categoriesCount; i ++) {
    //     await categories.nth(i).click();
    //
    //     var items = await page.locator('.product-item')
    //     console.log(await categories.nth(i).innerText(),  {item: await items.allInnerTexts()})
    // }

    await browser.close();
})();
