const createBlogBtn = $("#createBlogBtn");

const api = new API();
const ui = new UI();

$(function () {
  createBlogBtn.click(createBlog);
});

function createBlog(e) {
  e.preventDefault();
  const originalTextBtn = createBlogBtn.html();

  createBlogBtn
    .html('<span class="icon-spinner animate-spin"></span> در حال ارسال...')
    .prop("disabled", true);

  const title = $("#title").val();
  const date = $("#date").val();
  const text = $("#text").val();

  const blog = { title, text, date };
  api
    .create(blog)
    .then((result) => {
      console.log(result);
      ui.showMessage("بلاگ با موفقیت درج شد.", "success");
      //   window.location.href = "blog_list.html";
    })
    .catch((err) => {
      console.error(err);
      ui.showMessage(err.message, "error");
    })
    .finally(() => {
      createBlogBtn.html(originalTextBtn).prop("disabled", false);
    });
}
