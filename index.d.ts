export default separateChineseWords;
/**
 @param {string} text
 @param {{ dictPath: string, userDictPath: string }=} options
 */
export function separateChineseWords(text: string, options?: {
    dictPath: string;
    userDictPath: string;
} | undefined): string[];
