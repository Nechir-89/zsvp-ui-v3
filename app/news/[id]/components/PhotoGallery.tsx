"use client";
import React from "react";
import { Gallery } from "react-grid-gallery";

type Props = {
  photos: NewsPhoto[];
};

export default function PhotoGallery({ photos }: Props) {
  const images = photos?.map((photo: NewsPhoto) => ({
    src: `${process.env.baseUrl}${photo.attributes.url}`,
    width: photo.attributes.width,
    height: photo.attributes.height,
  }));

  return <Gallery images={images} />;
}
