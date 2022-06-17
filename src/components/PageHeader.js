import { People } from "@mui/icons-material";
import {  Card, Paper, Stack, Typography } from "@mui/material";

const PageHeader = () => {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        backgroundColor: "#f5f5f2",
        mt:2
      }}
      
    >
      <Stack direction="row" spacing={4} mb={2} alignContent="center" >
        <Card sx={{ padding: 2, color: "#3c44b1", margin: 2 }}>
          <People />
        </Card>

        <Stack pt={2} >
          <Typography component="div" variant="h6">
            Page Header
          </Typography>
          <Typography component="div" variant="body1">
            Page Description
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PageHeader;
