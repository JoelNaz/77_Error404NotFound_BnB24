/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AlJ8QqsfYP8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Form() {
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
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input id="image" type="file" />
        </div>
        <Button>Send message</Button>
      </div>
    </div>
  )
}

