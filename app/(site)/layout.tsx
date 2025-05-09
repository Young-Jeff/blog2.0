import { BackToTop } from '@/components/back-to-top';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export const revalidate = 60;
export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />

      <BackToTop />
    </>
  );
}
