export interface ScheduleItem {
  day: string;
  events: { time: string; event: string }[]; // Nested events for each day
}
