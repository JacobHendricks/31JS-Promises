let url = "http://numbersapi.com";


// // 1.
// axios.get(`${url}/1/trivia?json`)
//   .then(res => {
//     console.log("1-1 RESOLVED!")
//     // console.log(res )
//     console.log(res.data.text)
//     // return axios.get(res.data.residents[0])
//   })
//   .catch(err => console.log("1-1 REJECTED!!", err))

// // 2.
axios.get(`${url}/1/trivia?json`)
  .then(res => {
    console.log("1-2.a RESOLVED!")
    console.log(res.data.text)
    $("#div1").append(`<p>${res.data.text}</p>`)
    return axios.get(`${url}/2/trivia?json`)
  })
  .then(res => {
    console.log("1-2.b RESOLVED!")
    console.log(res.data.text)
    $("#div1").append(`<p>${res.data.text}</p>`)
    return axios.get(`${url}/3/trivia?json`)
  })
  .then(res => {
    console.log("1-2.c RESOLVED!")
    console.log(res.data.text)
    $("#div1").append(`<p>${res.data.text}</p>`)
    return axios.get(`${url}/4/trivia?json`)
  })
  .then(res => {
    console.log("1-2.d RESOLVED!")
    console.log(res.data.text)
    $("#div1").append(`<p>${res.data.text}</p>`)
  })
  .catch(err => console.log("1-2 REJECTED!!", err))

// // 3.
  axios.get(`${url}/7/trivia?json`)
  .then(res => {
    console.log("1-3.a RESOLVED!")
    console.log(res.data.text)
    $("#div2").append(`<p>${res.data.text}</p>`)
    return axios.get(`${url}/7/trivia?json`)
  })
  .then(res => {
    console.log("1-3.b RESOLVED!")
    console.log(res.data.text)
    $("#div2").append(`<p>${res.data.text}</p>`)
    return axios.get(`${url}/7/trivia?json`)
  })
  .then(res => {
    console.log("1-3.c RESOLVED!")
    console.log(res.data.text)
    $("#div2").append(`<p>${res.data.text}</p>`)
    return axios.get(`${url}/7/trivia?json`)
  })
  .then(res => {
    console.log("1-3.d RESOLVED!")
    console.log(res.data.text)
    $("#div2").append(`<p>${res.data.text}</p>`)
  })
  .catch(err => console.log("1-3 REJECTED!!", err))


// let favNumber = 5;
// let baseURL = "http://numbersapi.com";

// // 1.
// $.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
//   console.log(data);
// });

// // 2.
// let favNumbers = [7, 11, 22];
// $.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
//   console.log(data);
// });

// // 3.
// Promise.all(
//   Array.from({ length: 4 }, () => {
//     return $.getJSON(`${baseURL}/${favNumber}?json`);
//   })
// ).then(facts => {
//   facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
// });
