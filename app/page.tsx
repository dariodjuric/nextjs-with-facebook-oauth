import "./globals.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-gradient-to-br from-sky-50 to-gray-200 py-16">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="flex justify-center">
                <a href="https://www.thisdot.co/">
                  <Image
                    src="td.svg"
                    alt="This Dot logo"
                    height="200"
                    width="200"
                    priority={false}
                  />
                </a>
              </div>
              <p className="text-base text-cyan-900 mt-7 mb-7">
                Welcome to This Dot&apos;s demo for Next.js OAuth integration
                with Facebook. Click the below button to sign in.{" "}
              </p>
              <div className="grid space-y-4">
                <button
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center justify-center space-x-4">
                    <Image
                      src="facebook.svg"
                      alt="Facebook logo"
                      width="16"
                      height="16"
                    />
                    <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Facebook
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
