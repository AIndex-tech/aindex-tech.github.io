import './ui/global.css';

export default function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body className={"font-sans min-h-screen"}>
        {children}
      </body>
    </html>
  );
}
