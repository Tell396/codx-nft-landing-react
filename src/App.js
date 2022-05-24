import React from 'react';

function App() {
  return (
    <div className="font-outfit">
      <nav className="bg-white border-gray-200 px-2 mt-6 sm:px-4 py-2.5 rounded dark:bg-gray-800 mr-[18vw] ml-[18vw]">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" className="flex items-center">
            <svg
              className="mr-3 h-6 sm:h-9"
              width="94"
              height="31"
              viewBox="0 0 94 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.8152 30.8377C12.9177 30.8377 11.0202 30.5131 9.19566 29.7016C7.51709 28.9712 5.98448 27.8351 4.67081 26.4555C3.43013 25.0759 2.40839 23.3717 1.67858 21.5864C0.948765 19.6387 0.583859 17.6099 0.65684 15.5812C0.65684 13.5524 1.02175 11.4424 1.67858 9.57592C2.40839 7.70942 3.35715 6.08639 4.67081 4.70681C7.37112 1.86649 11.0202 0.324607 14.7422 0.324607C16.6398 0.324607 18.6103 0.649215 20.4348 1.46073C22.0404 2.1911 23.573 3.16492 24.8137 4.5445L20.3618 9.49476C19.705 8.68325 18.9022 8.11518 18.0264 7.70942C17.0047 7.22251 15.9099 6.97906 14.7422 7.06021C13.7205 7.06021 12.6988 7.22251 11.823 7.62827C10.9472 8.03403 10.2174 8.60209 9.56056 9.41361C8.90373 10.2251 8.39286 11.1178 8.02796 12.0916C7.66305 13.2277 7.51709 14.445 7.51709 15.6623C7.51709 16.8796 7.66305 18.0969 8.02796 19.233C8.39286 20.2068 8.90373 21.1806 9.56056 21.9921C10.2174 22.7225 11.0202 23.3717 11.823 23.7775C12.7717 24.1832 13.7935 24.3455 14.7422 24.3455C15.837 24.3455 17.0047 24.1832 18.0264 23.6963C18.9022 23.2906 19.778 22.6414 20.4348 21.8298L24.9596 26.7801C23.646 28.0785 22.1863 29.1335 20.5807 29.8639C18.6832 30.5131 16.7857 30.8377 14.8152 30.8377ZM34.9581 30.8377C33.1335 30.8377 31.309 30.4319 29.7034 29.4581C28.2438 28.5654 26.9301 27.267 26.0544 25.644C25.1786 23.9398 24.6677 22.0733 24.7407 20.1257C24.7407 18.2592 25.1786 16.3115 26.0544 14.6885C26.9301 13.0654 28.1708 11.767 29.7034 10.8743C31.309 9.90052 33.1335 9.41361 34.9581 9.41361C36.7826 9.41361 38.6071 9.90052 40.2127 10.8743C41.7453 11.767 42.986 13.0654 43.8618 14.6885C44.7376 16.3115 45.2484 18.178 45.1755 20.0445C45.1755 21.9921 44.7376 23.8586 43.8618 25.5628C42.986 27.1859 41.7453 28.4843 40.2127 29.377C38.5342 30.3508 36.7826 30.8377 34.9581 30.8377ZM34.9581 24.3455C35.6149 24.3455 36.2717 24.1832 36.8556 23.8586C37.3665 23.534 37.8773 22.966 38.1693 22.3979C38.4612 21.7487 38.6071 20.9372 38.6071 20.2068C38.6071 19.4764 38.4612 18.6649 38.0963 18.0157C37.8043 17.3665 37.3665 16.8796 36.8556 16.555C36.2717 16.2304 35.6149 15.9869 34.9581 16.0681C34.3012 16.0681 33.6444 16.2304 33.0606 16.6361C32.5497 16.9607 32.1118 17.5288 31.8199 18.178C31.528 18.8272 31.382 19.5576 31.382 20.3691C31.382 21.0995 31.528 21.8298 31.8199 22.5602C32.1118 23.2094 32.5497 23.6963 33.0606 24.0209C33.5714 24.1832 34.2283 24.3455 34.9581 24.3455ZM54.5171 30.7565C51.2329 30.8377 48.1677 28.8901 46.6351 25.644C45.8323 23.9398 45.4674 22.0733 45.5404 20.2068C45.5404 18.3403 45.9053 16.3927 46.6351 14.6885C47.3649 13.1466 48.4596 11.8482 49.7733 10.9555C51.2329 9.98168 52.8385 9.57592 54.5171 9.57592C55.6118 9.57592 56.7065 9.81937 57.7283 10.3063C58.677 10.712 59.5528 11.3613 60.2096 12.2539C60.8665 13.0654 61.3043 14.0393 61.3773 15.0942V24.9948C61.2314 26.0497 60.7935 27.1047 60.2096 27.9162C59.4798 28.8089 58.604 29.5393 57.6553 30.1073C56.6335 30.5131 55.5388 30.7565 54.5171 30.7565ZM55.6118 24.3455C56.2686 24.3455 56.9255 24.1832 57.5093 23.8586C58.0202 23.534 58.4581 22.966 58.75 22.3979C59.1149 21.7487 59.2609 20.9372 59.2609 20.2068C59.2609 19.4764 59.1149 18.7461 58.823 18.0969C58.531 17.5288 58.0932 16.9607 57.5823 16.6361C56.9984 16.2304 56.3416 16.0681 55.6848 16.0681C55.0279 16.0681 54.3711 16.2304 53.7873 16.6361C53.2764 17.0419 52.8385 17.5288 52.4736 18.0969C52.1817 18.7461 52.0357 19.4764 52.0357 20.2068C52.0357 20.9372 52.1817 21.6675 52.4736 22.3979C52.7655 22.966 53.2034 23.534 53.7873 23.8586C54.2981 24.1021 54.955 24.3455 55.6118 24.3455ZM65.3913 30.3508H58.9689V24.9136L59.8447 19.8822L58.823 14.9319V0H65.3183L65.3913 30.3508Z"
                fill="#2F2F2F"
              />
              <path
                d="M84.9503 30.1885L77.7252 17.0419H77.0683L66.9969 0.649216H74.9519L82.0311 13.0654H82.6879L92.8323 30.1885H84.9503ZM66.559 30.1885L76.1925 14.445L81.4472 17.2042L74.1491 30.1885H66.559ZM82.8339 16.3927L77.5792 13.5524L84.6584 0.649216H92.3214L82.8339 16.3927Z"
                fill="url(#paint0_linear_1_453)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_453"
                  x1="70.6398"
                  y1="2.63565"
                  x2="90.3658"
                  y2="25.8089"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#EAD71B" />
                  <stop offset="0.57" stopColor="#FF7F96" />
                  <stop offset="1" stopColor="#82CBAC" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Services
                </a>
              </li>

              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.171 4.93696C16.5958 5.19245 15.9773 5.36485 15.3279 5.4422C15.9906 5.04532 16.4992 4.41651 16.7389 3.6668C16.1188 4.03469 15.4324 4.3018 14.7012 4.44582C14.116 3.82215 13.2819 3.43239 12.3591 3.43239C10.5869 3.43239 9.15012 4.8692 9.15012 6.64136C9.15012 6.89282 9.17847 7.13761 9.2332 7.37247C6.56624 7.23883 4.20157 5.9614 2.6189 4.0198C2.34277 4.49357 2.18449 5.04472 2.18449 5.63304C2.18449 6.74629 2.75098 7.72841 3.612 8.30404C3.08613 8.28715 2.59112 8.14297 2.15859 7.9025C2.1583 7.91583 2.1583 7.92933 2.1583 7.94314C2.1583 9.49762 3.26444 10.7946 4.73255 11.0896C4.46325 11.1628 4.17972 11.2021 3.88702 11.2021C3.68004 11.2021 3.47913 11.1821 3.28317 11.1445C3.6917 12.4193 4.87673 13.3471 6.28068 13.373C5.18245 14.2338 3.79895 14.7467 2.29533 14.7467C2.03644 14.7467 1.78111 14.7314 1.52997 14.7019C2.95033 15.6126 4.63689 16.1437 6.44902 16.1437C12.3516 16.1437 15.579 11.2539 15.579 7.01341C15.579 6.8745 15.5762 6.73575 15.57 6.59824C16.1968 6.14587 16.7411 5.58066 17.171 4.93696Z"
                    fill="black"
                  />
                </svg>
              </div>

              <div>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.95241 4.30159C5.73019 4.30159 3.88892 6.11111 3.88892 8.36508C3.88892 10.6191 5.69844 12.4286 7.95241 12.4286C10.2064 12.4286 12.0159 10.5873 12.0159 8.36508C12.0159 6.14286 10.1746 4.30159 7.95241 4.30159ZM7.95241 10.9683C6.52384 10.9683 5.34923 9.79365 5.34923 8.36508C5.34923 6.93651 6.52384 5.76191 7.95241 5.76191C9.38098 5.76191 10.5556 6.93651 10.5556 8.36508C10.5556 9.79365 9.38098 10.9683 7.95241 10.9683Z"
                    fill="black"
                  />
                  <path
                    d="M12.1745 5.12699C12.683 5.12699 13.0952 4.7148 13.0952 4.20635C13.0952 3.6979 12.683 3.28572 12.1745 3.28572C11.6661 3.28572 11.2539 3.6979 11.2539 4.20635C11.2539 4.7148 11.6661 5.12699 12.1745 5.12699Z"
                    fill="black"
                  />
                  <path
                    d="M14.5555 1.8254C13.7301 0.968256 12.5555 0.523811 11.2222 0.523811H4.68252C1.92062 0.523811 0.0793457 2.36508 0.0793457 5.12699V11.6349C0.0793457 13 0.52379 14.1746 1.41268 15.0317C2.26982 15.8571 3.41268 16.2698 4.71427 16.2698H11.1905C12.5555 16.2698 13.6984 15.8254 14.5238 15.0317C15.3809 14.2064 15.8254 13.0317 15.8254 11.6667V5.12699C15.8254 3.79365 15.3809 2.6508 14.5555 1.8254ZM14.3651 11.6667C14.3651 12.6508 14.0793 13.4444 13.5079 13.9841C12.9365 14.5238 12.1428 14.8095 11.1905 14.8095H4.71427C3.76189 14.8095 2.96823 14.5238 2.39681 13.9841C1.82538 13.4127 1.53966 12.619 1.53966 11.6349V5.12699C1.53966 4.1746 1.82538 3.38095 2.39681 2.80953C2.93649 2.26984 3.76189 1.98413 4.71427 1.98413H11.2539C12.2063 1.98413 13 2.26984 13.5714 2.84127C14.1111 3.4127 14.4286 4.20635 14.4286 5.12699V11.6667H14.3651Z"
                    fill="black"
                  />
                </svg>
              </div>

              <div>
                <svg
                  width="8"
                  height="17"
                  viewBox="0 0 8 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.83646 5.90212H5.40917V4.31018C5.40917 3.71233 5.80541 3.57295 6.08449 3.57295C6.36294 3.57295 7.7974 3.57295 7.7974 3.57295V0.944686L5.43838 0.935478C2.81965 0.935478 2.2237 2.89572 2.2237 4.15016V5.90212H0.709229V8.61039H2.2237C2.2237 12.0861 2.2237 16.2739 2.2237 16.2739H5.40917C5.40917 16.2739 5.40917 12.0448 5.40917 8.61039H7.55864L7.83646 5.90212Z"
                    fill="black"
                  />
                </svg>
              </div>

              {/* <button className="p-3 rounded-full bg-[#2F2F2F] text-white">View on OpenSea</button> */}
            </ul>
          </div>

          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </nav>

      <section className="flex flex-wrap sm:flex-nowrap h-full mr-[18vw] ml-[18vw] mb-96">
        {/* About NFT */}
        <div className="mt-52 flex-auto w-64 wrap">
          <h4 className="text-[#82CBAC]">EXTRAORDINARY NFTs</h4>

          <h1 className="text-5xl">
            Change your
            <br />
            Digital Experience
          </h1>
          <p className="mt-4">
            Suspendisse sem neque, auctor a elementum ut,
            <br />
            varius vel leo. Donec diam arcu, porta et magna at
          </p>
        </div>

        {/* Block with peoples */}
        <div className="lg:block flex-auto hidden w-32 mt-24">
          <img className="absolute" src={require('./assets/Lee.png')} alt="Lee Stone" />
          <img
            className="absolute lg:ml-44 lg:mt-28"
            src={require('./assets/Mia_Potter.png')}
            alt=""
          />
        </div>
      </section>

      {/* <section className="mr-[18vw] ml-[18vw]">
        <div className="flex flex-wrap md:flex-wrap sm:flex-nowrap">
          <img className="" src={require('./assets/scroll-images/IMAGE-2.png')} alt="" />
          <img className="" src={require('./assets/scroll-images/IMAGE-3.png')} alt="" />
          <img className="" src={require('./assets/scroll-images/IMAGE-4.png')} alt="" />
          <img className="" src={require('./assets/scroll-images/IMAGE-5.png')} alt="" />
          <img className="" src={require('./assets/scroll-images/IMAGE-6.png')} alt="" />
          <img className="" src={require('./assets/scroll-images/IMAGE-7.png')} alt="" />
          <img className="" src={require('./assets/scroll-images/IMAGE-8.png')} alt="" />
          <img className="" src={require('./assets/scroll-images/IMAGE-9.png')} alt="" />
          <img className="" src={require('./assets/scroll-images/IMAGE-10.png')} alt="" />
        </div>
      </section> */}

      <section className="mt-22 mb-20 mr-[18vw] ml-[18vw]">
        <div className="text-center">
          <h1 className="text-6xl mt-36">Hey there, we are</h1>
          <p className="mt-5">
            Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam
            <br />
            arcu, porta et magna at
          </p>
        </div>

        <div className="mt-28">
          <div>
            <button className="m-3 pt-3 pb-3 pr-16 pl-16 bg-gray-700 rounded-full text-white">
              Jack
            </button>
            <button className="m-3 pt-3 pb-3 pr-16 pl-16 bg-white rounded-full text-black border-black border-2">
              Suni
            </button>
            <button className="m-3 pt-3 pb-3 pr-16 pl-16 bg-white rounded-full text-black border-black border-2">
              Colin
            </button>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap mt-6">
            <img className="" src={require('./assets/Digital-Artist.png')} alt="" />

            <div className="ml-10">
              <h4 className="text-red-400 flex-wrap">Digitl Artist</h4>
              <h1 className="text-3xl mt-2">
                Pellentesque blandit
                <br />
                in quam rhoncus
              </h1>
              <p className="mt-4 font-normal text-xl">
                Suspendisse ante mauris, volutpat congue sem ac, ultrices tempor lorem. Nullam eget
                vehicula tellus, ac consectetur urna. Mauris tincidunt, libero id ultrices
                tincidunt, mi leo pharetra dolor, sed luctus dui ipsum et augue. Integer non quam
                feugiat, porttitor libero a, tempor neque. Nulla ac orci mauris. Quisque nisi nisl,
                rutrum ac diam et, semper commodo quam
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32 mr-[18vw] ml-[18vw]">
        <div className="">
          <div className="flex flex-wrap sm:flex-nowrap">
            <img className="" src={require('./assets/our-work.png')} alt="" />

            <div className="ml-10 mt-10">
              <h4 className="flex-wrap text-4xl">OUR WORK</h4>
              <h1 className="text-5xl mt-2">
                “Um… what’s going
                <br />
                on here?”
              </h1>
              <p className="mt-4 font-normal text-xl">
                Nulla facilisi. Praesent molestie diam eu enim aliquet pellentesque. Vestibulum
                consectetur vestibulum tristique. Sed purus neque, maximus fermentum bibendum et,
                porta in sapien.
              </p>
              <button className="pt-3 pb-3 pr-10 pl-10 bg-gray-800 text-white mt-16">
                About Codx
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap sm:flex-nowrap flex-auto mb-52 mr-[18vw] ml-[18vw]">
        <div className="">
          <div className="mt-6 ">
            <span className="pt-2 pb-2 pr-8 pl-8 bg-green-300 rounded-full text-white">01</span>
            <div className="mt-6">
              <h1 className="text-3xl font-bold">Motion Graphic</h1>
              <p className="text-lg">
                Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta
                et magna at
              </p>
            </div>
          </div>
          <div className="mt-6">
            <span className="pt-2 pb-2 pr-8 pl-8 bg-pink-300 rounded-full text-white">02</span>
            <div className="mt-6">
              <h1 className="text-3xl font-bold">Digital Illustration</h1>
              <p className="text-lg">
                Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta
                et magna at
              </p>
            </div>
          </div>
          <div className="mt-6">
            <span className="pt-2 pb-2 pr-8 pl-8 bg-yellow-300 rounded-full text-white">03</span>
            <div className="mt-6">
              <h1 className="text-3xl font-bold">Motion Graphic</h1>
              <p className="text-lg">
                Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta
                et magna at
              </p>
            </div>
          </div>
        </div>

        <img className="w-[30vw] h-[31vw]" src={require('./assets/Motion.png')} alt="" />
      </section>

      <section className="flex flex-auto bg-emerald-300 text-white">
        <div className="flex-1 w-64 mt-16 ml-16 mb-16">
          <h1 className="text-6xl sm:text-5xl mb-3">Join Us and Discover our most precious NFT</h1>
          <p className="text-xl">
            Suspendisse sem neque, auctor a elementum ut, varius vel leo. Donec diam arcu, porta et
            magna at
          </p>
        </div>

        {/* <img className="h-96" src={require('./assets/Artists.png')} alt="" /> */}
      </section>

      <section className="mr-[18vw] ml-[18vw]">
        <h1 className="m-8 text-6xl sm:text-5xl text-center">Browse by Collections</h1>

        <div className="flex flex-wrap text-left">
          <div className="mt-12 m-4 flex-initial w-100">
            <img className="" src={require('./assets/collection-images/image.png')} />
            <h4 className="text-2xl m-6">Collectibles</h4>
          </div>
          <div className="mt-12 m-4 flex-initial w-100">
            <img className="" src={require('./assets/collection-images/image-2.png')} />
            <h4 className="text-2xl m-6">Art</h4>
          </div>
          <div className="mt-12 m-4 flex-initial w-100">
            <img className="" src={require('./assets/collection-images/image-3.png')} />
            <h4 className="text-2xl m-6">Photography</h4>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-gray-700 text-white font-bold pt-2 pb-2 pr-10 pl-10 mt-16">
            View all
          </button>
        </div>
      </section>

      <section className="mr-[18vw] ml-[18vw] mt-16">
        <h1 className="m-8 text-6xl sm:text-5xl text-center">Top NFT</h1>

        <div className="flex flex-wrap text-left">
          <div className="mt-12 m-6 flex-initial w-128">
            <img className="" src={require('./assets/top-nft/image-1.png')} />
            <div className="flex m-6">
              <h4 className="text-xl mr-2">White Bear</h4>
              <p className="font-bold">#54385</p>
            </div>
          </div>
          <div className="mt-12 m-6 flex-initial w-128">
            <img className="" src={require('./assets/top-nft/image-2.png')} />
            <div className="flex m-6">
              <h4 className="text-xl mr-2">Happy Luca</h4>
              <p className="font-bold">#54395</p>
            </div>
          </div>
          <div className="mt-12 m-6 flex-initial w-128">
            <img className="" src={require('./assets/top-nft/image-3.png')} />
            <div className="flex m-6">
              <h4 className="text-xl mr-2">Dodo</h4>
              <p className="font-bold">#54376</p>
            </div>
          </div>
          <div className="mt-12 m-6 flex-initial w-128">
            <img className="" src={require('./assets/top-nft/image-4.png')} />
            <h4 className="text-xl m-6">Collectibles</h4>
          </div>
          <div className="mt-12 m-6 flex-initial w-128">
            <img className="" src={require('./assets/top-nft/image-5.png')} />
            <h4 className="text-xl m-6">Art</h4>
          </div>
          <div className="mt-12 m-6 flex-initial w-128">
            <img className="" src={require('./assets/top-nft/image-6.png')} />
            <h4 className="text-xl m-6">Photography</h4>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="bg-gray-700 text-white font-bold pt-2 pb-2 pr-10 pl-10 mt-16">
            View all
          </button>
        </div>
      </section>

      <footer className="h-20 bg-gray-800 mt-20">
        <div className="flex items-center justify-center">
          <h1 className="text-white mt-6 text-emerald-200 text-lg">
            Made with ~ by <a className="text-blue-400 underline" href="https://github.com/tell396">Berezhnev</a>
          </h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
