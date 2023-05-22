import CardAbout from "@/Components/cards/CardAbout";
import CardPart from "@/Components/cards/CardPart";
import CardQrCode from "@/Components/cards/CardQrCode";
import CardRandom from "@/Components/cards/CardRandom";
import CardStory from "@/Components/cards/CardStory";
import { DataStory } from "@/data/DataStory";
import Layout from "@/layout/Layout";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <>
      <Layout>
        <div className="">
          <div className="border-b-2 border shadow-lg">
            <div className="mx-auto max-w-[1040px] md:pb-10">
              <CardAbout
                title="About."
                subtitle="I'm a product designer and web developer based in Normandie."
                description="Since 2021, I've enjoyed turning complex problems into simple, beautiful and intuitive designs.you'll find me cooking, code or play.I show wisdom like yoda"
                url_img="img/n1.png"
              />
            </div>
          </div>
          <div className="border-b-2 border ">
            <div className="mx-auto max-w-[1040px] md:pt-14">
              <CardPart
                title="Part designer"
                title2="Part coder"
                first="UI design"
                first2="Front-end development"
                second="UX design"
                second2="HTML / CSS"
                third="indesign"
                third2="JavaScript"
                four="Illustrator"
                four2="React/nextJs"
                five2=""
                url_img="/img/cam.png"
              />
            </div>
          </div>
          <div className="">
            <div className="mx-auto max-w-[1040px] ">
              <CardRandom
                url_img="img/yoda.jpg"
                title="Random facts"
                subtitle="I drink a lot of tea and coffee"
                subtitle1="i'm into Web developer"
                subtitle2="Gaming is my zen time"
                subtitle3="I love to cook (and eat)"
                subtitle4="I'm a bit of a clean freak"
                subtitle5="I want to live on the Galaxis with the guardians"
                subtitle6="I'm slightly addicted to Gaming"
                subtitle7="Yoda is my mentor"
              />
            </div>
          </div>
          <div className="border-b-2 border">
            <div className="">
              <aside>
                {DataStory.map((item, index) => (
                  <div key={index}>
                    <CardStory
                      url_img={item.url_img}
                      title={item.title}
                      subtitle={item.subtitle}
                      description={item.description}
                    />
                  </div>
                ))}
              </aside>
            </div>
          </div>
          <div className="mx-auto max-w-[1040px] ">
            <CardQrCode
              title="Scan me"
              url_img="img/Qr.png"
              subtitle="online CV"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
