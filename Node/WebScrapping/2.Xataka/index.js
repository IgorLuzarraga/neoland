import fs from "fs";
import inquirer from "inquirer";
import puppeteer from "puppeteer";

/// tenemos que meter una variable global para meter una palabra que vamos a buscar en la pagina game

const scrapping = async (keyWord) => {
  const BASE_URL = "https://www.xataka.com/mejores-ofertas/ordenadores-e-informatica";

  /// pomemos que el navegador se maximice
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();

  await page.goto(BASE_URL);

  // // DARLE CLICK AL INPUT  de busqueda
  // await page.click("#searchinput");
  // // Le metemos un valor al input y le presiono a Enter
  // await page.type("#searchinput", keyWord);
  // await page.keyboard.press("Enter");

  // esperamos 8segundos
  await page.waitForTimeout(8000);
  //Baje hasta el fondo pillando el elemento a donde queremos viajar
  await page.evaluate(() => {
    const element = document.querySelector(".foot-external");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(6000);

  // await page.evaluate(() => {
  //   const element = document.getElementById("l-footer");
  //   const y = element.getBoundingClientRect().top + window.pageYOffset;
  //   window.scrollTo({ top: y });
  // });
  // await page.waitForTimeout(6000);

  //! Ahora guardamos los datos de los nodos

  const items = await page.$$eval("div.article-asset-container", (nodes) =>
    nodes.map(node => 
        ({
          title: node.querySelector(".ficha-compra-title")?.innerText,
          description: node.querySelector(".ficha-compra-desc")?.innerText,
          quote: node.querySelector(".ficha-compra-quote")?.innerText,
          price: node.querySelector(".ficha-compra-price-original")?.innerText,
        })
      )
    )

  //items.pop();

  await browser.close();

  const isNotEmpty = (obj) =>
    Object.keys(obj).length !== 0

const itemsClean = items.filter(isNotEmpty)

const dataString = JSON.stringify(itemsClean);

  fs.writeFile(
    `${keyWord.replace(" ", "").toLowerCase()}.json`,
    dataString,
    () => {
      console.log("Archivo escrito");
    }
  );
};

inquirer
  .prompt([
    {
      name: "fileName",
      message: "File name to store the scrapping result? ",
    },
  ])
  .then((answers) => {
    let keyWord = answers.fileName;
    scrapping(keyWord);
  });
