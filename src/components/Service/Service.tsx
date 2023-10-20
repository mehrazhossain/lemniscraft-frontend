"user client";

const Service = () => {
  const query: Record<string, any> = {};

  const posts = [
    {
      title: "Social Media Boosting",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people what they did for their anxiety, and some",
      img: "https://static.vecteezy.com/system/resources/previews/009/320/929/original/boost-posts-social-media-with-rocket-and-smartphone-vector.jpg",
      authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      authorName: "Sidi dev",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "Search Engine Optimization (SEO)",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations about Whittington will be featured in the film",
      img: "https://uploads-ssl.webflow.com/631492df65cd5321245d33e8/6319aee0c88759a5fcc14c00_xRxvPsDqkEmZCSyI.jpeg",
      authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      authorName: "Micheal",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "Social Media Management",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks. I realized today that I have all this stuff that",
      img: "https://www.searchenginejournal.com/wp-content/uploads/2021/08/top-5-reasons-why-you-need-a-social-media-manager-616015983b3ba-sej-1280x720.png",
      authorName: "Luis",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "E-commerce Website Development",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
      img: "https://qckbot.com/wp-content/uploads/2022/05/E-Commerce-min-768x715.png",
      authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
      authorName: "Lourin",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "Web Design and Development",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
      img: "https://www.allianzeinfosoft.com/images/frontend/webp/web-dev/web_design_development_img.webp",
      authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
      authorName: "Lourin",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "Data Analytics and Reporting",
      desc: "The powerful gravity waves resulting from the impact of the planets' moons â€” four in total â€” were finally resolved in 2015 when gravitational microlensing was used to observe the",
      img: "https://www.exposure.com/Customer-Content/www/CMS/files/blog/4-Google-Analytics-Reports-to-know.jpg",
      authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
      authorName: "Lourin",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
  ];

  return (
    <>
      <section className="mt-12 mb-20 mx-auto px-4 max-w-screen-xl md:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">
            Our Offerings
          </h1>
          <p className="mt-3 text-gray-500">
            Explore our services, discover expert insights, and embark on a
            journey to digital excellence.
          </p>
        </div>
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((items, key) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={key}
            >
              <a href={items.href}>
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-full h-48 rounded-t-md"
                />
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-900">{items.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
      <div className="border-t border-gray-300 my-4"></div>
    </>
  );
};

export default Service;
