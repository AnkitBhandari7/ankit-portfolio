import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0e17",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ankitbhandari7.com.np"),
  title:
    "Ankit Bhandari — Backend Developer | Full Stack & Flutter Developer from Nepal",
  description:
    "Ankit Bhandari is a motivated Backend Developer from Kathmandu, Nepal with internship experience at Swift Technology (IME Group). Skilled in Node.js, Express.js, TypeScript, React.js, Flutter, MySQL, MongoDB, and REST API development. BSc (Hons) Computing student at Islington College.",
  keywords: [
    "Ankit Bhandari",
    "Backend Developer",
    "Full Stack Developer",
    "Flutter Developer",
    "Node.js Developer",
    "React Developer",
    "TypeScript",
    "Express.js",
    "Nepal Developer",
    "Kathmandu Developer",
    "Web Developer Nepal",
    "REST API Developer",
    "Software Engineer Nepal",
    "Islington College",
    "Swift Technology",
    "IME Group",
    "MongoDB",
    "MySQL",
    "Portfolio",
  ],
  authors: [{ name: "Ankit Bhandari", url: "https://ankitbhandari7.com.np" }],
  creator: "Ankit Bhandari",
  publisher: "Ankit Bhandari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ankitbhandari7.com.np",
    siteName: "Ankit Bhandari — Portfolio",
    title:
      "Ankit Bhandari — Backend Developer | Full Stack & Flutter Developer",
    description:
      "Backend Developer with experience in Node.js, Express.js, Flutter, React, TypeScript, MySQL & MongoDB. Currently pursuing BSc (Hons) Computing at Islington College, Kathmandu.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankit Bhandari — Backend Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Bhandari — Backend Developer | Full Stack & Flutter",
    description:
      "Backend Developer from Nepal skilled in Node.js, TypeScript, React, Flutter, MySQL & MongoDB. View projects and experience.",
    images: ["/og-image.png"],
    creator: "@ankitbhandari",
  },
  alternates: {
    canonical: "https://ankitbhandari7.com.np",
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

// JSON-LD Structured Data for Google Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://ankitbhandari7.com.np/#person",
      name: "Ankit Bhandari",
      givenName: "Ankit",
      familyName: "Bhandari",
      jobTitle: "Backend Developer",
      description:
        "Motivated backend developer with internship experience in Node.js at Swift Technology Pvt. Ltd (IME Group). Skilled in building REST APIs, working with SQL/NoSQL databases, and developing full-stack web applications.",
      url: "https://ankitbhandari7.com.np",
      email: "ankeetbhandari77@gmail.com",
      telephone: "+977-9846338128",
      image: "https://ankitbhandari7.com.np/og-image.png",
      sameAs: [
        "https://github.com/ankitBhandari7",
        "https://www.linkedin.com/in/ankitbhandari77/",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Islington College",
        description:
          "Affiliated with London Metropolitan University, Kathmandu, Nepal",
        sameAs: "https://islington.edu.np",
      },
      knowsAbout: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "JavaScript",
        "React.js",
        "Flutter",
        "Dart",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "Python",
        "Java",
        "Docker",
        "Git",
        "Firebase",
        "ASP.NET Core",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "AWS Academy Cloud Foundations",
          credentialCategory: "Certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "Amazon Web Services",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "AWS Academy Data Engineering",
          credentialCategory: "Certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "Amazon Web Services",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "AWS Academy Machine Learning Foundations",
          credentialCategory: "Certificate",
          recognizedBy: {
            "@type": "Organization",
            name: "Amazon Web Services",
          },
        },
      ],
      worksFor: {
        "@type": "Organization",
        name: "Swift Technology Pvt. Ltd (IME Group)",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://ankitbhandari7.com.np/#website",
      url: "https://ankitbhandari7.com.np",
      name: "Ankit Bhandari — Backend Developer Portfolio",
      description:
        "Portfolio website of Ankit Bhandari, a backend developer from Nepal specializing in Node.js, Express.js, React, Flutter and modern web technologies.",
      publisher: {
        "@id": "https://ankitbhandari7.com.np/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://ankitbhandari7.com.np/#webpage",
      url: "https://ankitbhandari7.com.np",
      name: "Ankit Bhandari — Backend Developer | Full Stack & Flutter Developer",
      description:
        "Portfolio of Ankit Bhandari — a backend developer from Kathmandu, Nepal. View projects, experience, certifications, and get in touch.",
      isPartOf: {
        "@id": "https://ankitbhandari7.com.np/#website",
      },
      about: {
        "@id": "https://ankitbhandari7.com.np/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      name: "Projects by Ankit Bhandari",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "Hamro Pani",
            description:
              "A cross-platform mobile app addressing urban water scarcity with real-time GPS tracking and eSewa payment integration.",
            applicationCategory: "MobileApplication",
            operatingSystem: "Android, iOS",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: "AutoPart Pro",
            description:
              "Enterprise auto parts dealership system with role-based portals and LINQ-driven financial reporting.",
            applicationCategory: "WebApplication",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareApplication",
            name: "MindFlow",
            description:
              "Desktop & web journaling app with secure auth, rich-text editing, analytics dashboards, and PDF export.",
            applicationCategory: "DesktopApplication",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
