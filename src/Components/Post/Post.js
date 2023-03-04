import "./Post.css";
import { forwardRef } from "react";
// Materials UI
import {
  ThumbUpAltOutlined,
  ChatOutlined,
  ShareOutlined,
  SendOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
// Components
import InputOption from "../InputOption/InputOption";

const Posts = forwardRef(
  ({ data: { name, description, message, photoUrl } }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post__header">
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className="post__info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__button">
          <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
          <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlined} title="Share" color="gray" />
          <InputOption Icon={SendOutlined} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Posts;
