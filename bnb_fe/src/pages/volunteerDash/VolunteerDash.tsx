import ExampleNavbarThree from "@/components/Dashboard/Navbar"
import ReportComponent from "@/components/Dashboard/ReportComponent"
import { useProfileStore } from "@/store/store"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { getAllUserReports } from "@/api"
import { Button } from "@/components/ui/button"
import { title } from "process"
import SpinnerCircular from "@/components/ui/SpinnerCircular"

function VolunteerDash() {
  const token = useProfileStore((state)=>state.token)
  const navigate = useNavigate()
  const [reports,setReports] =useState([])
  const [isLoading,seIsLoading] =useState(false)
  useEffect(()=>{
    const fetchReports=async()=>{
      if(!token){
        navigate("/")
      }
      else{
        const decoded=jwtDecode(token) as { _id: string }
        // console.log(decoded)
        seIsLoading(true)
        const response = await getAllUserReports(decoded._id) 
        setReports(response?.data.userReports)
        seIsLoading(false)
      }  
    }
      fetchReports();
    
  },[token])

  console.log(reports)

  return (
    <div>
      <ExampleNavbarThree/>
      <div className=" mx-60 mt-10">
        <div className="text-[28px]">My Reported Incidents</div>
        <div className="flex flex-col gap-2 mx-4 mt-5">
        {reports &&
          reports.map((item)=>(
            <ReportComponent title={item.title} description={item.description}/>
          ))
        }
        {
          !isLoading && reports.length==0 && <div className="text-center mt-[200px] flex flex-col gap-5">
          <div>Not Reported any Incident yet</div>
          <NavLink to="/report"><Button>Report a Problem</Button></NavLink>
          </div>
        }
        {
          isLoading && <SpinnerCircular/>
        }
      </div>
      </div>

    </div>
  )
}

export default VolunteerDash
