import {chromium} from 'playwright'
import {Category, Product } from './models/StockModel';

(async () => {
   const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.stock.com.py/Ofertas.aspx');

    const categories =  await page.locator(' .caja-categoria a');
    // const categoriesCount = await categories.count();
    const products: Product[] = []
    const categoriesCount = 1;
    for (let i = 0; i < categoriesCount; i ++) {
        await categories.nth(i).click();
        const items = await page.locator('.product-item')
        const productItems = await items.allInnerTexts()
        const category: Category = {name: await categories.nth(1).textContent()}
        productItems.forEach(p => {
            const splitted = p.split('\n');
            products.push({
                price: Number(splitted[0].toString().replace('Gs ', '')),
                brand: splitted.length === 4 ? splitted[1] : null,
                name: splitted.length === 4 ?  splitted[2] : splitted[1],
                unitOfMeasure: splitted[3] ?  splitted[3].includes('Un') ? 'Unidad' : 'Kilo' : null,
                category
            })
        })
    }

    console.log(products)
    await browser.close();
})();
