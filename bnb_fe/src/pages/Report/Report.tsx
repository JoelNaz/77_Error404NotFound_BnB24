import ExampleNavbarThree from '@/components/Dashboard/Navbar'
import Form from '@/components/Report/Form'
import { useProfileStore } from '@/store/store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Report() {
  const token = useProfileStore((state)=>state.token)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!token)
      navigate('/signin')
  },[]) 
  return (
    <>
      <ExampleNavbarThree/>
        <div className='mx-60 mt-[75px]'>
          <Form/>
        </div>
    </>
  )
}

export default Report
