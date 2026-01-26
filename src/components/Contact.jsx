
const Contact = () => {
  return (
    <section
      id="contact"
      className="font-nunito py-20 px-4 sm:px-8 bg-offWhite text-center"
    >

      {/* Message Box */}
      <div
        className="bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg max-w-xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <h3 className="font-caveat text-2xl sm:text-3xl font-bold text-navy mb-4">
          Thanks for visiting!
        </h3>
        <p className="font-signika text-md sm:text-lg text-gray-700">
          I’m currently open to opportunities including:
        </p>

        {/* Opportunity Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Full-time", "Internship", "Collaboration"].map((type, idx) => (
            <span
              key={idx}
              className="text-sm sm:text-md px-4 py-1 rounded-full border border-yellow-500 text-navy font-signika hover:bg-yellow-400/20 transition"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
