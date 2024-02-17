import { getReportsbyStatus } from "@/api"
import { useEffect, useState } from "react"
import ReportComponent from "./ReportComponent"

function Rejected() {
  const [acceptedReports,setAcceptedReports]=useState([])

  useEffect(()=>{
    const getPendingReport=async()=>{
      try{
        const response = await getReportsbyStatus("accepted")
        setAcceptedReports(response.data)
      }
      catch(e){

      }
    }
    getPendingReport()
  },[])
  return (
    <div className="flex flex-col gap-4">
      {
        acceptedReports.map((item)=>(<ReportComponent title={item.title} description={item.description} status={item.status}/>))
      }
    </div>
  )
}

export default Rejected
