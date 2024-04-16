import Image from "next/image";

export default function SignUp() {
  return (
    <section className="flex items-center justify-between">
      <div className="h-screen w-full flex flex-col justify-center py-12 px-48">
        <h2 className="mb-8 font-extrabold text-xl text-black">Fiber</h2>
        <h2 className="mb-8 text-black font-bold text-4xl ">
          Create your Fiber account
        </h2>
        <form>
          <div>
            <label
              className="mb-8 font-bold text-lg text-black"
              htmlFor="username"
            >
              Your Name
            </label>
            <input
              id="username"
              type="text"
              placeholder="John Doe"
              className="block w-full px-4 py-4 mt-2 mb-8 text-lg text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="mb-8 font-bold text-lg text-black"
              htmlFor="emailAddress"
            >
              E-mail
            </label>
            <input
              id="emailAddress"
              type="email"
              placeholder="john@example.com"
              className="block w-full px-4 py-4 mt-2 mb-8 text-lg text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="mb-8 font-bold text-lg text-black"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="At least 8 characters"
              className="block w-full px-4 py-4 mt-2 mb-8 text-lg text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div className="flex flex-col mt-6">
            <div className="inline-flex items-center mb-6">
              <label
                className="relative mr-2  flex items-center rounded-full cursor-pointer"
                htmlFor="condition"
                data-ripple-dark="true"
              >
                <input
                  id="condition"
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-900 checked:bg-violet-900 checked:before:bg-violet-900 hover:before:opacity-10"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px text-lg font-normal text-gray-700 cursor-pointer select-none"
                htmlFor="condition"
              >
                By creating an account on Fiber, you agree to the
                <a href="#" className="ml-1  text-violet-700 underline">
                  Terms & Conditions.
                </a>
              </label>
            </div>
            <button className="px-8 py-4 font-medium tracking-wide text-white capitalize transition ease-in-out duration-300 transform  bg-violet-700 rounded-lg hover:bg-violet-800 hover:-translate-y-2">
              Create Fiber Account
            </button>

            <p className="pt-4 text-center text-lg font-normal text-gray-700 cursor-pointer">
              Already have an account?
              <a href="#" className="text-violet-700">
                {" "}
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="h-screen w-full bg-violet-700 flex flex-col items-center justify-center py-12 px-28">
        <div className="flex flex-col items-center justify-center ">
          <Image
            className=""
            alt="sign-up-img"
            width={710}
            height={520}
            src={"/assets/Sign Up Image.png"}
          />

          <div className="text-center">
            <h2 className="mx-4 my-4 text-white font-bold text-4xl ">
              Unparalleled Templates
            </h2>
            <p className="text-slate-100 text-lg">
              Crafted by a team of professional designers, our templates are
              eunparalleled in the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
