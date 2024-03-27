import axios from "axios";

/*
  Get
*/
export async function getUsers() {
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
  
      return data.data;
    } catch (err) {
      console.error(err);
    }
  }