import { Footer, Header } from "@/components";

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <div>
      <Header />
      <section className="min-h-[500px]">{children}</section>
      <Footer />
    </div>
  );
}
