import { Link } from "react-router-dom";
import styles from "./ItemsList.module.scss";
import { useFetchData } from "../../customHooks/useFetchData";
import { DataType, ItemsData } from "../../../types/types";
import { Loading } from "../Loading";
import { useLoadingContext } from "../../customHooks/useLoadingContext";
import { useCallback, useEffect, useRef, useState } from "react";

export const ItemsList = ({ dataType }: DataType) => {
  const { isLoading } = useLoadingContext();
  const [pageNumber, setPageNumber] = useState(1);
  const [items, setItems] = useState<ItemsData[]>([]);

  const { data, error } = useFetchData({ dataType, pageNumber });
  const hasMore = pageNumber < data?.info?.pages;

  useEffect(() => {
    if (data?.results) {
      setItems((prev) => {
        return [...new Set([...prev, ...data.results])];
      });
    }
  }, [data]);

  useEffect(() => {
    setItems([]);
    setPageNumber(1);
  }, [dataType]);

  const observer = useRef();

  const lastNodeRef = useCallback(
    (node) => {
      if (isLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });

      if (node) {
        observer.current?.observe(node);
      }
    },
    [isLoading, hasMore]
  );

  if (error) return <h1>Что-то пошло не так!</h1>;

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className={styles.itemsList}>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li
              key={`${item.id}-${item.name}-${index}`}
              className={styles.item}
            >
              <Link
                ref={items.length - 10 === index + 1 ? lastNodeRef : null}
                to={item.id.toString()}
                key={item.id}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
