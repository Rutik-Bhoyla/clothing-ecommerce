import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const collections = [
  {
    id: 1,
    name: "Summer Collection",
    image: "/Images/2.webp",
    route: "/products/summerCollection",
  },
  {
    id: 2,
    name: "Winter Collection",
    image: "/Images/3.webp",
    route: "/products/winterCollection",
  },
  {
    id: 3,
    name: "Spring Collection",
    image: "/Images/4.webp",
    route: "/products/springCollection",
  },
  {
    id: 4,
    name: "Autumn Collection",
    image: "/Images/1.webp",
    route: "/products/autumnCollection",
  },
];

export default function CollectionGrid() {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    collections.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, i * 150);
    });
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-20 text-gray-900 dark:text-dark-text">
      <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">
        Our Collections
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {collections.map((collection, idx) => (
          <Link
            to={collection.route}
            key={collection.id}
            className={`relative overflow-hidden rounded-2xl shadow-xl duration-700 ease-out
              ${visibleItems.includes(idx) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              hover:scale-105 hover:shadow-2xl`}
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-64 object-cover brightness-90 hover:brightness-75 transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-5">
              <h3 className="text-white text-xl font-semibold">{collection.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
