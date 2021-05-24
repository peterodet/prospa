import Layout from '../layouts/auth'
import { useState, Fragment } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/button'
import Input from '../components/input'
import Select from '../components/select'

export default function Home() {

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
    <div>
      <Layout title="Sign Up" bg="bg-purple-600">
        <div>
          <div className="flex flex-col max-w-375 mx-auto">
            <h4 className="text-2.5xl font-medium leading-tight mb-2 md:mb-2">
              Create your account
            </h4>
            <p className="text-md text-gray-400">A short description about account types</p>
            <form onSubmit={(e) => submit(e)} className="prospa-form flex flex-col gap-6 mt-8">
              <div>
                <Input label="First name" />
              </div>
              <div>
                <Input label="Last name" />
              </div>
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-4">
                  <Select label="Country" block={true} options={['+234', '+322']} />
                </div>
                <div className="col-span-8">
                  <Input type="tel" label="Mobile number" block={true} />
                </div>
              </div>
              <div>
                <Input type="email" label="Email address" />
              </div>
              <Button loading={loading} block={true}>
                  Next
              </Button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}
