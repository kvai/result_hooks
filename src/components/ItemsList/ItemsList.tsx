import { Link } from "react-router-dom";
import styles from "./ItemsList.module.scss";
import { useFetchData } from "../../customHooks/useFetchData";
import { DataType } from "../../../types/types";
import { Loading } from "../Loading";
import { useLoadingContext } from "../../customHooks/useLoadingContext";

export const ItemsList = ({ dataType }: DataType) => {
  const { isLoading } = useLoadingContext();

  const { data } = useFetchData(dataType);

  return isLoading || !data.length ? (
    <Loading />
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
