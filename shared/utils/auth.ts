export const getAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
};

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};
