import { csvParse, autoType } from "d3-dsv";
async function getData(url, fetch = window.fetch) {
  let response = await fetch(url);
  let string = await response.text();
  let data = csvParse(string, autoType);
  return data;
}
const prerender = true;
async function load({ fetch }) {
  let places = await getData(`/data/household-type.csv`, fetch);
  return { places };
}
export {
  load,
  prerender
};
