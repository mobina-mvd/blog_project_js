const api = new API();

$(function () {
  api
    .getAll()
    .then((result) => {})
    .catch((err) => console.error(err));
});
