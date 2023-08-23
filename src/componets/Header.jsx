import style from "./Header.module.css";

function Header() {
  return (
    <div className="header">
      <h1 className={style.text}>hello world</h1>
      <p className={style.para}>javascript</p>
      <p className="para"></p>
    </div>
  );
}

export default Header;
