const Footer = () => {
  return (
    <>
      <footer className="bg-black mt-10">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="relative mb-4 text-sm font-semibold text-white uppercase dark:text-white text-xl pb-2">
              Quick Link
              <span className="absolute inset-x-0 bottom-0 w-4/5 border-b-2 border-white"></span>

            </h2>
            <ul className="text-white dark:text-gray-400 font-medium space-y-4 mt-2">
              <li>
                <a href="/code-of-ethics/" className="hover:underline">
                  Code Of Ethics
                </a>
              </li>
              <li>
                <a href="/privacy-policy/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/complaint/" className="hover:underline">
                  Complaint
                </a>
              </li>
              <li>
                <a href="/contact-us/" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
          <h2 className="relative mb-4 text-sm font-semibold text-white uppercase dark:text-white text-xl pb-2">
              Quick Link
              <span className="absolute inset-x-0 bottom-0 w-4/5 border-b-2 border-white"></span>

            </h2>
            <ul className="text-white dark:text-gray-400 font-medium space-y-4 mt-2">
              <li>
                <a href="/cookie-policy/" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/disclaimer/" className="hover:underline">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="/investors/" className="hover:underline">
                  Investors
                </a>
              </li>
            </ul>
          </div>
          <div>
          <h2 className="relative mb-4 text-sm font-semibold text-white uppercase dark:text-white text-xl pb-2">
              Menu
              <span className="absolute inset-x-0 bottom-0 w-4/5 border-b-2 border-white"></span>

            </h2>
            <ul className="text-white dark:text-gray-400 font-medium space-y-4 mt-2">
              <li>
                <a href="#" className="hover:underline">
                  Bollywood
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hollywood
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tollywood
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tv
                </a>
              </li>
            </ul>
          </div>
          <div>
          <h2 className="relative mb-4 text-sm font-semibold text-white uppercase dark:text-white text-xl pb-2">
              Contact Us
              <span className="absolute inset-x-0 bottom-0 w-4/5 border-b-2 border-white"></span>

            </h2>
            <h4 className="text-white mt-2"> B.A.G Convergence Pvt. Ltd</h4>
            <h4 className="text-white my-2">
              Film City, Sector 16A, Noida, Uttar Pradesh 201301
            </h4>
            <p className="text-white">
            Phone: 01206354200 01204602424 01206652424
            </p>
          </div>
        </div>
        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 pb-3 w-4/5" />
        <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-400">© 2024 B.A.G Convergence Pvt. Ltd. 2023 : All Rights Reserved.</span>
      </footer>
    </>
  );
};

export default Footer;
