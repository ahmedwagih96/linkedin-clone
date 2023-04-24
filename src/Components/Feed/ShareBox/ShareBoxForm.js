// Custom Hooks
import usePosts from "../../../hooks/usePosts"
import {
    Create,
  } from "@mui/icons-material";
function ShareBoxForm() {
    const [sendPost, input, setInput] = usePosts()
  return (
    <div className="shareBox__form">
    <Create />
    <form>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendPost} type="submit">
        Submit
      </button>
    </form>
  </div>
  )
}

export default ShareBoxForm