const TestimonialCard = ({ testimonial }: { testimonial: string }) => (
  <div className="bg-black shadow rounded-lg p-4 h-56 flex flex-col justify-between">
    <p className="text-[15px] text-white max-w-[300px] line-clamp-3">
      {testimonial}
    </p>
    <div className="flex">
      <div className="w-16 h-16 rounded-full bg-gray-300 mr-2"></div>
      <div className="flex flex-col justify-center ml-4">
        <h3 className="text-sm font-semibold text-white">Nombre del Cliente</h3>
        <p className="text-xs font-light text-[#767575]">Cargo del Cliente</p>
        <p className="text-xs font-light text-[#767575]">Ubicación</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
