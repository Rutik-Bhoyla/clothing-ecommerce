import { FaPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const products = [
  { id: 5, name: 'Minimal Coat', image: '/Images/minimal coat.webp', price: 120 },
  { id: 6, name: 'Linen Shirt', image: '/Images/Linen shirt.webp', price: 65 },
  { id: 7, name: 'Tapered Pants', image: '/Images/tapered pants.webp', price: 80 },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  function handleAdd(product) {
    const item = {
      ...product,
      size: "M",       // default size
      quantity: 1,     // default quantity
    };
    addToCart(item);
  }

  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-serif mb-8 text-center dark:text-dark-text">Featured Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(p => (
          <div
            key={p.id}
            className="max-w-[21em] bg-white p-4 shadow-md font-sans transition hover:bg-slate-600 dark:hover:bg-accent-light hover:text-white m-auto"
          >
            {/* Entire card except plus icon is clickable */}
            <Link to={`/product/${p.id}`}>
              <img src={p.image} alt={p.name} className="w-full" />
              <h4 className="text-lg font-medium my-2">{p.name}</h4>
            </Link>
            <div className="flex justify-between items-center text-base">
              <span>${p.price}</span>
              <button
                onClick={() => handleAdd(p)}
                className="bg-black text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaPlus className="text-sm" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
