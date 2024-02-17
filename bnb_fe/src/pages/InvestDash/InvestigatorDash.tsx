import ExampleNavbarThree from "@/components/Dashboard/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function InvestigatorDash() {
  return (
    <div>
      <ExampleNavbarThree />
      <div className="mx-64">
        <div className="text-[20px] mt-12 font-bold">
          {" "}
          All Problems/Incident Reported{" "}
        </div>
        <div className="flex gap-3 flex-col justify-center mt-5">
          <Tabs defaultValue="pending" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="accepted">Accepted</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            <TabsContent value="pending">
             pending
            </TabsContent>
            <TabsContent value="accepted">
              accepted
            </TabsContent>
            <TabsContent value="rejected">
              rejected
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default InvestigatorDash;
