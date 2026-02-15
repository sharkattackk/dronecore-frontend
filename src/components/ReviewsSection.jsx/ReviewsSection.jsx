import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Emily R.",
    rating: 5,
    text: "Absolutely loved the private sauna session. The view of the harbour is breathtaking and the cold plunge is invigorating!",
  },
  {
    name: "Jason M.",
    rating: 5,
    text: "A unique waterfront experience. The staff are professional, and the facilities are top-notch. Highly recommend the evening sessions!",
  },
  {
    name: "Sophia L.",
    rating: 5,
    text: "Perfect for a relaxing day with friends. The community session has a great vibe and the location can’t be beaten.",
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-light-gray dark:bg-dark-gray py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-dark-gray dark:text-white">
          What Our Guests Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          See why people love Harbour Heat. Real reviews from our valued guests.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white/5 dark:bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:scale-[102%] transition-all duration-300"
          >
            {/* Stars */}
            <div className="flex text-yellow-400 mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} className={i < review.rating ? "opacity-100" : "opacity-30"} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-800 dark:text-gray-200 mb-6 flex-grow">
              "{review.text}"
            </p>

            {/* Reviewer */}
            <div className="text-gray-700 dark:text-gray-300 font-medium">
              — {review.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
