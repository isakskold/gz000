interface ScheduleItem {
  day: string;
  events: { time: string; event: string }[]; // Nested events for each day
}

export const scheduleData: ScheduleItem[] = [
  {
    day: "Monday",
    events: [
      { time: "12:00 PM", event: "Stream Start" },
      { time: "2:00 PM", event: "Q&A" },
    ],
  },
  {
    day: "Tuesday",
    events: [{ time: "12:00 PM", event: "Stream Start" }],
  },
  {
    day: "Wednesday",
    events: [{ time: "4:00 PM", event: "Casual Play" }],
  },
  {
    day: "Thursday",
    events: [], // No events on Thursday
  },
  {
    day: "Friday",
    events: [{ time: "7:00 PM", event: "Special Stream" }],
  },
  {
    day: "Saturday",
    events: [], // No events on Saturday
  },
  {
    day: "Sunday",
    events: [], // No events on Sunday
  },
];
