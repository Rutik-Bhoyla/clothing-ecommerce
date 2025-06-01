import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const collections = [
  {
    id: 1,
    name: "Summer Collection",
    image: "https://images.unsplash.com/photo-1562571151-864223d7d62a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/products/summerCollection",
  },
  {
    id: 2,
    name: "Winter Collection",
    image: "https://plus.unsplash.com/premium_photo-1661767406131-e60522d8674a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/products/winterCollection",
  },
  {
    id: 3,
    name: "Spring Collection",
    image: "https://images.unsplash.com/photo-1619032468883-89a84f565cba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/products/springCollection",
  },
  {
    id: 4,
    name: "Autumn Collection",
    image: "https://images.unsplash.com/photo-1719552979950-f35958f97ebe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            className={`relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-700 ease-out
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
