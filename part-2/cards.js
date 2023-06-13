let drawCard = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"

let baseURL = 'https://deckofcardsapi.com/api/deck';

// 1.
axios.get(`${drawCard}`)
  .then(res => {
    console.log("1 RESOLVED!", res.data.cards[0].value, "of", res.data.cards[0].suit)
  })


// 2.
axios.get(`${drawCard}`)
  .then(res => {
  console.log("2.1 RESOLVED!", res.data.cards[0].value, "of", res.data.cards[0].suit)
  let deckId=res.data.deck_id
  return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  })
  .then(res => {
    console.log("2.2 RESOLVED!", res.data.cards[0].value, "of", res.data.cards[0].suit)
  })

// 3.

let deckId = null;
let $btn = $('button');
let $cardArea = $('#card-area');

axios.get(`${baseURL}/new/shuffle/`)
  .then(res => {
    deckId = res.data.deck_id;
    // console.log("RES", res)
    // console.log("DECK ID", deckId)
  })


$btn.on("click", function () {
  axios.get(`${baseURL}/${deckId}/draw/`)
    .then(res => {
      // console.log("3 RESOLVED!", res.data.cards[0].value, "of", res.data.cards[0].suit)
      // console.log(res.data.deck_id, res.data.remaining)
      cardImg = res.data.cards[0].image;
      $cardArea.append(
        $('<img>', {
          src: cardImg,})
      )
      if (res.data.remaining === 0) $btn.remove();
    })
})

