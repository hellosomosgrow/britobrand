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
  <div className="bg-black rounded-lg p-6 flex flex-col justify-between w-[400px] h-[248px]">
    <p className="text-sm font-light text-white line-clamp-6 flex-1">
      {testimonial?.description}
    </p>
    <div className="flex items-center mt-4">
      <div className="w-16 h-16 rounded-full mr-4 overflow-hidden flex items-center justify-center border-none flex-shrink-0">
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
      <div className="flex flex-col justify-center">
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
