// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                               CONTACT DATA                                   ║
// ╚══════════════════════════════════════════════════════════════════════════════╝
//
// ┌──────────────────────────────────────────────────────────────────────────────┐
// │                          HOW TO EDIT CONTACT DATA                            │
// └──────────────────────────────────────────────────────────────────────────────┘
//
// Update the values in the contactData object:
// {
//   discord: "Username#1234",
//   youtube: "https://www.youtube.com/channel/yourChannel",
//   email: "your-email@example.com",
//   twitch: "https://www.twitch.tv/yourChannel",
//   steam: "https://steamcommunity.com/id/yourID",
// }
//
// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                             IMPORTANT NOTES                                  ║
// ╚══════════════════════════════════════════════════════════════════════════════╝
// • All fields must be strings
// • For URLs, include the full https:// prefix
// • For Discord, use the format Username#1234
// ───────────────────────────────────────────────────────────────────────────────

import { ContactDataType } from "@/types/contact";

export const contactData: ContactDataType = {
  discord: "GroundZero000#1234",
  youtube: "https://www.youtube.com/channel/yourChannel",
  email: "your-email@example.com",
  twitch: "https://www.twitch.tv/GroundZero000",
  steam: "https://steamcommunity.com/id/GroundZero000",
};
