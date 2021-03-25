import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import React from "react";

export const menu = [
  {
    icon: <HomeIcon />,
    title: "Home",
    items: []
  },
  {
    icon: <GroupAddIcon />,
    title: "Permission",
    items: [
      {
        icon: <AccountBoxIcon />,
        title: "User",
        to: "/permission/user"
      },
    ]
  },
  {
    icon: <SettingsIcon />,
    title: "Options"
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Blog"
  }
];
