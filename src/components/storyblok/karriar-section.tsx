"use client";

import { storyblokEditable } from "@storyblok/react"
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export const KarriarSection = ({ blok }: any) => {
  return (
    <div {...storyblokEditable} className="my-14">
      <h2 className="text-3xl font-bold text-center mb-8">Lediga jobb</h2>
      <div className="container-section my-14 mx-auto">
        <p className="text-[10px] py-4">
          {"just nu finns det " + blok.fields.length + " lediga jobb"}
        </p>
        {blok.fields.length > 0 ?
          <Table>
            <TableHeader>
              <TableRow className="table-head w-[100%]">
                <TableHead>Yrkesområde</TableHead>
                <TableHead>Område</TableHead>
                <TableHead>Sista ansökningsdag</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blok.fields.map((item: any) => (
                <TableRow key={item._uid}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.omrade}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>
                    <Link href={`${item.link.cached_url || "/"}`} className="text-sm underline" target="_blank">Ansök</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          : <div>Inga publicerade jobb här, du kan se
            <Link className="font-bold underline ml-2" href="https://prospiro.recman.page/jobs?sort=newest" target="_blank">alla senaste jobb här</Link>
          </div>
        }
      </div>
    </div>
  )
}
