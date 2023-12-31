
import { Nunito_Sans } from 'next/font/google'

const nunito_Sans = Nunito_Sans({ subsets: ['latin'], weight: ['300', '600', '800'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito_Sans.className}>{children}</body>
    </html>
  )
}


