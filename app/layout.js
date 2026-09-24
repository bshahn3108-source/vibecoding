import './globals.css'

export const metadata = {
  title: 'vibecoding',
  description: 'Next.js + Tailwind CSS starter template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

