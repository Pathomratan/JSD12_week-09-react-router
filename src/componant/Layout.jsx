import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-green-300">Navbar</div>
      <div className="bg-purple-500">
        <Outlet />
      </div>
    </div>
  );
}
