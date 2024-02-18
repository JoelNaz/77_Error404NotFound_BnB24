import { useState } from "react";
import { Card } from "@/components/ui/card";
import Modal from "react-modal";
import { Button } from "../ui/button";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    borderRadius: "8px",
  },
};

export default function ReportModal({ title, description, status = "pending" }: { title: string; description: string; status: string }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <Card className="flex p-6">
      <div className="flex justify-between items-center w-full">
        <div className="ml-6 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
        <div>
          <a href="#" onClick={openModal}>Details</a>

          <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={modalStyles}
  contentLabel="Example Modal"
>
  <div style={{ position: "absolute", top: "10px", right: "10px" }}>
    <button onClick={closeModal} style={{ fontSize: "20px", fontWeight: "bold" }}>
      ✕
    </button>
  </div>
  <div style={{ paddingBottom: "20px", paddingTop: "10px", fontSize: "30px" }}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  <div style={{ position: "absolute", bottom: "20px", right: "20px" }}>

    <Button>Chat With the Volunteer</Button>
  </div>
</Modal>
        </div>
      </div>
    </Card>
  );
}