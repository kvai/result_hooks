import { Link } from "react-router-dom";
import styles from "./ItemsList.module.scss";
import { useFetchData } from "../../customHooks/useFetchData";
import { DataType } from "../../types";

export const ItemsList = ({dataType}: DataType) => {

  const { data, loading } = useFetchData(dataType);

  return loading ? (
    <div>Загружаю данные...</div>
  ) : (
    <>
      <div className={styles.itemsList}>
        <ul className={styles.list}>
          {data?.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link to={item.id.toString()} key={item.id}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
