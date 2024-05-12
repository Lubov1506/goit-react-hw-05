import s from "./Container.module.css";

const Container = (props) => {
  return <div {...props} className={s.container}>{props.children}</div>;
};
export default Container;
