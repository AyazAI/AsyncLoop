const axios = require("axios");

const callAPI = async (resolve, reject) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    resolve(response);
    // console.log(response.data);
  } catch (error) {
    reject(error);
    console.log(error);
  }
};

const execute = async () => {
  let promiseArray = [];

  for (let index = 0; index < 10; index++) {
    promiseArray.push(
      new Promise((resolve, reject) => {
        callAPI(resolve, reject);
      })
    );
  }
  await Promise.all(promiseArray).then(() => console.log("DONE ASYNC"));
  console.log("After Async?");
};

execute();
