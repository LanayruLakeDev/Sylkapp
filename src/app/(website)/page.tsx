import type { Metadata } from "next";
import HomeClient from "./_component/home-client";

export const metadata: Metadata = {
  keywords: [
    "Facebook automation",
    "Instagram automation",
    "Facebook engagement",
    "Instagram engagement",
    "AI Facebook responses",
    "AI Instagram responses",
    "Facebook marketing",
    "Instagram marketing",
    "Social media tools",
  ],
  openGraph: {
    title: "Sylk - Transform Your Facebook & Instagram Engagement",
    description:
      "Sylk revolutionizes how you connect with your audience on Facebook and Instagram. Automate responses and boost engagement effortlessly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylk - Transform Your Facebook & Instagram Engagement",
    description:
      "Sylk revolutionizes how you connect with your audience on Facebook and Instagram. Automate responses and boost engagement effortlessly.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
