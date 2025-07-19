const TestimonialCard = ({
  testimonial,
}: {
  testimonial: {
    description: string;
    name: string;
    company: string;
    location: string;
    image?: string;
  };
}) => (
  <div className="bg-black rounded-lg p-4 flex flex-col justify-between h-56">
    <p className="text-sm font-light text-white line-clamp-5">
      {testimonial?.description}
    </p>
    <div className="flex">
      <div className="w-16 h-16 rounded-full mr-2 overflow-hidden flex items-center justify-center border-none">
        {testimonial?.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-xs text-gray-400">Sin foto</span>
        )}
      </div>
      <div className="flex flex-col justify-center ml-4">
        <h3 className="text-sm font-semibold text-white">
          {testimonial?.name}
        </h3>
        <p className="text-xs font-light text-[#767575]">
          {testimonial?.company}
        </p>
        <p className="text-xs font-light text-[#767575]">
          {testimonial?.location}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
