export const getTranslateValues = (matrix) => {
  const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(", ");
  return {
    x: matrixValues[4],
    y: matrixValues[5],
    z: matrixValues[0],
  };
};
