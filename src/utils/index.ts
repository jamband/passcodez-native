export const generateCode = () => {
  return [...Array(4)]
    .map(() => {
      return Math.floor(Math.random() * Math.floor(10)).toString();
    })
    .join("");
};
