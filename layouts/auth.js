import Head from "next/head";
import { useRouter } from "next/router";
import classnames from "classnames";

export default function Layout({ title, bg, children, back }) {
  const router = useRouter();

  const goBack = () => {
    router.push(back || "/");
  };

  const gotoSignIn = () => {
    router.push("/signin");
  };

  return (
    <div className="h-screen">
      <Head>
        <title>Prospa - {title || "Home"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen">
        <div
          className={classnames(
            "hidden md:flex flex-col content-center h-100 w-96 p-8",
            bg
          )}
        >
          <svg
            className="text-white"
            width="109"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M9.6 0c4.73 0 8.295 3.865 8.295 9 0 5.137-3.564 9-8.277 9-2.294 0-3.918-.899-5.03-2.223V24L0 24V.459h4.5v1.888C5.612.953 7.254 0 9.6 0zM80.94 0c4.73 0 8.295 3.865 8.295 9 0 5.137-3.564 9-8.276 9-2.294 0-3.919-.899-5.03-2.223V24H71.34V.46h4.5v1.888C76.954.953 78.595 0 80.941 0zM42.307 0c5.329 0 9.265 3.847 9.265 9 0 5.154-3.936 9-9.265 9-5.313 0-9.23-3.846-9.23-9 0-5.153 3.917-9 9.23-9zm18.691.018c2.736 0 4.87.511 7.148 1.624l-1.554 3.582c-1.358-.67-3.529-1.377-5.453-1.394-1.747 0-2.63.617-2.63 1.553 0 .988 1.236 1.235 2.79 1.465l1.516.229c3.707.565 5.772 2.223 5.772 5.118 0 3.53-2.895 5.806-7.854 5.806-2.33 0-5.382-.441-7.606-2.012l1.817-3.494c1.465.97 3.248 1.676 5.824 1.676 2.136 0 3.16-.6 3.16-1.605 0-.83-.865-1.29-2.842-1.571l-1.394-.194c-3.954-.548-5.912-2.277-5.912-5.189 0-3.512 2.718-5.594 7.218-5.594zM99.333 0c2.348 0 3.988.953 5.118 2.347V.46h4.5v17.1h-4.5v-1.888c-1.111 1.377-2.77 2.33-5.118 2.33-4.711 0-8.276-3.864-8.276-9s3.565-9 8.276-9zM30.057 0c.989 0 1.764.141 2.4.37l-.689 4.571c-.758-.335-1.852-.547-2.787-.547-2.136 0-3.6 1.306-3.6 3.847v9.319h-4.606V.46h4.464v1.87C26.316.723 27.958 0 30.057 0zM8.754 4.288C6.142 4.288 4.359 6.3 4.359 9c0 2.7 1.783 4.713 4.395 4.713 2.717 0 4.412-2.1 4.412-4.713 0-2.612-1.695-4.712-4.412-4.712zm33.553 0c-2.595 0-4.536 1.941-4.536 4.712s1.94 4.713 4.536 4.713c2.594 0 4.552-1.942 4.552-4.713 0-2.77-1.958-4.712-4.552-4.712zm37.788 0C77.483 4.288 75.7 6.3 75.7 9c0 2.7 1.783 4.713 4.395 4.713 2.718 0 4.412-2.1 4.412-4.713 0-2.612-1.694-4.712-4.412-4.712zm20.085 0c-2.7 0-4.411 2.1-4.411 4.712 0 2.612 1.712 4.713 4.411 4.713 2.63 0 4.412-2.012 4.412-4.713 0-2.7-1.781-4.712-4.412-4.712z"
                fill="currentColor"
              />
            </g>
          </svg>
          <div className="flex gap-1.5 mt-14">
            <div className="bg-white w-full h-0.5 rounded"></div>
            <div className="bg-white w-full h-0.5 rounded opacity-40"></div>
            <div className="bg-white w-full h-0.5 rounded opacity-40"></div>
            <div className="bg-white w-full h-0.5 rounded opacity-40"></div>
            <div className="bg-white w-full h-0.5 rounded opacity-40"></div>
          </div>
          <div className="text-white mt-14">
            <h3 className="text-4xl font-medium mb-6">
              Create multiple sub-account
            </h3>
            <p>
              Organise your business finances easily with multiple accounts. No
              limits!
            </p>
          </div>
          <img src="/vault.png" className="my-auto" />
          <footer className="text-white mt-auto">
            <p>&copy; 2020 Prospa Inc</p>
          </footer>
        </div>
        <div className="flex flex-grow flex-col">
          <header className="flex justify-between px-5 md:px-8 lg:px-16 py-5 md:py-10">
            <button
              className={classnames('border border-gray-300 rounded-md px-3 py-2 focus:outline-none', { 'hidden':!back })}
              onClick={goBack}
            >
              <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path fill="#FFF" d="M-434-40h1440v900H-434z" />
                  <path
                    d="M14.667-8A5.333 5.333 0 0120-2.667v21.334A5.333 5.333 0 0114.667 24H-6.667A5.333 5.333 0 01-12 18.667V-2.667A5.333 5.333 0 01-6.667-8h21.334zm0 1.333H-6.667a4 4 0 00-3.993 3.765l-.007.235v21.334a4 4 0 003.765 3.993l.235.007h21.334a4 4 0 003.993-3.765l.007-.235V-2.667a4 4 0 00-3.765-3.993l-.235-.007z"
                    fill="#EEEFF7"
                    fillRule="nonzero"
                  />
                  <path
                    d="M7.688 16L8.8 14.875 2.191 7.99l.705-.735-.004.004 5.872-6.117L7.669 0C6.046 1.69 1.514 6.411 0 7.99L7.688 16"
                    fill="#8397AB"
                  />
                </g>
              </svg>
            </button>
            <p className="text-xs md:text-base ml-auto my-auto">
              Already a member?{" "}
              <a className="text-xs md:text-base text-pink-500 cursor-pointer" onClick={gotoSignIn}>
                Sign In
              </a>
            </p>
          </header>
          <div className="flex py-6 md:hidden">
            <svg
              className="text-purple-800 mx-5"
              width="109"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M9.6 0c4.73 0 8.295 3.865 8.295 9 0 5.137-3.564 9-8.277 9-2.294 0-3.918-.899-5.03-2.223V24L0 24V.459h4.5v1.888C5.612.953 7.254 0 9.6 0zM80.94 0c4.73 0 8.295 3.865 8.295 9 0 5.137-3.564 9-8.276 9-2.294 0-3.919-.899-5.03-2.223V24H71.34V.46h4.5v1.888C76.954.953 78.595 0 80.941 0zM42.307 0c5.329 0 9.265 3.847 9.265 9 0 5.154-3.936 9-9.265 9-5.313 0-9.23-3.846-9.23-9 0-5.153 3.917-9 9.23-9zm18.691.018c2.736 0 4.87.511 7.148 1.624l-1.554 3.582c-1.358-.67-3.529-1.377-5.453-1.394-1.747 0-2.63.617-2.63 1.553 0 .988 1.236 1.235 2.79 1.465l1.516.229c3.707.565 5.772 2.223 5.772 5.118 0 3.53-2.895 5.806-7.854 5.806-2.33 0-5.382-.441-7.606-2.012l1.817-3.494c1.465.97 3.248 1.676 5.824 1.676 2.136 0 3.16-.6 3.16-1.605 0-.83-.865-1.29-2.842-1.571l-1.394-.194c-3.954-.548-5.912-2.277-5.912-5.189 0-3.512 2.718-5.594 7.218-5.594zM99.333 0c2.348 0 3.988.953 5.118 2.347V.46h4.5v17.1h-4.5v-1.888c-1.111 1.377-2.77 2.33-5.118 2.33-4.711 0-8.276-3.864-8.276-9s3.565-9 8.276-9zM30.057 0c.989 0 1.764.141 2.4.37l-.689 4.571c-.758-.335-1.852-.547-2.787-.547-2.136 0-3.6 1.306-3.6 3.847v9.319h-4.606V.46h4.464v1.87C26.316.723 27.958 0 30.057 0zM8.754 4.288C6.142 4.288 4.359 6.3 4.359 9c0 2.7 1.783 4.713 4.395 4.713 2.717 0 4.412-2.1 4.412-4.713 0-2.612-1.695-4.712-4.412-4.712zm33.553 0c-2.595 0-4.536 1.941-4.536 4.712s1.94 4.713 4.536 4.713c2.594 0 4.552-1.942 4.552-4.713 0-2.77-1.958-4.712-4.552-4.712zm37.788 0C77.483 4.288 75.7 6.3 75.7 9c0 2.7 1.783 4.713 4.395 4.713 2.718 0 4.412-2.1 4.412-4.713 0-2.612-1.694-4.712-4.412-4.712zm20.085 0c-2.7 0-4.411 2.1-4.411 4.712 0 2.612 1.712 4.713 4.411 4.713 2.63 0 4.412-2.012 4.412-4.713 0-2.7-1.781-4.712-4.412-4.712z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </div>
          <div className="flex flex-col px-5 md:px-8 lg:px-16 py-8 md:py-10 mt-18 mb-18">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
