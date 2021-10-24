import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
	Container,
	SidebarWrapper,
	SideIcon,
	SideText,
	Logo,
} from "./SidebarElements";

function Sidebar() {
	const [hover, setHover] = useState({
		home: false,
		chart: false,
		event: false,
		a4: false,
		a5: false,
	});

	const [active, setActive] = useState(true);

	return (
		<>
			<Container>
				<SidebarWrapper>
					<Logo>ET</Logo>

					<SideIcon
						onMouseOver={() => setHover({ ...hover, home: true })}
						onMouseOut={() => setHover({ ...hover, home: false })}
						hover={hover.home}
						active={active}>
						<HomeIcon />
						<SideText hover={hover.home}>Overview</SideText>
					</SideIcon>

					<SideIcon
						onMouseOver={() => setHover({ ...hover, chart: true })}
						onMouseOut={() => setHover({ ...hover, chart: false })}
						hover={hover.chart}>
						<BarChartIcon />
						<SideText hover={hover.chart}>Chart</SideText>
					</SideIcon>

					<SideIcon
						onMouseOver={() => setHover({ ...hover, event: true })}
						onMouseOut={() => setHover({ ...hover, event: false })}
						hover={hover.event}>
						<EventNoteIcon />
						<SideText hover={hover.event}>Event</SideText>
					</SideIcon>

					<SideIcon
						onMouseOver={() => setHover({ ...hover, a4: true })}
						onMouseOut={() => setHover({ ...hover, a4: false })}
						hover={hover.a4}>
						<EventNoteIcon />
						<SideText hover={hover.a4}>Event1</SideText>
					</SideIcon>

					<SideIcon
						onMouseOver={() => setHover({ ...hover, a5: true })}
						onMouseOut={() => setHover({ ...hover, a5: false })}
						hover={hover.a5}>
						<EventNoteIcon />
						<SideText hover={hover.a5}>Event2</SideText>
					</SideIcon>
				</SidebarWrapper>
				<SideIcon>
					<AccountCircleIcon fontSize="large" />
				</SideIcon>
			</Container>
		</>
	);
}

export default Sidebar;
