import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = { params: { id: string }; searchParams: Record<string, any> };

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = { title: "my title" };

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default function About() {
  return <h1>about</h1>;
}
