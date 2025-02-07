const getData = () => {
  return fetch(
    "https://test-a761d-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};

export default getData;
