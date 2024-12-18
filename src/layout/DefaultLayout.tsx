import { useSelector } from "react-redux";
import Footer from "../components/ui/footer/Footer";
import Header from "../components/ui/header/Header";
import { RootState } from "../redux/store";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useSelector((state: RootState) => state.lang);
  return (
    <div
      className={`relative ${lang === "en" ? "font-inter" : "font-helvetica"}`}
    >
      <Header />
      <main className="min-h-[50vh] max-w-[1920px] mx-auto overflow-hidden">
        {children}
      </main>
      {/* <footer>this is footer</footer> */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
