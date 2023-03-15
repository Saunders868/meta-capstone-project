import React from "react";
import TestCard from "../components/TestCard";
import Title from "../components/Title";

const testCardInfo = [
  {
    name: "Jane Doe",
    desc: "“Lorem ipsum dolor sit amet consectetur. Pulvinar tortor fermentum nunc dui. Maecenas dignissim amet vulputate nulla. Est lacus nec vitae morbi rhoncus gravida. Lectus accumsan amet aliquet tincidunt eget in eget. Leo cursus.”",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    alt: "woman",
  },
  {
    name: "John Doe",
    desc: "“Lorem ipsum dolor sit amet consectetur. Pulvinar tortor fermentum nunc dui. Maecenas dignissim amet vulputate nulla. Est lacus nec vitae morbi rhoncus gravida. Lectus accumsan amet aliquet tincidunt eget in eget. Leo cursus.”",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    alt: "man",
  },
];

const TestimonialsSection = () => {
  return (
    <section>
      <div>
        <Title title="Tesimonials" desc="what customers think about us?" />
      </div>

      <div>
        {testCardInfo.map((card) => (
          <TestCard
            image={card.image}
            alt={card.alt}
            desc={card.desc}
            name={card.name}
            key={card.name}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
