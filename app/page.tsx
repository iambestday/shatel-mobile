import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-100 pb-40 mb-20">
        <header className="max-w-7xl my-0 mx-auto px-20 py-0">
          <div>
            <nav className="py-10 flex items-center justify-between w-full">
              <h2 className="font-extrabold text-xl text-black">Fiber</h2>

              <div className="flex flex-row items-center">
                <ul className="flex flex-row ">
                  <li className="my-2 text-gray-900 cursor-pointer transition ease-in-out transform dark:text-gray-200 hover:text-blue-500 hover:-translate-y-2 dark:hover:text-blue-400 md:mx-4 md:my-0">
                    Community
                  </li>
                  <li className="my-2 text-gray-900 cursor-pointer transition ease-in-out transform dark:text-gray-200 hover:text-blue-500 hover:-translate-y-2 dark:hover:text-blue-400 md:mx-4 md:my-0">
                    Pricing
                  </li>
                  <li className="my-2 text-gray-900 cursor-pointer transition ease-in-out transform dark:text-gray-200 hover:text-blue-500 hover:-translate-y-2 dark:hover:text-blue-400 md:mx-4 md:my-0">
                    Features
                  </li>
                </ul>
                <div className="pl-40">
                  <button className="mr-1 px-6 py-2 font-semibold tracking-wide text-black capitalize transition-colors duration-300 transform rounded-lg focus:ring-opacity-80">
                    Signin
                  </button>
                  <Link href={`/signup`}>
                    <button className="px-8 py-4 font-medium tracking-wide text-white capitalize duration-300 transition ease-in-out bg-violet-700 rounded-lg hover:bg-violet-900 hover:-translate-y-2  ">
                      Signup
                    </button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          <section className="flex items-center ">
            <div>
              <div className="flex mb-4">
                <div className="flex">
                  <Image
                    className="mr-2"
                    alt="star"
                    width={18}
                    height={27}
                    src={"/assets/star.svg"}
                  />
                  <Image
                    className="mr-2"
                    alt="star"
                    width={18}
                    height={27}
                    src={"/assets/star.svg"}
                  />
                  <Image
                    className="mr-2"
                    alt="star"
                    width={18}
                    height={27}
                    src={"/assets/star.svg"}
                  />
                  <Image
                    className="mr-2"
                    alt="star"
                    width={18}
                    height={27}
                    src={"/assets/star.svg"}
                  />
                  <Image
                    className="mr-2"
                    alt="star"
                    width={18}
                    height={27}
                    src={"/assets/star.svg"}
                  />
                </div>
                <p className="">Rated 4.8/5 (243 reviews)</p>
              </div>
              <h3 className="font-bold text-6xl mb-2">
                Create your portfolio in minutes.
              </h3>
              <p className="mb-6">
                With Fiber, you can setup your own personal portfolio in minutes
                with dozens of premade, beautiful templates.
              </p>
              <div className="mb-9">
              <Link href={`/signup`}>
                <button className="px-8 py-4 font-medium tracking-wide text-white capitalize transition ease-in-out duration-300 transform  bg-violet-700 rounded-lg hover:bg-violet-800 hover:-translate-y-2">
                  Start Free Trial
                </button>
                </Link>
                <button className="mr-1 px-6 py-2 font-medium tracking-wide text-violet-700 underline capitalize transition-colors duration-300 transform rounded-lg focus:ring-opacity-80">
                  View Examples
                </button>
              </div>

              <ul className="flex items-center">
                <div className="flex items-center mr-6">
                  <Image
                    className="mr-2"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    src={"/assets/Checkmark.svg"}
                  />

                  <li>Credit Card Required</li>
                </div>

                <div className="flex items-center mr-6">
                  <Image
                    className="mr-2"
                    alt="Checkmark"
                    width={24}
                    height={24}
                    src={"/assets/Checkmark.svg"}
                  />
                  <li>10 Free Templates</li>
                </div>
              </ul>
            </div>
            <Image
              alt="Hero Illustration"
              width={500}
              height={500}
              src={"/assets/hero-Illustration.png"}
            />
          </section>
        </header>
      </div>

      <div className="max-w-7xl my-0 mx-auto px-20 py-0">
        <section>
          <div>
            <h4 className=" mb-6 font-bold text-lg  text-violet-700">
              Why Fiber?
            </h4>
            <h2 className="font-bold text-4xl w-1/2 mb-12">
              A good portfolio means good employability.
            </h2>
            <div className="flex justify-center mb-20">
              <div className="">
                <Image
                  className="mb-4"
                  alt="clock-time"
                  width={40}
                  height={40}
                  src={"/assets/time.svg"}
                />
                <h3 className="mb-4 font-bold text-xl">Build in minutes</h3>
                <p className="pr-2">
                  With a selection of premade templates, you can build out a
                  portfolio in less than 10 minutes.
                </p>
              </div>

              <div className="">
                <Image
                  className="mb-4"
                  alt="code"
                  width={40}
                  height={40}
                  src={"/assets/code.svg"}
                />
                <h3 className="mb-4 font-bold text-xl">Add custom CSS</h3>
                <p className="pr-2">
                  Customize your personal portfolio even more with the ability
                  to add your own custom CSS styles.
                </p>
              </div>
              <div className="">
                <Image
                  className="mb-4"
                  alt="responsive"
                  width={40}
                  height={40}
                  src={"/assets/allSizes.svg"}
                />
                <h3 className="mb-4 font-bold text-xl">Responsive</h3>
                <p className="pr-2">
                  All Fiber templates are fully responsive to ensure the
                  experience is seamless across all devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 ">
          <div className="bg-violet-700 flex justify-center items-center rounded-lg">
            <div className=" flex flex-col px-12 py-12">
              <h3 className=" text-white font-extrabold text-4xl mb-2">
                Diversify your portfolio.
              </h3>
              <p className="mb-6  text-white">
                Create an even more impressive portfolio by creating case
                studies for your projects. Simply follow our step-by-step guide.
              </p>
              <div className="mb-9">
                <button className="px-8 py-4 font-medium  tracking-wide text-violet-700 capitalize transition ease-in-out transform bg-white rounded-lg hover:-translate-y-2 focus:bg-gray-300">
                  Start Free Trial
                </button>
              </div>
            </div>
            <Image
              className="pt-12 pr-12"
              alt="page-image"
              width={500}
              height={500}
              src={"/assets/Page Image.png"}
            />
          </div>
        </section>

        <section className="flex mb-20">
          <div className="w-full max-w-sm px-6 py-6 bg-white border-slate-100 rounded-md border-2 dark:bg-gray-800">
            <div className="flex items-center gap-x-2 mb-4">
              <Image
                className="object-cover rounded-lg "
                alt="responsive"
                width={54}
                height={54}
                src={"/assets/User Avatar.svg"}
              />
              <div>
                <h1 className="text-base font-semibold text-violet-700 capitalize dark:text-white">
                  Sarah Andrews
                </h1>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  $100k in revenue
                </p>
              </div>
            </div>
            <p className="mb-8">
              Setting up my portfolio with Fiber took no more than 10 minutes.
              Since then, my portfolio has attracted a lot of clients and made
              me more than $100k.
            </p>

            <button className="bg-white px-8 py-4  w-full font-bold tracking-wide text-violet-700 border capitalize transition ease-in-out transform rounded-lg hover:-translate-y-2 hover:bg-gray-300 ">
              View Sarah’s Portfolio
            </button>
          </div>
          <div className="w-full max-w-sm px-6 py-6 ml-6 bg-white border-slate-100 rounded-md border-2 dark:bg-gray-800">
            <div className="flex items-center gap-x-2 mb-4">
              <Image
                className="object-cover rounded-lg "
                alt="responsive"
                width={54}
                height={54}
                src={"/assets/User Avatar 2.svg"}
              />
              <div>
                <h1 className="text-base font-semibold text-violet-700 capitalize dark:text-white">
                  Mathew Higgins
                </h1>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  $20k in revenue
                </p>
              </div>
            </div>
            <p className="mb-8">
              I have been getting A LOT of leads ever since I used Fiber’s
              premade templates, now I just need to work on my case studies and
              I’ll be ready to go!
            </p>

            <button className="bg-white px-8 py-4  w-full font-bold tracking-wide text-violet-700 border capitalize transition ease-in-out transform rounded-lg hover:-translate-y-2 hover:bg-gray-300 ">
              View Mathew’s Portfolio
            </button>
          </div>

          <div className="w-full max-w-sm px-6 py-6 ml-6 bg-white border-slate-100 rounded-md border-2 dark:bg-gray-800">
            <div className="flex items-center gap-x-2 mb-4">
              <Image
                className="object-cover rounded-lg "
                alt="responsive"
                width={54}
                height={54}
                src={"/assets/User Avatar 3.svg"}
              />
              <div>
                <h1 className="text-base font-semibold text-violet-700 capitalize dark:text-white">
                  Janice Dave
                </h1>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  $30k in revenue
                </p>
              </div>
            </div>
            <p className="mb-8">
              I only just started freelancing this year and I have already made
              more than I ever made in my full-time job. The templates are just
              so amazing.
            </p>

            <button className="bg-white px-8 py-4  w-full font-bold tracking-wide text-violet-700 border capitalize transition ease-in-out transform rounded-lg hover:-translate-y-2 hover:bg-gray-300 ">
              View Janice’s Portfolio
            </button>
          </div>
        </section>

        <footer className="bg-white py-16 px-0">
          <div className="max-w-screen-xl">
            <div className="flex justify-between">
              <div className="w-4/12">
                <p className="font-bold text-xl mb-6">Fibre</p>
                <p className=" mb-14">
                  With Fiber, you can setup your own personal portfolio in
                  minutes with dozens of premade, beautiful templates.
                </p>
                <p className="font-bold text-lg mb-6">Coded by KXLA 🤙</p>
              </div>

              <ul className="ml-8">
                <li className="mb-6">
                  <h3 className="font-semibold text-lg">Sitemap</h3>
                </li>
                <li className="mb-4">Homepage</li>
                <li className="mb-4">Pricing</li>
                <li className="mb-4">Testimonials</li>
                <li className="mb-4">Features</li>
              </ul>

              <ul className="ml-8">
                <li className="mb-6">
                  <h3 className="font-semibold text-lg">Resources</h3>
                </li>
                <li className="mb-4">Support</li>
                <li className="mb-4">Contact</li>
                <li className="mb-4">FAQ</li>
              </ul>

              <ul className="ml-8">
                <li className="mb-6">
                  <h3 className="font-semibold text-lg">Company</h3>
                </li>
                <li className="mb-4">About</li>
                <li className="mb-4">Customers</li>
                <li className="mb-4">Blog</li>
              </ul>

              <ul className="ml-8">
                <li className="mb-6">
                  <h3 className="font-semibold text-lg">Portfolios</h3>
                </li>
                <li className="mb-4">Sarah Andrews</li>
                <li className="mb-4">Mathew Higgins</li>
                <li className="mb-4">Janice Dave</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
