//console.log('Hello world!')
const request = require("request-promise");
const cheerio = require("cheerio");

async function main() {
    //console.log("df");
    const result = await request.get(
        "https://www.roadrangerusa.com/fuel/check-fuel-prices"
    );
    const $ = cheerio.default.load(result);
    //console.log(result); 
    const header = $("h1").text();
    console.log(header);
    const scrapedRows = [];
    const table = $("table > tbody > tr").each((element) => {
      
        const th = $(element).find("th");
        const location = th.text()
        console.log('::: location: ', location)
        const td = $(element).find("td").last();
        const price = td.text()
        console.log('::: price: ', price)
        const scrapedRow = { location, price }; 
        scrapedRows.push(scrapedRow); 
    });
    console.log(scrapedRows);

}
main();