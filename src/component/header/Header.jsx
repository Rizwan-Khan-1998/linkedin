import "../../index.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="bg-white">
      <div className="flex bg-white">
        <Navbar />
      </div>
    </div>
  );
}
