import CardContact from "@/Components/cards/CardContact";
import CardForm from "@/Components/cards/CardForm";
import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/navigation/Navbar";
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
            url_img="img/half-face.jpg"
          />
        </div>
        <div className="bg-[#f6f6f6]">
          <CardForm />
        </div>
      </Layout>
    </>
  );
}
