import Image from "next/image";
import Link from "next/link";
import LogoLight from "./assets/light.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600">
      <header>
        <nav className="px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap mx-auto max-w-screen-xl">
            <Link className="items-center" href="/">
              <Image
                src={LogoLight}
                width="130"
                height="130"
                alt="Thong Ba Logo Light"
              />
            </Link>
            <div className="flex grow space-x-2 lg:space-x-5 justify-end items-center pl-1 lg:pl-3">
              <a
                href="mailto:hello@thongba.io"
                className="inline-flex gap-2 text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 bg-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/tylrtnguyen/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex gap-2 text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 bg-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-gray-800"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 1200 1200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M0 0v1200h1200V0H0zm294.287 235.913c47.53.535 94.35 33.325 96.387 90.088c1.016 50.475-42.971 88.921-97.632 90.088h-1.318c-47.057-.543-93.012-34.156-95.142-90.088c.671-49.913 42.627-88.904 97.705-90.088zM804.199 474.39c52.255.324 101.572 15.826 142.09 57.13c42.106 46.96 55.624 111.71 57.129 177.538v299.414H830.859V729.419c-.384-52.302-18.3-115.877-87.524-117.993c-40.571.432-69.18 24.007-88.77 63.428c-5.348 12.688-6.118 27.273-6.372 41.821v291.797H475.708c.66-145.877 1.567-291.743 1.245-437.622c0-41.438-.399-69.34-1.245-83.716h172.485v73.535c14.641-20.823 30.879-40.571 52.66-56.47c29.545-21.085 65.036-29.168 103.346-29.809zm-597.436 12.744h172.485v521.338H206.763V487.134z"
                  />
                </svg>
                Linkedin Profile
              </a>
              <a
                href="https://www.github.com/tylrtnguyen"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex gap-2 text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 bg-gray-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-gray-800"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M27.114 62.986s9.17 2.923 17.927-.041"
                  ></path>
                  <circle cx="35.9" cy="35.898" r="27.226" fill="#fff"></circle>
                  <path
                    fill="#d0cfce"
                    d="M29.044 61.611c0-.927-.035-3.98-.035-7.764c0-2.646.874-4.373 1.863-5.252c-6.227-.722-12.779-3.154-12.779-14.035c0-3.098 1.096-5.632 2.887-7.615c-.286-.72-1.254-3.606.278-7.514c0 0 2.355-.764 7.717 2.908a26.45 26.45 0 0 1 14.053 0c5.356-3.672 7.711-2.908 7.711-2.908c1.532 3.908.57 6.795.278 7.514c1.796 1.983 2.881 4.514 2.881 7.615c0 10.905-6.559 13.307-12.816 14.008c1.013.882 1.909 2.611 1.909 5.263c0 3.792-.035 6.85-.035 7.78c0 .762.505 1.641 1.93 1.369c11.146-3.758 19.177-14.396 19.177-26.932c0-15.678-12.567-28.388-28.067-28.388S7.936 20.367 7.936 36.048c0 12.541 8.04 23.182 19.202 26.934c1.395.262 1.906-.614 1.906-1.37Z"
                  ></path>
                  <g
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M29.044 61.611c0-.927-.035-3.98-.035-7.764c0-2.646.874-4.373 1.863-5.252c-6.227-.722-12.779-3.154-12.779-14.035c0-3.098 1.096-5.632 2.887-7.615c-.286-.72-1.254-3.606.278-7.514c0 0 2.355-.764 7.717 2.908a26.45 26.45 0 0 1 14.053 0c5.356-3.672 7.711-2.908 7.711-2.908c1.532 3.908.57 6.795.278 7.514c1.796 1.983 2.881 4.514 2.881 7.615c0 10.905-6.559 13.307-12.816 14.008c1.013.882 1.909 2.611 1.909 5.263c0 3.792-.035 6.85-.035 7.78c0 .762.505 1.641 1.93 1.369c11.146-3.758 19.177-14.396 19.177-26.932c0-15.678-12.567-28.388-28.067-28.388S7.936 20.367 7.936 36.048c0 12.541 8.04 23.182 19.202 26.934c1.395.262 1.906-.614 1.906-1.37h0Z"></path>
                    <path d="M16.29 48.09c2.568.78 3.58 1.635 4.789 3.661c1.205 2.026 2.62 4.287 7.933 2.999"></path>
                  </g>
                </svg>
                GitHub Account
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-col justify-center items-center pt-20">
        <div className="bg-[url('./assets/website-builder.svg')] bg-contain bg-no-repeat w-72 h-72 md:w-96 md:h-96 lg:w-128 lg:h-128"></div>
        <h1 className="text-2xl text-center text-white font-bold pb-2 lg:pb-5 lg:text-4xl">
          Oops! site is under maintenance.
        </h1>
        <p className="text-center text-white w-full p-5 xl:w-1/2 3xl:w-1/3">
          Hi! Thank you very much for visiting my personal website. I’m
          currently working to upgrade the site bringing it a new design and
          up-to-date work experience data. Please don’t hesitate to reach out to
          me at{" "}
          <a className="underline text-blue-400" href="mailto:hello@thongba.io">
            hello@thongba.io
          </a>{" "}
          if needed.
        </p>
      </main>
    </div>
  );
}
