function hasUniqueWindow(pages, k) {
  for (let i = 0; i <= pages.length - k; i++) {
    let window = pages.slice(i, i + k);
    let uniquePages = new Set(window);
    if (uniquePages.size === k) {
      return true;
    }
  }
  return false;
}

let pages = ["home", "about", "products", "home", "cart", "checkout"];
let k = 3;
console.log(hasUniqueWindow(pages, k)); 