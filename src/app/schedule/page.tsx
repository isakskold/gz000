import React from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"; // Adjust the import path if needed
import PageHeader from "@/components/PageHeader";

import { scheduleData } from "@/data/schedule";

const page: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 mx-auto">
      <PageHeader text="Weekly Schedule" />

      <div className=" p-8 rounded-lg ">
        {/* Table to display the schedule */}
        <Table>
          <TableHeader className="">
            <TableRow>
              <TableHead className="text-white text-4xl">Day</TableHead>
              <TableHead className="text-white text-4xl">Time</TableHead>
              <TableHead className="text-white text-4xl">Event</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* Loop through the scheduleData and render each item in the table */}
            {scheduleData.map((item, index: number) => {
              return (
                <React.Fragment key={item.day}>
                  {item.events.length > 0 ? (
                    item.events.map((event, eventIndex) => (
                      <TableRow
                        key={`${index}-${eventIndex}`}
                        className="border-none"
                      >
                        {/* Display the day for each event */}
                        <TableCell
                          style={{
                            fontSize: eventIndex === 0 ? "1.125rem" : "1rem", // Larger font size for the day
                            fontWeight: eventIndex === 0 ? "600" : "400", // Semi-bold for the day
                          }}
                        >
                          {eventIndex === 0 ? item.day : ""}
                        </TableCell>
                        <TableCell>{event.time}</TableCell>
                        <TableCell>{event.event}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow
                      key={`${index}-no-events`}
                      className=" border-none"
                    >
                      {/* No events for this day, display day with larger font size and bold */}
                      <TableCell
                        colSpan={3}
                        style={{
                          fontSize: "1.125rem", // Larger font size for the day
                          fontWeight: "600", // Semi-bold for the day
                          border: "none",
                        }}
                      >
                        {item.day}:{" "}
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
