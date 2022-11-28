import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  Gear,
  GearSix,
  Phone,
  SignOut,
  User,
  Users,
  Calendar,
} from "phosphor-react";

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Profile",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 1,
    icon: <Users />,
  },
];

const Nav_Setting = [
  {
    index: 2,
    icon: <Calendar />,
  },
];
export {
  Profile_Menu,
  Nav_Setting,
  Nav_Buttons,
};
