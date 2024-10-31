import { useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  return (
    <>
      <div className="navbar">
        <ul>
          <li><a href="/osint">{location.pathname === "/osint" ? "■" : "▣"}</a></li>
          <li><a href="/cryptography">{location.pathname === "/cryptography" ? "■" : "▣"}</a></li>
          <li><a href="/sqli">{location.pathname === "/sqli" ? "■" : "▣"}</a></li>
          <li><a href="/steganography">{location.pathname === "/steganography" ? "■" : "▣"}</a></li>
        </ul>
      </div>
    </>
  )
}