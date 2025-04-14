import { useFormatDate } from "../../customHooks/useFormatDate";
import styles from "./Card.module.scss";
import { useFetchData } from "../../customHooks/useFetchData";
import { useParams } from "react-router-dom";
import { DataType } from "../../../types/types";
import { Loading } from "../Loading";
import { useLoadingContext } from "../../customHooks/useLoadingContext";

export const Card = ({ dataType }: DataType) => {
  const { isLoading } = useLoadingContext();
  const { id } = useParams();
  const { data } = useFetchData(dataType);

  let item = null;
  let filteredItem = null;
  let formattedDate = null;

  if (!isLoading && data.length) {
    item = data?.find((item) => id === item.id.toString());
    formattedDate = item?.created;
    filteredItem = Object.entries(item).filter(
      ([key]) => !["id", "image"].includes(key)
    );
  }
  const itemDate = useFormatDate(formattedDate);

  return isLoading || !data.length ? (
    <Loading />
  ) : (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          {item.image && (
            <img src={item.image} alt={item.name} className={styles.avatar} />
          )}
          <h1 className={styles.cardName}>{item.name}</h1>
        </div>
        <div className={styles.cardInfo}>
          <ul>
            {filteredItem?.map(([key, value]) => (
              <li key={key + value} className={styles.detailItem}>
                <span className={styles.detailLabel}>
                  {key.replace("_", " ")}:
                </span>
                <span className={styles.detailValue}>
                  {key === "created"
                    ? itemDate
                    : (value as string) || "unknown"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
