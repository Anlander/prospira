export const Space = ({ blok }: any) => {
  return (
    <div
      style={{
        paddingTop: `${blok.range.value}px`,
        paddingBottom: `${blok.range.value}px`,
      }}
    />
  );
};
