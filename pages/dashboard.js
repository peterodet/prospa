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
          <div className="flex">
            <div className="flex-grow">
              <h4 className="text-2.5xl font-semibold leading-tight mb-2 md:mb-1">
                Welcome back, Kathy
              </h4>
              <p className="text-md">Here’s what has been happening in the last <span className="text-pink-500 underline">7 days</span></p>
            </div>
            <div className="my-auto">
              <Button>
                Add a sub account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
