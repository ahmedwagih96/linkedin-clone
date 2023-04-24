// Material UI
import {
    Image,
    CalendarViewDay,
    EventNote,
    Subscriptions,
  } from "@mui/icons-material";
// Components
import ShareOption from "../ShareOption";
function ShareInputOptions() {
  return (
    <div className="feed__inputOptions">
    <ShareOption Icon={Image} title="Photo" color="#70B5F9" />
    <ShareOption Icon={Subscriptions} title="Video" color="#E7A33E" />
    <ShareOption Icon={EventNote} title="Event" color="#C0CBCD" />
    <ShareOption
      Icon={CalendarViewDay}
      title="Write article"
      color="#7FC15E"
    />
  </div>
  )
}

export default ShareInputOptions