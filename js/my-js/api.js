class API {
  constructor() {
    this.endPoint = "https://heroshopp.ir/api_demo/api/test/blogs";
  }

  async getAll() {
    try {
      const res = await fetch(this.endPoint);

      if (res.ok) {
        const data = await res.json();
        console.log(data.data);

        return data.data || [];
      } else {
        let errorMessage = "";
        switch (res.status) {
          case 404:
            errorMessage = " اطلاعاتی یافت نشد.";
            break;
          case 500:
            errorMessage = "خطای داخلی سرور. لطفاً بعداً تلاش کنید.";
            break;
          case 400:
            errorMessage = "درخواست نامعتبر است.";
            break;
          default:
            errorMessage = `خطا در دریافت داده‌ها (کد: ${res.status}).`;
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      if (
        error.message.includes("fetch") ||
        error.message.includes("Network") ||
        error.name === "TypeError"
      ) {
        throw new Error("سرور در دسترس نیست یا اتصال اینترنت شما قطع است.");
      }
      throw error;
    }
  }

  async create(data) {
    const blog = {
      title: data.title,
      text: data.text,
      image: data.image,
      date: data.date,
    };

    try {
      const res = await fetch(this.endPoint, {
        method: "POST",
        body: JSON.stringify(blog),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        let errorMessage = "";
        switch (res.status) {
          case 422:
            errorMessage = "لطفاً اطلاعات فرم را به درستی وارد کنید.";
            break;
          case 400:
            errorMessage = "درخواست نامعتبر است.";
            break;
          case 500:
            errorMessage = "خطای داخلی سرور. لطفاً بعداً تلاش کنید.";
            break;
          case 404:
            errorMessage = "آدرس سرور یافت نشد.";
            break;
          default:
            errorMessage = `خطایی رخ داده است. لطفاً دوباره تلاش کنید. (کد خطا ${res.status}`;
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      if (
        error.message.includes("fetch") ||
        error.message.includes("Network") ||
        error.name === "TypeError"
      ) {
        throw new Error("سرور در دسترس نیست یا اتصال اینترنت شما قطع است.");
      }
      throw error;
    }
  }

  async update(id, data) {
    const blog = {
      title: data.title,
      text: data.text,
      image: data.image,
      date: data.date,
    };

    try {
      const res = await fetch(`${this.endPoint}/${id}`, {
        method: "PUT",
        body: JSON.stringify(blog),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        return res.json();
      } else {
        let errorMessage = "";
        switch (res.status) {
          case 422:
            errorMessage = "لطفاً اطلاعات فرم را به درستی وارد کنید.";
            break;
          case 400:
            errorMessage = "درخواست نامعتبر است.";
            break;
          case 500:
            errorMessage = "خطای داخلی سرور. لطفاً بعداً تلاش کنید.";
            break;
          case 404:
            errorMessage = "آدرس سرور یافت نشد.";
            break;
          default:
            errorMessage = `خطایی رخ داده است. لطفاً دوباره تلاش کنید. (کد خطا ${res.status}`;
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      if (
        error.message.includes("fetch") ||
        error.message.includes("Network") ||
        error.name === "TypeError"
      ) {
        throw new Error("سرور در دسترس نیست یا اتصال اینترنت شما قطع است.");
      }
      throw error;
    }
  }

  async delete(id) {
    try {
      const res = await fetch(`${this.endPoint}/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        const data = await res.json();
        return data;
      } else {
        let errorMessage = "";
        switch (res.status) {
          case 404:
            errorMessage = "پست مورد نظر یافت نشد.";
            break;
          case 500:
            errorMessage = "خطای داخلی سرور. پست حذف نشد.";
            break;
          case 400:
            errorMessage = "درخواست حذف نامعتبر است.";
            break;
          default:
            errorMessage = `خطا در حذف پست (کد: ${res.status}).`;
        }

        throw new Error(errorMessage);
      }
    } catch (error) {
      if (
        error.message.includes("fetch") ||
        error.message.includes("Network") ||
        error.name === "TypeError"
      ) {
        throw new Error(
          "سرور در دسترس نیست. لطفاً اتصال اینترنت خود را بررسی کنید."
        );
      }

      throw error;
    }
  }

  async getBlog(blogId) {
    try {
      const res = await fetch(`${this.endPoint}/${blogId}`);

      if (res.ok) {
        const data = await res.json();
        return data.data;
      } else {
        let errorMessage = "";
        switch (res.status) {
          case 404:
            errorMessage = "پست مورد نظر یافت نشد.";
            break;
          case 500:
            errorMessage =
              "خطای داخلی سرور. نمی‌توان اطلاعات پست را بارگذاری کرد.";
            break;
          case 400:
            errorMessage = "درخواست نامعتبر است.";
            break;
          case 401:
          case 403:
            errorMessage = "شما دسترسی لازم برای مشاهده این پست را ندارید.";
            break;
          default:
            errorMessage = `خطا در بارگذاری پست (کد: ${res.status}).`;
        }

        throw new Error(errorMessage);
      }
    } catch (error) {
      if (
        error.message.includes("fetch") ||
        error.message.includes("Network") ||
        error.name === "TypeError"
      ) {
        throw new Error(
          "سرور در دسترس نیست. لطفاً اتصال اینترنت خود را بررسی کنید."
        );
      }

      throw error;
    }
  }
}
