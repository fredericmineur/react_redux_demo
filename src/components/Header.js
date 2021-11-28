import { Fragment } from 'react';
import classes from './Header.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatchLogin = useDispatch();
  const logOutHandler = () => {
    dispatchLogin(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLoggedIn &&
          <Fragment>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li> 
          </Fragment>
}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
