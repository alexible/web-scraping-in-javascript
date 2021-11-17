// fuel
const request = require("request-promise");
const cheerio = require("cheerio");

async function getPriceData() {
    const result = await request.get(
        "https://www.roadrangerusa.com/fuel/check-fuel-prices"
    );
    const $ = cheerio.default.load(result);
    const scrapedRows = [];
    $("table tr").each((index, element) => {
        if (index === 0) return true;
        const th = $(element).find("th");
        const location = th.text();
        const td = $(element).find("td");
        const price = $(td[3]).text();
        const scrapedRow = { location, price }; 
        scrapedRows.push(scrapedRow); 
    });
    console.log(scrapedRows);

}
getPriceData();