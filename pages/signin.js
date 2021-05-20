import Layout from '../layouts/auth'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/button'
import Input from '../components/input'
import Select from '../components/select'

export default function SignIn() {

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    if (e) e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push('/dashboard')
    }, 1500)
  }

  return (
    <Layout title="Sign In" bg="bg-purple-800">
      <div>
        <div className="flex flex-col max-w-375 mx-auto">
          <h4 className="text-2.5xl font-medium leading-tight mb-2 md:mb-2">
            Welcome back to Prospa
          </h4>
          <p className="text-md text-gray-400">
            An account, with powerful, personalised tools all in one place
          </p>
          <form onSubmit={(e) => submit(e)} className="flex flex-col gap-6 mt-8">
            <div>
              <Input type="email" label="Email address" />
            </div>
            <div>
              <Input type="password" label="Enter password" />
            </div>
            <Button loading={loading} block={true}>
                Next
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
