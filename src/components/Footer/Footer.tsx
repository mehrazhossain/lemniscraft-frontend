const Footer = () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "Terms",
    },
    {
      href: "javascript:void()",
      name: "License",
    },
    {
      href: "javascript:void()",
      name: "Privacy",
    },
    {
      href: "javascript:void()",
      name: "About us",
    },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
          <p>© 2022 Lemniscraft Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
