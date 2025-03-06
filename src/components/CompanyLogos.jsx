import React from "react";
import "../App.css"

const companyLogos = [
  {
    name: "Volkswagen",
    src: "https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Samsung",
    src: "https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Cisco",
    src: "https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Vimeo",
    src: "https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "P&G",
    src: "https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "HP",
    src: "https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Citi",
    src: "https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals",
  },
  {
    name: "Ericsson",
    src: "https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals",
  },
];

const CompanyLogos = () => {
  return (
    <section className="company-section">
      <div className="company-h2">
      <h2>Trusted by over 16,000 companies and millions of learners around the world</h2>
      </div>
      <div className="company-logos">
        {companyLogos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.name} className="company-logo" />
        ))}
      </div>
    </section>
  );
};

export default CompanyLogos;

