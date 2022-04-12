const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const length = (parseInt(urlParams.get("length")) > 0) ? parseInt(urlParams.get("length")) : 16;
const ucl = (urlParams.get("uppers") === "true") || false;
const lcl = (urlParams.get("lowers") === "true") || false;
const num = (urlParams.get("numbers") === "true") || false;
const spe = (urlParams.get("specials") === "true") || false;
const cus = (urlParams.get("customs") === "true") || false;
const cusVal = cus && urlParams.get("custValues") ? atob(urlParams.get("custValues")) : "";
const dup = (urlParams.get("dupCheck") === "true") || false;

document.body.innerText = GenPassword(length, ucl, lcl, num, spe, cus, cusVal, dup);