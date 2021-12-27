import React from "react";
import Image from "../../Components/SingleImage";
import { images } from "../../constants";

function Page({ index }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image index={index} />;
}

export async function getStaticPaths() {
  return {
    paths: images
      .map((id) => id)
      .map((_id, index) => {
        return {
          params: {
            image: `${index}`,
          },
        };
      }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const number = Number.parseInt(params.image, 10);
  return {
    props: {
      index: number,
    },
  };
}

export default Page;
