import {
  ChatBubbleOutline,
  NotificationsNone,
  PowerSettingsNew,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  styled,
  Toolbar,
} from "@mui/material";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#fff",
  // border:'2px solid red',
  transform: "translateZ(0)",
  position: "static",
  // paddingLeft:'320px',
  width: "100%",
  "& .MuiInputBase-root": {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
  },
  "& .MuiSvgIcon-root": {
    marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase
              placeholder="SearchIcon"
              startAdornment={<Search fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutline />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
