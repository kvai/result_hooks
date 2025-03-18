
import "./App.css";
import { useFetch } from "./customHooks/useFetch";

function App() {
const url = "https://jsonplaceholder.typicode.com/posts"

  const { data, isLoading, error, refetch } = useFetch(url);

  return (
    <>
      <h1>useFetch</h1>
      <div className="card">
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : 'Перезапросить'}
        </button>
       
          <p>{isLoading && "Загрузка..."}</p>
          <p>{error && "Произошла ошибка"}</p>
        
        {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
      </div>
    </>
  );
}

export default App;
