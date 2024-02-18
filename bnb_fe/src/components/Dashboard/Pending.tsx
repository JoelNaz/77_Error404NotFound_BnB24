import { getReportsbyStatus } from "@/api"
import { useEffect, useState } from "react"
import ReportComponent from "./ReportComponent"
import Modal from "./Modal"

function Pending() {
  const [pendingReports,setReports]=useState([])

  useEffect(()=>{
    const getPendingReport=async()=>{
      try{
        const response = await getReportsbyStatus("pending")
        setReports(response.data)
      }
      catch(e){

      }
    }
    getPendingReport()
  },[])
  return (
    <div className="flex flex-col gap-4">
      {
        pendingReports.map((item)=>(<Modal title={item.title} description={item.description} status={item.status}/>))
      }
    </div>
  )
}

export default Pending
