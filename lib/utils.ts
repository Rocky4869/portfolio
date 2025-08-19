const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    const headerHeight = 50;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default scrollToSection;