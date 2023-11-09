import Header from "./assets/components/Header";
import Questions from "./assets/components/QuestionsLayout";
import SideNav from "./assets/components/SideNav";
import OverflowNews from "./assets/components/stack-overflow-news";
import { Routes, Route } from "react-router-dom";
import { Home } from "@mui/icons-material";

export default function App() {
  // const base = "https://api.stackexchange.com/";
  // const pathURL = "2.3/questions?order=desc&sort=activity&site=stackoverflow";

  // const fetchData = () => {
  //   const url = base + pathURL;
  //   fetch(url)
  //     .then((rep) => rep.json())
  //     .then((data) => console.log(data));
  // };

  return (
    <div className="app flex column">
      <Header />
      <div className="main-container row">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </div>
    </div>
  );
}
