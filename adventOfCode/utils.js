import { readFileSync } from "fs";
/**
 *
 * @param {string} path
 * @returns {string[]}
 */
export const getData = (path) => readFileSync(path).toString().split("\n");

/**
 *
 * @param {number[]} data
 * @returns
 */
export const sum = (data) => data.reduce((p, c) => p + c, 0);
