// export default async function getResult() {
//   const response = await axios.get(
//     "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=MXtNcz88gf8ovwB4vtUEZTJFvNcdTsBm"
//   );
//   return response.data.results.length;
// }

//export default GetArticles;
//testing the API and record return from the API call
module.exports = {
  getArticles: async function () {
    const response = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=MXtNcz88gf8ovwB4vtUEZTJFvNcdTsBm"
    );
    return response.data.results.length;
  },
};
