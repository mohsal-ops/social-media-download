import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Download } from 'lucide-react';

interface item {
  quality: string;
  link: string;
}
type qualitiesProp = {
    qualities: item[]
}

export default function QualitiesTable({ qualities }: qualitiesProp) {
    console.log(qualities)
  return (
    <>
      <div className="border-black w-[230px] sm:w-auto  border">
        <Table>
          <TableHeader className="bg-black text-white">
            <TableRow className="hover:bg-black">
              <TableHead className="w-[80%] text-white">Quality</TableHead>
              <TableHead className="text-white">Download</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {qualities?.map((item, key) => (
              <TableRow className="bg-white " key={key}>
                <TableCell className="font-medium">
                  {item.quality.length > 7
                    ? item.quality.slice(9)
                    : item.quality}
                </TableCell>
                <TableCell>
                  <button className="flex  hover:bg-neutral-800 px-2 justify-center text-white bg-black">
                    <a
                      href={item.link}
                      className="flex gap-2 text-xs font-medium items-center w-full h-full"
                    >
                      <Download className="w-3" />
                      Download
                    </a>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
