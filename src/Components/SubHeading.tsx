export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-sage mb-4 w-10 border-b-3 text-xl font-bold whitespace-nowrap">
      {children}
    </h2>
  );
}
