import dynamic from "next/dynamic";
import { Suspense } from "react";
import { LoadingProvider } from "../context/LoadingProvider";
import MainContainer from "../components/MainContainer";

const CharacterModel = dynamic(() => import("../components/Character"), {
  ssr: false,
  loading: () => <div className="character-loading" />,
});

export default function Home() {
  return (
    <LoadingProvider>
      <Suspense
        fallback={
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#050810",
              color: "#eae5ec",
              fontFamily: "Geist, sans-serif",
            }}
          >
            Loading...
          </div>
        }
      >
        <MainContainer>
          <CharacterModel />
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
}
