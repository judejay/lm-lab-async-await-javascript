import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {
  try {
   const data = await (await fetch(apiEndPoint)).json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }    
};

fetchData(jsonTypicode);
