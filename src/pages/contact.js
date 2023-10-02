import CardContact from "@/Components/cards/CardContact";
import CardForm from "@/Components/cards/CardForm";
import Layout from "@/layout/Layout";
import React from "react";

export default function Contact() {
  return (
    <>
      <Layout>
        <div className="mx-auto max-w-[1040px]">
          <CardContact
            title="contact."
            subtitle="Get in touch with me via social"
            url_img="img/ai.jpg"
          />
        </div>
        <div className="bg-[#f6f6f6] max-h-screen">
          <CardForm />
        </div>
      </Layout>
    </>
  );
}
