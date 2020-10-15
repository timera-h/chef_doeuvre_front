import axios from "axios";

export class APIHandler {
  constructor(APIPrefix) {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL + APIPrefix || "",
    });
  }

  
  createOne(payload) {
    return this.instance.post("/", payload);
  }

  getAll(cat) {
    console.log(":)", cat)
    return this.instance.get("/",  {
      params: {
        cat: cat ? cat : "all"
      }
    }); // retourne une Promesse
  }

  getById(id) {
    return this.instance.get("/" + id)
  }

  deleteOne(id) {
    return this.instance.delete("/" + id)
  }
}