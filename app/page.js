import Feed from "../app/Component/Feed/feed";
import Sidebar from "../app/Component/sidebar/sidebar";

export default function Home() {
  return (
    <main className="main-container">
      <Sidebar />
      <Feed />
    </main>
  );
}
