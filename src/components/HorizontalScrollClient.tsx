"use client";
import dynamic from "next/dynamic";

const HorizontalScroll = dynamic(() => import("./HorizontalScroll"), { ssr: false });

export default function HorizontalScrollClient() {
  return <HorizontalScroll />;
}
