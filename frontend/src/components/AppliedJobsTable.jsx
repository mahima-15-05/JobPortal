import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";

export default function AppliedJobsTable() {
  return (
    <div className="">
      <Table>
      {/* <TableCaption className="caption-top text-left">A list of your applied jobs</TableCaption> */}

        <TableCaption>A list of your applied jobs</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 4, 5].map((item, index) => (
            <TableRow key={index}>
              <TableCell>17-08-2024</TableCell>
              <TableCell>Frontend Developer</TableCell>
              <TableCell>TCS</TableCell>
              <TableCell>
                <Badge>Accepted</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
