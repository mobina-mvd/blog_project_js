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

  create() {}
  update() {}
  delete() {}
}
