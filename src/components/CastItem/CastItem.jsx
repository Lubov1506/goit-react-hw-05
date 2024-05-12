import s from "./CastItem.module.css";

const CastList = ({ item }) => {
  return (
    <li className={s.li_cast} key={item.id} title={item.name}>
      <div className={s.img_wrap}>
        <img src={item.profile_path} alt={item.title} />
      </div>
      <div className={s.desc}>
        <h3>{item.original_name}</h3>
        <p>{item.character}</p>
      </div>
    </li>
  );
};

export default CastList;
