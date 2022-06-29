import React from "react";
import classes from "../Nav/Nav.module.css";
import ArrowDown from "../../Img/arrow-down.svg";
function Nav() {
  return (
    <div className={classes.Nav}>
      <ul>
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#" className={classes.Nav__arrowfix}>
            О клубе <img src={ArrowDown} alt="'" />
          </a>
        </li>
        <li>
          <a href="#" className={classes.Nav__arrowfix}>
            «ФИГУРНОЕ КАТАНИЕ — СПОРТ ДЛЯ ВСЕХ!»
            <img src={ArrowDown} alt="'" />
          </a>
        </li>
        <li>
          <a href="#" className={classes.Nav__arrowfix}>
            «СТАВРОПОЛЬСКИЙ ШОУ-БАЛЕТ НА ЛЬДУ»
            <img src={ArrowDown} alt="'" />
          </a>
        </li>
        <li>
          <a href="#">Расписание занятий</a>
        </li>
        <li>
          <a href="#" className={classes.Nav__arrowfix}>
            Соревнования
            <img src={ArrowDown} alt="'" />
          </a>
        </li>
        <li>
          <a href="#" className={classes.Nav__arrowfix}>
            Ледовые шоу
            <img src={ArrowDown} alt="'" />
          </a>
        </li>
        <li>
          <a href="#" className={classes.Nav__arrowfix}>
            Расписание соревнований
            <img src={ArrowDown} alt="'" />
          </a>
        </li>
        <li>
          <a href="#">СМИ О НАС</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
