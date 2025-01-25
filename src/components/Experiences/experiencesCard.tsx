import LoadTimeIcon from "../Icons/LoadTimeIcon";
import ImageOptimization from "../Icons/ImageOptimizationIcon";
import NextjsIcon from "../Icons/NextjsIcon";
import APIIcon from "../Icons/APIIcon";

export const experienceCard = [
  {
    icon: <LoadTimeIcon color="primary" width={30} height={30} />,
    title: "Optimizing Initial Load",
    description:
      "Optimized initial app load time by minimizing JavaScript bundle size, replacing Material-UI with custom SCSS module components, and improving performance by 20%.",
  },
  {
    icon: <ImageOptimization color="secondary" width={30} height={30} />,
    title: "Improving Image Loading",
    description:
      "Enhanced app performance by implementing lazy loading and next-gen image formats, resulting in faster page loads and improved user experience.",
  },
  {
    icon: <APIIcon color="warning" width={30} height={30} />,
    title: "Minimizing API Latency",
    description:
      "Reduced API latency by 35% through efficient caching strategies and minimizing redundant API calls using React Query.",
  },
  {
    icon: <NextjsIcon color="white" width={50} height={50} />,
    title: "Enhancing Server Response",
    description:
      "Improved server response time and reduced perceived load time by leveraging server-side rendering (SSR) with Next.js.",
  },
];
