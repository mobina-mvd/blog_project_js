const ui = new UI();

const tableBody = $("#tableBody");

const api = new API();

$(function () {
  api
    .getAll()
    .then((blogs) => {
      ui.showBlogsOnTablePage(blogs);
    })
    .catch((err) => console.error(err));

  const data = {
    title: "عنوان مقاله",
    text: "متن تکست مقاله هستش",
    date: "1404-10-20",
  };
  // api
  //   .create(data)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => console.error(err));

  tableBody.click(deleteBlog);
});

async function deleteBlog(e) {
  if (e.target.classList.contains("btn-delete")) {
    const id = e.target.dataset.id;
    console.log(id);

    if (!confirm("آیا از حذف این مقاله اطمینان دارید؟")) {
      return;
    }

    try {
      await api.delete(id);

      const row = e.target.closest("tr");
      if (row) {
        row.remove();
      }
      console.log("Success DELETE Blog");
    } catch (err) {
      console.error(err);
    }
  }
}
