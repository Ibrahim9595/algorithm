//https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
/**
 * @param {number[]} h
 * @param {string} word
 */

const designerPdfViewer = (h, word) =>
  Math.max(
    ...word.split("").map((el) => h[el.charCodeAt(0) - "a".charCodeAt(0)])
  ) * word.length;

console.log(
  designerPdfViewer(
    "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7".split(" "),
    "zaba"
  )
);
