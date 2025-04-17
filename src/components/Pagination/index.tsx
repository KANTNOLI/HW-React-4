import { Link } from "react-router";
import style from "./Pagination.module.css";

function Pagination() {
  return (
    <section className={style.pagination}>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/students">
        <div>Students</div>
      </Link>
      <Link to="/news">
        <div>News</div>
      </Link>
    </section>
  );
}

export default Pagination;
