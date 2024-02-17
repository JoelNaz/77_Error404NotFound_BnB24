import { Card } from "@/components/ui/card"

export default function ReportComponent() {
  return (
    <Card className="flex items-start p-6">
      {/* <img
        alt="Image"
        className="rounded-lg object-cover"
        height="200"
        src="/placeholder.svg"
        style={{
          aspectRatio: "200/200",
          objectFit: "cover",
        }}
        width="200"
      /> */}
      <div className="ml-6 grid gap-2">
        <h1 className="text-2xl font-bold">Card Title</h1>
        <p className="text-sm">Description for the card.</p>
      </div>
    </Card>
  )
}