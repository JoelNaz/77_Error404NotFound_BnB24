/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AlJ8QqsfYP8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { uploadReport } from "@/api"

export default function Form({userId}:{userId:string}) {
  const [title,setTitle]=useState("")
  const [location,setLocation]=useState("")
  const [description,setDescription]=useState("")

  const handleSubmit = async () =>{
    try{
      const response=await uploadReport(userId,{title,location,description})
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Report an Incident/Problem</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">Title</Label>
            <Input id="first-name" placeholder="An appropriate title describing the problem" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" placeholder="Enter the place where the incident/problem occurred" value={location} onChange={(e)=>setLocation(e.target.value)}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Describe the Problem/Incident in detail</Label>
          <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" />
        </div>
        <Button onClick={handleSubmit}>Report Problem</Button>
      </div>
    </div>
  )
}

