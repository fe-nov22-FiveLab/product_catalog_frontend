export const countNumberOfPages = (pageLinkCount: number) => {
  const pageLinkData: number[] = [];

  for (let i = 1; i <= pageLinkCount; i++) {
    pageLinkData.push(i);
  }

  return pageLinkData;
};
