function Footer() {
  return (
    <footer className="lg:row-span-3 inline-flex justify-center items-center bg-red-500 border-solid border-black border-t-2">
      <p>
        Pokédex by Agustín Franco © {new Date().getFullYear()} | Made in ReactJS
        & Tailwind CSS |{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>{" "}
        <a HREF="mailto:agustinmfran@gmail.com">agustinmfran@gmail.com</a>
      </p>
    </footer>
  );
}

export default Footer;
