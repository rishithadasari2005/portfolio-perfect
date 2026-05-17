import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Rishitha Dasari — Developer & CS Student" },
      { name: "description", content: "Portfolio of Rishitha Dasari — Computer Science student at Vasavi College, building web applications and solving algorithmic challenges." },
      { property: "og:title", content: "Rishitha Dasari — Developer Portfolio" },
      { property: "og:description", content: "CS Engineering student. Web developer. Flipkart GRID semi-finalist. TCS CodeVita qualifier." },
    ],
  }),
});
