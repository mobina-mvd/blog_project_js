class UI {
  constructor() {
    this.tableBody = $("#tableBody");
  }

  showBlogsOnTable(dataList) {
    let output = "";

    dataList.forEach((data) => {
      let date = this.#formatJalaliDate(data.date);
      output += `
            <tr class="odd gradeX">
                <td class="blogId">${data.id}</td>
                <td class="hidden-phone">${data.title}</td>
                <td class="center hidden-phone">${date}</td>
                <td class="hidden-phone">
                    <button data-toggle="button" data-id="${data.id}" class="btn btn-danger btn-delete">
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

    this.tableBody.append(output);
  }

  #formatJalaliDate(dateInput) {
    let dateStr = String(dateInput);

    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);

    return `${year}-${month}-${day}`;
  }
}
