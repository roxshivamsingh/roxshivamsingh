import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../types/info";

export default function Portfolio() {
    return (<Box>
        <Grid container display={'flex'} justifyContent={'center'}>
            {info.portfolio.map((item, i) => (<Grid item xs={12} md={6} key={i}>
                <PortfolioBlock item={item} />
            </Grid>))}
        </Grid>
    </Box>);
}