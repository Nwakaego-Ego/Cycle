import Feed from "../app/Component/Feed/feed";
import Sidebar from "../app/Component/sidebar/sidebar";
import Circles from "./Component/Circles/circles";

export default function Home() {
  return (
    <main className="main-container">
      <Sidebar />
      <Feed />
      <Circles />
    </main>
  );
}
