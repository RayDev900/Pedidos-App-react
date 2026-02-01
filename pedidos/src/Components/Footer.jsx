import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">© {new Date().getFullYear()} RayDev</p>
      <p className="footer-text">Hecho con ❤️ en React</p>

    </footer>
  );
}

export default Footer;
