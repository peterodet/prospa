import Layout from '../../layouts/auth'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Button from '../../components/button'
import Input from '../../components/input'
import RadioContent from '../../components/radio-content'

export default function BusinessAccountUnreg() {

  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(1)

  const submit = (e) => {
    if (e) e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      router.push('/signin')
    }, 1500)
  }

  return (
    <Layout title="Sign Up" bg="bg-purple-600" back="/signup/business-account">
      <div>
        <div className="flex flex-col max-w-375 mx-auto">
          <h4 className="text-2.5xl font-medium leading-tight mb-2 md:mb-2">
            Open a new business account
          </h4>
          <p className="text-md text-gray-400">A short description comes here</p>
          <form onSubmit={(e) => submit(e)} className="flex flex-col gap-5 mt-8">
            <div>
              <RadioContent
                label="I have a registered business / charity with CAC"
                checked={selected === 0}
                onChange={(e) => setSelected(0)}
              >
                <div className="text-sm text-gray-400 mt-5">
                  <p className="mb-3">As a registered business you’ll get:</p>
                  <ul className="checklist">
                    <li>Account in your business name</li>
                    <li>Send to and receive transfers from all Nigerian banks</li>
                    <li>Tools for business management</li>
                  </ul>
                </div>
              </RadioContent>
            </div>
            <div>
              <RadioContent
                label="My business is not yet registered, I would like to register"
                checked={selected === 1}
                onChange={(e) => setSelected(1)}
              >
                <div className="text-sm text-gray-400 mt-5">
                  <p className="mb-3">Everything you need to start your business:</p>
                  <ul className="checklist">
                    <li>Registered business name with the CAC</li>
                    <li>Tax identification number</li>
                    <li>Your account will be automatically opened on completion</li>
                  </ul>
                </div>
              </RadioContent>
            </div>
            <div>
              <RadioContent
                label="I’m a freelancer I do business in my personal name"
                checked={selected === 2}
                onChange={(e) => setSelected(2)}
              >
                <div className="text-sm text-gray-400 mt-5">
                  <p className="mb-3">As a registered business you’ll get:</p>
                  <ul className="checklist">
                    <li>Account in your business name</li>
                    <li>Send to and receive transfers from all Nigerian banks</li>
                    <li>Tools for business management</li>
                  </ul>
                </div>
              </RadioContent>
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
