class UI {
  constructor() {
    this.tableBody = $("#tableBody");
    this.titleBox = $("#title");
    this.textBox = $("#text");
    this.dateBox = $("#date");
  }

  showBlogsOnTablePage(dataList) {
    let output = "";

    dataList.forEach((data) => {
      // let date = this.#formatJalaliDate(data.date);
      output += `
            <tr class="odd gradeX">
                <td class="blogId">${data.id}</td>
                <td class="hidden-phone">${data.title}</td>
                <td class="center hidden-phone">${data.date}</td>
                <td class="hidden-phone">
                    <button data-toggle="button" data-id="${data.id}" class="btn btn-danger btn-delete">
                        <i class="icon-remove"></i> حذف
                    </button>
                    <a href="update_blog.html?id=${data.id}" class="btn btn-default">
                        <i class="icon-edit"></i> ویرایش
                    </a>
                    <a href="show_blog.html?id=${data.id}" class="btn btn-info">
                        <i class="icon-eye-open"></i> مشاهده
                    </a>
                </td>
            </tr>
            `;
    });

    this.tableBody.append(output);
  }

  #formatJalaliDate(dateInput) {
    let dateStr = String(dateInput);

    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);

    return `${year}-${month}-${day}`;
  }

  showDataOnUpdatePage(data) {
    this.titleBox.val(data.title);
    this.textBox.val(data.text);
    this.dateBox.val(data.date);
  }

  showMessage(message, type = "info") {
    const alertClasses = {
      success: "alert-success",
      error: "alert-danger",
      warning: "alert-warning",
      info: "alert-info",
    };

    const alertClass = alertClasses[type] || alertClasses.info;

    const alertHTML = `
      <div class="alert ${alertClass} alert-block fade in" role="alert">
        ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;

    const container = $("#message-container");

    if (container) {
      container.append(alertHTML);

      setTimeout(() => {
        const currentAlert = container.find(".alert");
        $(currentAlert).removeClass("show").addClass("fade");
        $(currentAlert).remove();
      }, 5000);
    } else {
      console.warn("UI: #message-container not found in DOM!");
    }
  }
}
