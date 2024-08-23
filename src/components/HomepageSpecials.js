import React from "react";


const specials = [
  {
    name: "Greek Salad",
    price: "$12.99",
    description:
      "Famous Greek salad with crispy lettuce, peppers, olives, and feta cheese.",
    imgSrc: "/greek-salad.jpg",
  },
  {
    name: "Bruschetta",
    price: "$5.89",
    description:
      "Grilled bread smeared with garlic and seasoned with olive oil.",
    imgSrc: "/bruschetta.jpg",
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description: "A dessert straight from grandma's recipe book.",
    imgSrc: "/lemon-dessert.webp",
  },
];

function HomepageSpecials() {
  return (
    <section className="specials">
      <h2>This Week's Specials!</h2>
      <div className="specials-grid">
        {specials.map((special, index) => (
          <div className="special-card" key={index}>
            <img src={special.imgSrc} alt={special.name} />
            <h3>{special.name}</h3>
            <p>{special.price}</p>
            <p>{special.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomepageSpecials;
