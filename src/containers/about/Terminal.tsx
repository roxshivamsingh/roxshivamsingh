import { ReactNode } from "react";
import Style from "./Terminal.module.scss";
import { Box } from "@mui/material";

const iconClass = "fa fa-circle";

interface IProps { children: ReactNode }

export default function Terminal({ children }: IProps) {

  return (
    <Box
      component={"section"}
      className={[Style.terminal, Style.shadowed].join(' ')}
      borderRadius={"0.5rem"}
      mb={"4rem"}
    >
      <Box
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.5rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1rem"}
      >
        <i className={[iconClass, Style.red].join(' ')} />
        <i className={[iconClass, Style.amber].join(' ')} />
        <i className={[iconClass, Style.green].join(' ')} />
      </Box>
      <Box
        py={{ xs: "1rem", md: "2rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        borderRadius={"0 0 0.5rem 0.5rem"}
        sx={{ backgroundColor: "#27242f" }}
        fontSize={"1.5rem"}
        fontFamily={"Courier New, Courier, monospace"}
      >
        {children}
      </Box>
    </Box>
  );
}

