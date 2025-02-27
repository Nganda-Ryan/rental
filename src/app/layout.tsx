import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import Loader from "@/components/common/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="">
        <div className="dark:bg-boxdark-2 dark:text-bodydark min-h-screen bg-blue-sky">
          {children}
        </div>
      </body>
    </html>
  );
}
