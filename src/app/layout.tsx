import "./globals.css";
import Providers from "@/lib/Providers";
import { ConfigProvider } from "antd";
import theme from "../../theme";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider theme={theme}>
      <Providers>
        <html lang="en">
          <body>
            <Navbar />
            {children}
          </body>
        </html>
      </Providers>
    </ConfigProvider>
  );
}
