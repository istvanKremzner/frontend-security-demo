import { Paper } from "@mui/material";
import { FC, useEffect, useRef } from "react";

interface IProps {
  content: string;
  createdByUser?: boolean;
}

const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/;

declare global {
  interface Window {
    eval: (textToEvaluate: string) => void;
  }
}

export const Comment: FC<IProps> = ({ content, createdByUser }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (scriptRegex.test(content)) {
        const scriptMatches = content.match(scriptRegex);

        if (scriptMatches) {
          const [_, scriptContent] = scriptMatches;

          try {
            window.eval(scriptContent);
          } catch {
            console.warn("Error evaluating script!");
          }
        }
      }
    }
  }, [content]);

  return (
    <Paper
      elevation={2}
      sx={{
        marginBottom: 4,
        padding: 4,
        width: "fit-content",
        backgroundColor: (theme) =>
          createdByUser ? theme.palette.primary.dark : undefined,
        color: (theme) =>
          createdByUser ? theme.palette.text.secondary : undefined,
      }}
    >
      <div ref={contentRef} dangerouslySetInnerHTML={{ __html: content }} />
    </Paper>
  );
};
