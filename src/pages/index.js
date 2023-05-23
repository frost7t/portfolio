import Hero from "@/Components/Hero";
import Card from "@/Components/cards/Card";
import Layout from "@/layout/Layout";
import { createClient } from "contentful";

export default function Home({ posts }) {
  return (
    <Layout>
      <div className="h-full">
        <div className="">
          <Hero />
        </div>
        <div className="bg-[#FBFAFB]">
          <div className="relative flex pt-5 lg:pt-10 items-center justify-center">
            <div className="w-1/6 border-t border-gray-400 hidden sm:block"></div>
            <span className="mx-8 uppercase ">Some of my latest work</span>
            <div className="w-1/6 border-t border-gray-400 hidden sm:block"></div>
          </div>
          <div className="max-w-[1040px] grid grid-cols-1  gap-5 mx-auto md:grid-cols-2 px-5 lg:grid-cols-3 ">
            {posts.map((post) => (
              <Card
                key={post.sys.id}
                title={post.fields.title}
                extract={post.fields.extract}
                img={post.fields.featureImage.fields.file.url}
                slug={post.fields.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  // 1.Connecte à Contentful
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  // 2. je récupère ma date en cas de success pour le  content_type =>
  const data = await client.getEntries({
    content_type: "portfolio",
    order: "sys.createdAt",
    limit: 3,
  });

  // 3.on envoie la data dans le props de ma page
  return {
    props: {
      posts: data.items,
    },
  };
}
