import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ankit Bhandari — Backend & Full Stack Developer",
    short_name: "Ankit Bhandari",
    description:
      "Portfolio of Ankit Bhandari — Backend Developer, Full Stack & Flutter Developer from Nepal.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0e17",
    theme_color: "#5eead4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
