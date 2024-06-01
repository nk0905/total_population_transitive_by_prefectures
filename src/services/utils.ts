/**
 * ディープコピーをする
 * @param copyState コピーしたいstate
 * @returns ディープコピーしたstateのデータ
 */
export const deepCopy = <T>(copyState: T): T => {
  return JSON.parse(JSON.stringify(copyState));
};
