import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Title from "../components/Title";
import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";

const cardsInfo = [
  {
    image: greekSalad,
    alt: "greek salad",
    title: "Greek Salad",
    price: "$12.99",
    desc: "Lorem ipsum dolor sit amet consectetur. Faucibus viverra tincidunt lectus neque sed elementum orci. Purus mi cursus fermentum condimentum nibh. Nisl fringilla sed aliquam urna tristique non cursus accumsan. Morbi ut sagittis dictum orci et.",
  },
  {
    image: bruchetta,
    alt: "bruchetta",
    title: "Bruchetta",
    price: "$12.99",
    desc: "Lorem ipsum dolor sit amet consectetur. Faucibus viverra tincidunt lectus neque sed elementum orci. Purus mi cursus fermentum condimentum nibh. Nisl fringilla sed aliquam urna tristique non cursus accumsan. Morbi ut sagittis dictum orci et.",
  },
  {
    image: lemonDessert,
    alt: "lemonDessert",
    title: "Lemon Dessert",
    price: "$12.99",
    desc: "Lorem ipsum dolor sit amet consectetur. Faucibus viverra tincidunt lectus neque sed elementum orci. Purus mi cursus fermentum condimentum nibh. Nisl fringilla sed aliquam urna tristique non cursus accumsan. Morbi ut sagittis dictum orci et.",
  },
];

const HighlightsSection = () => {
  return (
    <section>
      <div>
        <Title title="Specials" desc="What’s on the Menu?" />
        <Button text="Order Online" />
      </div>

      <div>
        {cardsInfo.map((card) => (
          <Card
            image={card.image}
            alt={card.alt}
            cardTitle={card.title}
            cardPrice={card.price}
            cardDesc={card.desc}
            key={card.title}
          />
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
