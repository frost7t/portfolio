import CardSlug from "@/Components/cards/CardSlug";
import Layout from "@/layout/Layout";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//  2.générer les slugs ou les articles
export async function getStaticPaths() {
  // je récupère les posts dans contentful
  const res = await client.getEntries({
    content_type: "portfolio",
  });

  const slugs = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  // envoies tous les slugs dans paths (chemin || route)
  return {
    paths: slugs,
    fallback: false,
    // tout les chemins qui ne sont pas son pathss => error 404
  };
}

// recupere data du post en fonction du slug

export async function getStaticProps({ params }) {
  // récupere la data
  const res = await client.getEntries({
    content_type: "portfolio",
    "fields.slug": params.slug,
  });

  // je stock la data du post dans une variable
  const post = res.items;

  return {
    props: {
      post: post[0],
    },
  };
}

export default function Index({ post }) {
  const { title, content, extract, createdAt, imgSinglePage, Do } = post.fields;
  // console.log(post.fields)
  return (
    <>
      <Layout>
        <div className="">
          <CardSlug
            title={title}
            extract={extract}
            createdAt={createdAt}
            content={content}
            Do={Do}
            imgSinglePage={imgSinglePage.fields.file.url}
          />
        </div>
      </Layout>
    </>
  );
}
