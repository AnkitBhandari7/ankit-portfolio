/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "three",
    "three-stdlib",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/postprocessing",
    "@react-three/rapier",
    "@react-three/cannon",
  ],
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
