export default function Footer({ theme }) {
  return (
    <footer
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-primary text-white"
      } py-8 mt-12 text-center transition-colors duration-500`}
    >
      <p>© 2025 ISLAM MD ROBIUL - Full Stack Developer | Designed with modern technologies</p>
    </footer>
  );
}
