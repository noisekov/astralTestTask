export const getRandomTitle = (list: string[]) => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};
