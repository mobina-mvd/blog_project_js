const tblBody = $("#tableBody");

const api = new API();

$(function () {
  api
    .getAll()
    .then((blogs) => {
      let output = "";
      blogs.forEach((blog) => {
        output += `
            <tr class="odd gradeX">

                                            <td>${blog.id}</td>
                                            <td class="hidden-phone">${blog.title}</td>
                                            <td class="center hidden-phone">${blog.date}</td>
                                            <td class="hidden-phone">
                                                <button data-toggle="button" class="btn btn-danger">
                                                    <i class="icon-remove"></i> حذف
                                                </button>
                                                <button data-toggle="button" class="btn btn-default">
                                                    <i class="icon-edit"></i> ویرایش
                                                </button>
                                                <button data-toggle="button" class="btn btn-info">
                                                    <i class="icon-eye-open"></i> مشاهده
                                                </button>
                                            </td>
                                        </tr>
              `;
      });

      tblBody.append(output);
    })
    .catch((err) => console.error(err));

  const data = {
    title: "عنوان مقاله",
    text: "متن تکست مقاله هستش",
    image: "https://heroshopp.ir/api_demo/storage/organic_farrming.jpg",
    date: "14041020",
  };
  //   api
  //     .create(data)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => console.error(err));

  //   api
  //     .delete(20)
  //     .then((result) => console.log(result))
  //     .catch((err) => console.error(err));
});
