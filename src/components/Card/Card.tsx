import styles from "./Card.module.scss";
import { useFetchData } from "../../customHooks/useFetchData";
import { useParams } from "react-router-dom";
import { DataType } from "../../../types/types";
import { Loading } from "../Loading";
import { useLoadingContext } from "../../customHooks/useLoadingContext";

export const Card = ({ dataType }: DataType) => {
  const { isLoading } = useLoadingContext();
  const { id } = useParams();
  const { data, error } = useFetchData({
    dataType: dataType,
    id,
  });

  const filteredItem = Object.entries(data).filter(
    ([key]) =>
      ![
        "id",
        "image",
        "origin",
        "location",
        "url",
        "episode",
        "residents",
        "characters",
      ].includes(key)
  );

  if (error) {
    return <h1>Что-то пошло не так!</h1>;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          {data.image && (
            <img src={data.image} alt={data.name} className={styles.avatar} />
          )}
          <h1 className={styles.cardName}>{data.name}</h1>
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
                    ? (value.split("T")[0] as string)
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
