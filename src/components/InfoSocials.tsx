import { instagram, behance, linkedin, spotify, whatsapp } from "@/assets/images";


const social= [
    {
        id: 1,
        icon: instagram,
        url: "https://www.instagram.com/",
    },
    {
        id: 2,
        icon: behance,
        url: "https://www.behance.net/",
    },
    {
        id: 3,
        icon: linkedin,
        url: "https://www.linkedin.com/",
    },
    {
        id: 4,
        icon: whatsapp,
        url: "https://www.whatsapp.com/",
    },
    {
        id: 5,
        icon: spotify,    
        url: "https://www.spotify.com/",
    },
];

const InfoSocials = () => {
    return (
      <div className="bg-[#E9E9E9] text-[14px] text-[#1E1E1E] rounded-lg shadow py-4 px-2 w-full">
        <h2 className="font-semibold">Social</h2>
        <div className="flex space-x-2 mt-2">
          {social.map((item) => (
            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.icon} className="object-cover rounded-lg" alt="social-icon" />
            </a>
          ))}
        </div>
      </div>
    );
  };

export default InfoSocials;