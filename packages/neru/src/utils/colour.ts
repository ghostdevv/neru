export const coloured = (text: string, code: string | number) =>
    `\x1b[1m\x1b[${code}m${text}\x1b[22m\x1b[39m`;
