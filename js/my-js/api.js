class API {
  constructor() {
    this.endPoint;
  }

  async getAll() {
    this.endPoint = "https://heroshopp.ir/api_demo/api/test/blogs";
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
      throw new Error(`Error on Create Post with ${res.status} Code`);
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
      throw new Error(`Error on Create Post with ${res.status} STATUS Code`);
    }
  }

  async delete(id) {
    const res = await fetch(`${this.endPoint}/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Error on DELETE Post with ${res.status} STATUS Code`);
    }
  }
}
