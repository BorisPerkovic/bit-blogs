import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="container-fluid fixed-bottom">
      <footer className={classes.footer}>
        <p className="text-center fs-3">Copyright (C) BIT 2021</p>
      </footer>
    </div>
  );
};

export default Footer;
