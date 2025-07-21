import React from "react";

const clients = [
  { name: "Client 1", logo: "src/images/logo1.png" },
  { name: "Client 2", logo: "src/images/logo2.png" },
  { name: "Client 3", logo: "src/images/logo3.png" },
  { name: "Client 4", logo: "src/images/logo4.png" },
  { name: "Client 5", logo: "src/images/logo5.png" },
  { name: "Client 6", logo: "src/images/logo6.png" },
  { name: "Client 7", logo: "src/images/logo7.png" },
  { name: "Client 8", logo: "src/images/logo8.png" },
  { name: "Client 9", logo: "src/images/logo9.png" },
  
];

const Clients = () => {
  return (
<section
  className="relative py-20 px-6 text-black overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/src/images/clientbg.png')" }}
>
  {/* Heading */}
  <div className="relative z-10 text-left max-w-7xl mx-auto mb-16 px-4">
    <h2 className="text-4xl sm:text-5xl font-bold text-black">
      What do we do at Divuzl?
    </h2>
    <p className="text-lg text-black mt-2">
      * Trusted by top brands, agencies, and startups worldwide
    </p>
  </div>

  {/* Logo Grid */}
  <div className="relative z-10 space-y-12 max-w-8xl mx-auto px-4">
    {/* Row 1: 3 Logos */}
    <div className="flex justify-center gap-6 flex-wrap">
      {clients.slice(0, 3).map((client, i) => (
        <LogoCard key={i} logo={client.logo} name={client.name} />
      ))}
    </div>

    {/* Row 2: 2 Logos */}
    <div className="flex justify-center gap-6 flex-wrap">
      {clients.slice(3, 5).map((client, i) => (
        <LogoCard key={i} logo={client.logo} name={client.name} />
      ))}
    </div>

    {/* Row 3: 4 Logos */}
    <div className="flex justify-center gap-6 flex-wrap">
      {clients.slice(5, 9).map((client, i) => (
        <LogoCard key={i} logo={client.logo} name={client.name} />
      ))}
    </div>

    {/* You only have 9 clients, remove this row unless you add more logos */}
  </div>
</section>

  );
};

const LogoCard = ({ logo, name }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-60 h-28 flex items-center justify-center transition hover:scale-105 duration-300 shadow-md">
    <img src={logo} alt={name} className="h-12 max-w-full object-contain" />
  </div>
);

export default Clients;
