import FixedBackArrow from "@/components/FixedBackArrow";
import ProjectHeader from "@/components/layout/ProjectHeader";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="container">
      <FixedBackArrow />
      <ProjectHeader />
      <Banner imgPath="/imgs/banner01-min.png" />
      <Banner imgPath="/imgs/banner02-min.png" />
    </main>
  );
}
