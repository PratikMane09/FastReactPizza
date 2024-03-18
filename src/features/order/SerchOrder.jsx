import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

function SerchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handlesubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handlesubmit}>
      <input
        placeholder="Serch order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SerchOrder;
