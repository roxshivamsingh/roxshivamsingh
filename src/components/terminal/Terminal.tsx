import { ReactNode } from "react";
import { Box, SxProps } from "@mui/material";
// =======================================================================
import classes from "./Terminal.module.scss";


interface IProps { children: ReactNode }

export default function Terminal({ children }: IProps) {
  return (
    <Box
      component={"section"}
      className={[classes.terminal, classes.shadowed].join(' ')}
      sx={SX.Container}
    >
      <Box sx={SX.Header}>
        <i className={[iconClass, classes.red].join(' ')} />
        <i className={[iconClass, classes.amber].join(' ')} />
        <i className={[iconClass, classes.green].join(' ')} />
      </Box>
      <Box sx={SX.Main}>{children}</Box>
    </Box>
  );
}

const SX: { [key: string]: SxProps } = {
  Container: {
    mb: "4rem",
    borderRadius: "0.5rem"
  },
  Header: {
    backgroundColor: "#c0c0c0",
    p: "0.5rem",
    borderRadius: "0.5rem 0.5rem 0 0",
    fontSize: "1rem"
  },
  Main: {
    py: { xs: "1rem", md: "2rem" },
    px: { xs: "2rem", md: "3rem" },
    borderRadius: "0 0 0.5rem 0.5rem",
    fontSize: "1.5rem",
    fontFamily: "Courier New, Courier, monospace",
  }
}
const iconClass = "fa fa-circle";
