import Footer from "./Footer";
import MainSec from "./MainSec";
import Nav from "./Nav";
import Room_Tab from "./Room_Tab";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <>
      <Nav></Nav>
      <MainSec></MainSec>
      <SearchBar></SearchBar>
     
      <Room_Tab></Room_Tab>
      <Footer></Footer>
    </>
  );
}

export default Home;
