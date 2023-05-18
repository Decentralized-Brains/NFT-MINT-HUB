import "@styles/globals.css";
import Nav from "@components/Nav";
import Sidebar from "@components/Sidebar";

export const metadata = {
  title: "NFT MINT HUB",
  description: "MINT NFT TODAY!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
