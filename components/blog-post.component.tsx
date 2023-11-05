import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Comment } from "./comment.component";

interface IProps {
  title: string;
  children: React.ReactNode;
  comments: string[];
  onCommentCreated: (comment: string) => Promise<void>;
}

export const BlogPost: FC<IProps> = ({
  title,
  comments,
  onCommentCreated,
  children,
}) => {
  const [userComments, setUserComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    onCommentCreated(newComment);
    setUserComments([...userComments, newComment]);
    setNewComment("");
  };

  return (
    <Box component="section" sx={{ margin: "auto", padding: "5vh 15vw" }}>
      <Paper sx={{ padding: "5vmin", borderRadius: "2rem" }}>
        <Typography variant="h2" sx={{ marginBottom: "5vh" }}>
          {title}
        </Typography>
        <Box component="article" sx={{ margin: 4 }}>
          {children}
        </Box>

        <Divider sx={{ margin: "5vh 0" }} />

        <Typography variant="h3" sx={{ marginBottom: 4 }}>
          Comments
        </Typography>

        <Box
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 4,
          }}
        >
          {comments.map((comment, index) => (
            <Comment
              key={index}
              content={comment}
              createdByUser={userComments.some((c) => c === comment)}
            />
          ))}
        </Box>

        <TextField
          placeholder="Your comment"
          variant="filled"
          fullWidth
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleCommentSubmit();
            }
          }}
        />
        <Button
          onClick={handleCommentSubmit}
          sx={{ display: "block", marginLeft: "auto", marginTop: 2 }}
          variant="outlined"
        >
          Add Comment
        </Button>
      </Paper>
    </Box>
  );
};
