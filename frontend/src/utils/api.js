export const showErrorAlert = (error) => {
  if (error?.response?.data?.message) {
    alert(error?.response?.data?.message);
  }
};
