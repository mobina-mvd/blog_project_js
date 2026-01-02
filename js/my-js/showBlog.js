const saveBtn = $("#submit");

const api = new API();
const ui = new UI();

$(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");
  //   if (!blogId) {
  //     alert("شناسهٔ بلاگ یافت نشد!");
  //     window.location.href = "blog_list.html";
  //   }
  ui.loading(true);
  api
    .getBlog(blogId)
    .then((blog) => {
      ui.loading(false);
      ui.showDataOnShowBlogPage(blog);
    })
    .catch((err) => {
      ui.loading(false);
      console.error(err);
    });
});
