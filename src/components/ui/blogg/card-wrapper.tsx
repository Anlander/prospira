interface Props {
  children: React.ReactNode;
  number?: number;
}

export const CardWrapper = ({ children, number }: Props) => {
  return (
    <div key={number} className="grid gap-5 grid-cols-4">
      {children}
    </div>
  );
};
