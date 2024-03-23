import { Box } from "@mui/material";

interface IProps { emoji: string, text: string }

export default function EmojiBullet(props: IProps) {

  const { emoji, text } = props;

  return (
    <Box component="li"
      sx={{
        fontSize: "1rem",
        cursor: "pointer",
        lineHeight: 1.5
      }}
    >
      <Box
        component="span"
        aria-label="cheese"
        role="img"
        sx={{
          fontSize: "1.5rem",
          mr: { xs: "0.5rem", md: "1rem" }
        }}
      >
        {emoji}
      </Box>{" "}
      {text}
    </Box>
  );
}

