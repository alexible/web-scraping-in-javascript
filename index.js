//console.log('Hello world!')
const request = require("request-promise");
const cheerio = require("cheerio");

async function main() {
    const result = await request.get(
        "https://www.roadrangerusa.com/fuel/check-fuel-prices"
    );
    const $ = cheerio.default.load(result);
    const scrapedRows = [];
    $("table tr").each((index, element) => {
        const th = $(element).find("th");
        const location = th.text()
        const td = $(element).find("td").last();
        const price = td.text()
        const scrapedRow = { location, price }; 
        scrapedRows.push(scrapedRow); 
    });
    console.log(scrapedRows);

}
main();