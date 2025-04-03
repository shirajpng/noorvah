
import './globals.css'
import TwSizeIndicator from 'helpers/TwSizeIndicator'
import Header from 'partials/header'
import Footer from 'partials/footer'

export const metadata = {
  title: 'Noorvah',
  description: 'Essence of Light',
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        </head>
        <body suppressHydrationWarning={true}>
          <TwSizeIndicator />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    )
  }