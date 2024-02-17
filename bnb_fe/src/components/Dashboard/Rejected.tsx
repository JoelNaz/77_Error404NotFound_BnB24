import { getReportsbyStatus } from "@/api"
import { useEffect, useState } from "react"
import ReportComponent from "./ReportComponent"

function Rejected() {
  const [rejectedReports,setRejectedReports]=useState([])

  useEffect(()=>{
    const getPendingReport=async()=>{
      try{
        const response = await getReportsbyStatus("rejected")
        setRejectedReports(response.data)
      }
      catch(e){

      }
    }
    getPendingReport()
  },[])
  return (
    <div className="flex flex-col gap-4">
      {
        rejectedReports.map((item)=>(<ReportComponent title={item.title} description={item.description} status={item.status}/>))
      }
    </div>
  )
}

export default Rejected
