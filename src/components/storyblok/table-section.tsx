import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TableSection = ({ blok }: any) => {
  return (
    <div className="container-section">
      <Table>
        <TableHeader>
          <TableRow className="table-head w-[100%]">
            {blok.header.map((item: any) => (
              <TableHead key={item._uid}>{item.title}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {blok.body.map((item: any) => (
            <TableRow key={item._uid}>
              {item.field.map((item: any) => (
                <TableCell key={item._uid}>{item.title}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
