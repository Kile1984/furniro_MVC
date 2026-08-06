export const subscribe = async function (email) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { succes: true };
};
