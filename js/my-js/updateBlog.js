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
  api
    .getBlog(blogId)
    .then((blog) => {
      ui.showDataOnUpdatePage(blog);
    })
    .catch((err) => {
      console.error(err);
    });

  saveBtn.click(updateBlog);
});

function updateBlog(e) {
  e.preventDefault();
  const originalTextBtn = saveBtn.html();
  saveBtn
    .html('<span class="icon-spinner animate-spin"></span> در حال ارسال...')
    .prop("disabled", true);
  const urlParams = new URLSearchParams(window.location.search);
  const blogId = urlParams.get("id");

  const blog = {
    title: ui.titleBox.val(),
    text: ui.textBox.val(),
    date: ui.dateBox.val(),
  };

  api
    .update(blogId, blog)
    .then((result) => {
      console.log(result);
      ui.showMessage("بلاگ با موفقیت آپدیت شد.", "success");
      //   window.location.href = "blog_list.html";
    })
    .catch((err) => {
      console.error(err);
      ui.showMessage(err.message, "error");
    })
    .finally(() => {
      saveBtn.html(originalTextBtn).prop("disabled", false);
    });
}
