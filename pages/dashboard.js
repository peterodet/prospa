import Layout from '../layouts/dashboard'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/button'
import Input from '../components/input'
import Select from '../components/select'

export default function Dashboard() {

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    if (e) e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push('/signup/business-account')
    }, 1500)
  }

  return (
    <Layout title="Dashboard">
      <div>
        <div className="flex flex-col mx-auto">
          <div className="md:flex">
            <div className="flex-grow">
              <h4 className="text-2.5xl font-semibold leading-tight mb-2 md:mb-1">
                Welcome back, Kathy
              </h4>
              <p className="text-md">Here’s what has been happening in the last <span className="text-pink-500 underline">7 days</span></p>
            </div>
            <div className="my-5 md:my-auto">
              <Button>
                Add a sub account
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8 mt-5 md:mt-10">
          <div className="col-span-12 md:col-span-6">
            <div className="bg-white shadow-md rounded-md pt-6 px-6 pb-4">
              <div className="flex gap-6">
                <div className="flex-grow text-sm my-auto">
                  <p className="text-">CURRENT ACCOUNT</p>
                  <p className="text-gray-400">PROVIDUS BANK - 9906533917</p>
                </div>
                <i className="inline-block w-11 h-11 bg-purple-100 rounded-full">
                  <svg className="text-purple-500 m-auto mt-3" width="23" height="18" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-2.4%" y="-4.1%" width="104.7%" height="112.9%" filterUnits="objectBoundingBox" id="a"><feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.51372549 0 0 0 0 0.592156863 0 0 0 0 0.670588235 0 0 0 0.16 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0.51372549 0 0 0 0 0.592156863 0 0 0 0 0.670588235 0 0 0 0.16 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter><rect id="b" x="0" y="0" width="468" height="170" rx="6"/></defs><g fill="none" fillRule="evenodd"><path fill="none" d="M-796-232H644v900H-796z"/><g transform="translate(-406 -33)"><use fill="none" filter="url(#a)"/><use fill="none"/></g><g transform="translate(-11 -13)"><rect fill="none" opacity="1" width="44.379" height="44" rx="20"/><path d="M31.066 13.2H13.314a2.192 2.192 0 00-2.208 2.2l-.011 13.2c0 1.221.987 2.2 2.219 2.2h17.752a2.202 2.202 0 002.218-2.2V15.4c0-1.221-.987-2.2-2.218-2.2zm0 15.4H13.314V22h17.752v6.6zm0-11H13.314v-2.2h17.752v2.2z" fill="currentColor" fillRule="nonzero"/><path d="M19.738 15.315h-.606a.75.75 0 01-.03-.178h.696c-.014.06-.033.119-.06.178" fill="none"/></g></g></svg>
                </i>
              </div>
              <div className="mt-8 md:mt-12">
                <p className="text-4xl">N814,800<small className="text-2xl">.45</small></p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="bg-white shadow-md rounded-md pt-6 px-6 pb-4">
              <div className="flex gap-6">
                <div className="flex-grow text-sm my-auto">
                  <p className="text-">CURRENT ACCOUNT</p>
                  <p className="text-gray-400">PROVIDUS BANK - 9906533917</p>
                </div>
                <i className="inline-block w-11 h-11 bg-blue-100 rounded-full">
                  <svg className="text-blue-500 m-auto mt-3" width="23" height="18" xmlns="http://www.w3.org/2000/svg"><defs><filter x="-2.4%" y="-4.1%" width="104.7%" height="112.9%" filterUnits="objectBoundingBox" id="a"><feOffset dy="4" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.51372549 0 0 0 0 0.592156863 0 0 0 0 0.670588235 0 0 0 0.16 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation=".5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0.51372549 0 0 0 0 0.592156863 0 0 0 0 0.670588235 0 0 0 0.16 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter><rect id="b" x="0" y="0" width="468" height="170" rx="6"/></defs><g fill="none" fillRule="evenodd"><path fill="none" d="M-796-232H644v900H-796z"/><g transform="translate(-406 -33)"><use fill="none" filter="url(#a)"/><use fill="none"/></g><g transform="translate(-11 -13)"><rect fill="none" opacity="1" width="44.379" height="44" rx="20"/><path d="M31.066 13.2H13.314a2.192 2.192 0 00-2.208 2.2l-.011 13.2c0 1.221.987 2.2 2.219 2.2h17.752a2.202 2.202 0 002.218-2.2V15.4c0-1.221-.987-2.2-2.218-2.2zm0 15.4H13.314V22h17.752v6.6zm0-11H13.314v-2.2h17.752v2.2z" fill="currentColor" fillRule="nonzero"/><path d="M19.738 15.315h-.606a.75.75 0 01-.03-.178h.696c-.014.06-.033.119-.06.178" fill="none"/></g></g></svg>
                </i>
              </div>
              <div className="mt-8 md:mt-12">
                <p className="text-4xl">N814,800<small className="text-2xl">.45</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
