import "@/app/App.css";
export default function Header({ children }) {
  return (
    <header className="header">
      <h1>🛒 Интернет-магазин</h1>
      {children}
    </header>
  );
}
