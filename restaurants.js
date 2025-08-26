const restaurants = [
             {
    name: "Kärrtorps krog",
    rating: 3.5,
    votes: 88,
    source: "Google",
    price: "100-200 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/df/ba/45/bild-pa-fikan-och-teerna.jpg?w=1100&h=600&s=1",
    link: "https://maps.app.goo.gl/Jj8zyA6RMWdS1D9U8",
    place: "Kärrtorp",
  },
   {
     name: "Karl o Kristinas Wärdshus",
    rating: 4.3,
             votes: 433,
             source: "Google",
    price: "100-200 kr",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/06/36/38/70/karl-o-kristinas.jpg",
    link: "https://maps.app.goo.gl/S8P52naZy8PQoU7UA",
             place: "Skarpnäck",
  }, 
          {
    name: "Konditori Santa Fé",
    rating: 4.4,
    votes: 377,
    source: "Google",
    price: "1-100 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/df/ba/45/bild-pa-fikan-och-teerna.jpg?w=1100&h=600&s=1",
    link: "https://maps.app.goo.gl/kfJesB4T5uE4uD3QA",
    place: "Kärrtorp",
  },
    {
    name: "Torpet i Orhem",
    rating: 4.4,
    votes: 362,
    source: "Google",
    price: "100-200 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/44/93/78/nya-parasoller-pa-uteservering.jpg?w=600&h=-1&s=1",
    link: "https://maps.app.goo.gl/weyzqZH5q1TpN43h6",
    place: "Skarpnäck",
  },

   {
    name: "Adams Kafé",
    rating: 4.7,
    votes: 334,
    source: "Google",
    price: "1-100 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/d0/fd/4d/bilder-fran-adams-kafe.jpg?w=600&h=600&s=1",
    link: "https://maps.app.goo.gl/M7QTjcPFaDT1oFc59",
    place: "Skarpnäck",
  },

   {
    name: "BOC Stockholm",
    rating: 4.7,
    votes: 346,
    source: "Google",
    price: "100-200 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/2a/68/a9/boc-stockholm-i-skarpnack.jpg?w=600&h=600&s=1",
    link: "https://maps.app.goo.gl/xtWoFWK4SduQNXsE6",
    place: "Skarpnäck",
  },

   {
    name: "Chow Thai Restaurang",
    rating: 4.2,
    votes: 163,
    source: "Google",
    price: "100-200 kr",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRoYWklMjBmb29kfGVufDB8fDB8fHww",
    link: "https://maps.app.goo.gl/2dnKtCbkFJQ93yeH9",
    place: "Skarpnäck",
  },


  {
    name: "O&TAKI Sushi och Pokè bowl",
    rating: 4.7,
    votes: 119,
    source: "Google",
    price: "100-200 kr",
    image: "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://maps.app.goo.gl/bWGX1QPR47j8yLnr7",
    place: "Skarpnäck",
  },
{
    name: "Lilla Bagis",
    rating: 4.2,
votes: 245,
source: "Google",
    price: "1-200 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/1c/a9/a7/the-interior.jpg?w=300&h=300&s=1",
    link: "https://maps.app.goo.gl/2qhpB9JYw9z3jytL8",
    place: "Bagarmossen",
  },
{
    name: "Restaurang Tina Maria",
    rating: 4.2,
votes: 146,
source: "Google",
    price: "200-300 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/35/e5/69/caption.jpg?w=300&h=300&s=1",
    link: "https://maps.app.goo.gl/GiKUTdBpLtRNZCMv8",
    place: "Bagarmossen",
  },
{
    name: "Wild@Eating Krog, gårdsbutik..",
    rating: 5,
votes: 31,
source: "Google",
    price: "200-300 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/4e/23/b9/mysig-liten-viltkrog.jpg?w=1400&h=800&s=1",
    link: "https://maps.app.goo.gl/vrALbaK8WpagX2T78",
    place: "Bagarmossen",
  },
{
    name: "Bagarmossen Kök & Bar",
    rating: 4.2,
votes: 172,
source: "Google",
    price: "100-200 kr",
    image: "https://images.unsplash.com/photo-1640812570037-ea415861315b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbWJ1cmdhcmV8ZW58MHx8MHx8fDA%3D",
    link: "https://maps.app.goo.gl/vrALbaK8WpagX2T78",
    place: "Bagarmossen",
  },

{
    name: "Jesses krog",
    rating: 4.3,
votes: 525,
source: "Google",
    price: "100-200 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/73/d7/2d/jesses-krog.jpg?w=300&h=300&s=1",
    link: "https://maps.app.goo.gl/FThJfhhtZX3vWGuAA",
    place: "Kärrtorp",
  },
{
    name: "Kokvrån",
    rating: 4.5,
votes: 378,
source: "Google",
    price: "1-200 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/84/7d/90/img-20170404-104621-largejpg.jpg?w=1400&h=800&s=1",
    link: "https://maps.app.goo.gl/LPuNGNadnNeZAdtc8",
    place: "Kärrtorp",
  },

{
    name: "Kärrtorps Deli",
    rating: 5,
votes: 37,
source: "Google",
    price: "1-100 kr",
    image: "https://plus.unsplash.com/premium_photo-1668618296880-f7c66a5239b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91bW1vc3xlbnwwfHwwfHx8MA%3D%3D",
    link: "https://maps.app.goo.gl/aTTiqX2tFLqgBPst6",
    place: "Kärrtorp",
  },

{
    name: "Sushi&poke",
    rating: 4.7,
votes: 63,
source: "Google",
    price: "100-200 kr",
    image: "https://plus.unsplash.com/premium_photo-1668146927669-f2edf6e86f6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://maps.app.goo.gl/LYiX1ZMnKVfzwNFv6",
    place: "Kärrtorp",
  },

{
    name: "99 sushi & Ramen",
    rating: 4.4,
votes: 175,
source: "Google",
    price: "100-200 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/3f/b1/2d/99-ramen-125kr-honsbuljong.jpg?w=800&h=800&s=1",
    link: "https://maps.app.goo.gl/3dFgRACaiQtoEFqF8",
    place: "Kärrtorp",
  },
{
    name: "Nytorpet Bar & Bistro",
    rating: 4.4,
votes: 568,
source: "Google",
    price: "100-300 kr",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/87/09/89/lacker.jpg?w=800&h=800&s=1",
    link: "https://maps.app.goo.gl/krvaTnqVTfbts2Am7",
    place: "Kärrtorp",
  },

{
    name: "Thai Wok Kärrtorp",
    rating: 3.5,
votes: 44,
source: "Google",
    price: "100-200 kr",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRoYWklMjBmb29kfGVufDB8fDB8fHww",
    link: "https://maps.app.goo.gl/C9gWA451umrUcDEY9",
    place: "Kärrtorp",
  },

{
    name: "Pizzeria Marina",
    rating: 4,
votes: 74,
source: "Google",
    price: "1-100 kr",
    image: "https://images.unsplash.com/photo-1611915365928-565c527a0590?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fHww",
    link: "https://maps.app.goo.gl/YW46gf4faMSMVisp6",
    place: "Kärrtorp",
  },


];

let sortKey = "rating";

function renderList() {
  const list = document.getElementById("restaurant-list");
  list.innerHTML = "";

  const sorted = [...restaurants].sort((a, b) => {
    if (sortKey === "rating") return b.rating - a.rating;
    if (sortKey === "price") return a.price.length - b.price.length;
    return 0;
  });

  sorted.forEach((res) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${res.image}" alt="${res.name}">
      <div class="card-content">
        <h2>${res.name}</h2>
        <p>Betyg: ⭐ ${res.rating}</p>
        <p>Antal omdömen: ${res.votes}</p>
        <p>Källa för betyg: ${res.source}</p>
        <p>Prisnivå: ${res.price}</p>
        <p>Område: ${res.place}</p>
        <a href="${res.link}" target="_blank">Visa på Google Maps</a>
      </div>
    `;

    list.appendChild(card);
  });
}

function sortBy(key) {
  sortKey = key;
  renderList();
}

// Render första gången

renderList();


