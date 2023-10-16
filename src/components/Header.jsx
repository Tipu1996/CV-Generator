import { Typography, AppBar, Toolbar, IconButton, Grid } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Header = ({ theme, changeTheme }) => {
	return (
		<AppBar position="relative">
			<Toolbar>
				<Grid
					container
					justifyContent={"space-between"}
					alignItems="center"
				>
					<Grid item>
						<FingerprintIcon />
					</Grid>
					<Grid item>
						<Typography variant="h6" ml={2}>
							Portfolio
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							aria-label="delete"
							onClick={() => changeTheme()}
						>
							{theme === "light" ? (
								<Brightness4Icon />
							) : (
								<Brightness7Icon />
							)}
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
export default Header;
