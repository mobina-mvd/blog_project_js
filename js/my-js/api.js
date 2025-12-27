class API {
  constructor() {
    this.endPoint = "https://heroshopp.ir/api_demo/api/test/blogs";
  }

  async getAll() {
    const res = await fetch(this.endPoint);

    if (res.ok) {
      const data = await res.json();
      console.log(data.data);

      return data.data;
    } else {
      throw new Error(`درخواست با مشکل مواجه شد: ${res.status}`);
    }
  }

  async create(data) {
    const blog = {
      title: data.title,
      text: data.text,
      image: data.image,
      date: data.date,
    };

    const res = await fetch(this.endPoint, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Error on Create Blog with ${res.status} Code`);
    }
  }

  async update(id, data) {
    const blog = {
      title: data.title,
      text: data.text,
      image: data.image,
      date: data.date,
    };

    const res = await fetch(`${this.endPoint}/${id}`, {
      method: "PUT",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Error on Create Blog with ${res.status} STATUS Code`);
    }
  }

  async delete(id) {
    const res = await fetch(`${this.endPoint}/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Error on DELETE Blog with ${res.status} STATUS Code`);
    }
  }

  async getBlog(blogId) {
    const res = await fetch(`${this.endPoint}/${blogId}`);

    if (res.ok) {
      const data = await res.json();
      return data.data;
    } else {
      throw new Error(`Error on GET Blog with ${res.status} STATUS Code`);
    }
  }
}
