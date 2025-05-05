import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TableColumnSection = ({ blok }: any) => {
  return (
    <div className={`grid gap-14 container-section grid-cols-2 `}>
      {blok.field.map((item: any) => (
        <Table key={item._uid}>
          <TableHeader>
            <TableRow className="table-head">
              {item.header.map((item: any, index: number) => {
                return (
                  <TableHead key={index} className="font-bold">
                    {item.title}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {item.body.map((item: any) => (
              <TableRow key={item._uid}>
                {item.field.map((fieldItem: any, index: number) => {
                  return <TableCell key={index}>{fieldItem.title}</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ))}
    </div>
  );
};
