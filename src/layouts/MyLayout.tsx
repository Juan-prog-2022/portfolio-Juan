import type { ReactNode } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

interface Props {
  children: ReactNode
}

export default function MyLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header />
      <main className="flex-1 px-6 py-10 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}