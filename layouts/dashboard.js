import Head from "next/head";
import { useState } from 'react'
import { useRouter } from "next/router";
import classnames from "classnames";

export default function Layout({ title, children, back }) {

  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false)

  const goBack = () => {
    router.push(back || "/");
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu)
  };

  return (
    <div className="h-screen">
      <Head>
        <title>Prospa - {title || "Home"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen bg-gray-200">
        <div
          className={classnames(
          "hidden z-10 md:flex flex-col content-center shadow-lg bg-white h-100 w-80 p-8")}
        >
          <div className="relative">
            <div className="flex cursor-pointer" onClick={toggleUserMenu}>
              <div className="flex w-10 h-10 bg-purple-800 rounded-full">
                <span className="block text-white text-xs m-auto">BN</span>
              </div>
              <div className="flex-grow ml-3 my-auto">
                <h5 className="text-base font-semibold leading-tight">Clayvant Inc</h5>
                <p className="text-xs text-gray-400 -mb-1">Manage account</p>
              </div>
              <button className="bg-gray-100 rounded px-3 focus:outline-none">
                <svg className="text-gray-400" width="16" height="9" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <filter x="-11.3%" y="-3.6%" width="122.7%" height="107.6%" filterUnits="objectBoundingBox" id="a"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="11" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.51372549 0 0 0 0 0.592156863 0 0 0 0 0.670588235 0 0 0 0.24 0" in="shadowBlurOuter1"/></filter><path id="b" d="M0 0h300v900H0z"/>
                  </defs>
                  <g fill="none" fillRule="evenodd"><path fill="currentColor" d="M-241-36h1440v900H-241z"/><path fill="#FFF" d="M-241-36h1440v80H-241z"/><g transform="translate(-241 -36)"></g><path d="M-8-16h32a4 4 0 014 4v32a4 4 0 01-4 4H-8a4 4 0 01-4-4v-32a4 4 0 014-4z" fillRule="nonzero"/><path d="M16 1.112L14.875 0 7.99 6.609l-.735-.705.004.004L1.142.036 0 1.131C1.69 2.754 6.411 7.286 7.99 8.8L16 1.112" fill="currentColor"/></g>
                </svg>
              </button>
            </div>
            <div className={classnames('rounded shadow-xl border border-gray-200 mt-4', {'hidden': !showUserMenu})}>
              <ul>
                <li className="text-sm px-5 py-3 border-b border-gray-300">
                  Clayvant Inc
                </li>
                <li className="text-sm text-gray-400 px-5 py-3 border-b border-gray-300">
                  Business name 2
                </li>
                <li className="flex flex-col gap-3 text-sm text-gray-400 px-5 py-3 border-b border-gray-300">
                  Business name 3
                  <a className="text-xxs text-pink-500">Add a business</a>
                </li>
              </ul>
            </div>
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
          <footer className="text-gray-500 mt-auto">
            <svg
              className="text-gray-400"
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
          </footer>
        </div>
        <div className="flex flex-grow flex-col">
          <header className="flex justify-between bg-white px-5 md:px-8 lg:px-16 py-5 md:py-6">
            <h5 className="text-xl font-semibold text-gray-400 my-auto">{ title }</h5>
            <div className="flex gap-4 ml-auto">
              <div className="flex">
                <button
                  className={classnames('border border-gray-300 rounded-md px-2.5 py-2 my-auto focus:outline-none')}
                >
                  <svg className="text-gray-400" width="14" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="currentColor" d="M-1263-32H177v900h-1440z"/><path fill="#FFF" d="M-1263-32H177v80h-1440z"/><g fill="#8397AB" fillRule="nonzero"><path d="M17.667-8A5.333 5.333 0 0123-2.667v21.334A5.333 5.333 0 0117.667 24H-3.667A5.333 5.333 0 01-9 18.667V-2.667A5.333 5.333 0 01-3.667-8h21.334zm0 1.333H-3.667A4 4 0 00-7.66-2.902l-.007.235v21.334a4 4 0 003.765 3.993l.235.007h21.334a4 4 0 003.993-3.765l.007-.235V-2.667a4 4 0 00-3.765-3.993l-.235-.007z" fillOpacity=".36"/><path d="M6.564 16c.903 0 1.641-.738 1.641-1.641H4.923c0 .903.73 1.641 1.641 1.641zm4.923-4.923V6.974c0-2.519-1.345-4.627-3.692-5.185V1.23C7.795.55 7.245 0 6.565 0c-.682 0-1.232.55-1.232 1.23v.559c-2.355.558-3.692 2.658-3.692 5.185v4.103L0 12.717v.821h13.128v-.82l-1.64-1.641z"/></g></g></svg>
                </button>
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
            </div>
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