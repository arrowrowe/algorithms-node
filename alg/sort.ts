const Sort: {
  [index: string]: (array: number[]) => number[];
} = {};

import bubble from './sort/bubble.ts';
Sort['bubble'] = bubble;

import shell from './sort/shell.ts';
Sort['shell'] = shell;

export default Sort;
