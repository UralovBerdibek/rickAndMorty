export default function CharacterLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section className="container mx-auto">
      Character - here
      {children}
    </section>
  );
}