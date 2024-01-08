import { readFileSync } from "fs";

/**
 * Parse file into workable data
 * @param {string} fileData
 * @returns {commands: string[], mappings: Record<string, string[]>, DIRs: Record<string, number>}
 */
const parseData = (fileData) => {
  const [commands, preMappings] = fileData.toString().split("\n\n");

  return {
    commands: commands.split(""),
    mappings: preMappings.split("\n").reduce((m, el) => {
      const [src, destinations] = el.split(" = ");
      const [from, to] = destinations
        .replace(")", "")
        .replace("(", "")
        .split(", ");
      return Object.assign({}, m, { [src]: [from, to] });
    }, {}),
    DIRs: { L: 0, R: 1 },
  };
};

/**
 * @param {commands: string[], mappings: Record<string, string[]>, DIRs: Record<string, number>} data
 * @returns {number}
 */
const solve1 = ({ DIRs, commands, mappings }) => {
  let steps = 0;
  let ptr = 0;
  let current = "AAA";
  while (true) {
    console.log(current);
    if (current === "ZZZ") break;
    current = mappings[current][DIRs[commands[ptr]]];

    ptr = (ptr + 1) % commands.length;

    steps++;
  }

  return steps;
};

console.log(solve1(parseData(readFileSync("./input.txt"))));
