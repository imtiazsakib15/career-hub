import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-neutral">
      <div className="container mx-auto x-5 sm:px-12 lg:px-20">
        <div className="footer p-10 text-neutral-content border-b">
          <div>
            <Link to="/" className="text-2xl font-bold text-white">
              Career Hub
            </Link>
            <p className="max-w-xs">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
          </div>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
      <p className="text-white text-center py-8 m-8 mb-0">
        @2023 CareerHub. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
