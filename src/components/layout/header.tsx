'use client'

import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import CompanyLogo from "@/components/company-logo"


export default function Header() {
  return (
    <header>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-x-12">
          <Link href="/">
            <CompanyLogo />
          </Link>
        </div>
        <div className="flex">

          <Link href="mailto:hello@coderave.dev">
            <Button className="leading-6 font-semibold">
              <Mail /> Kontakt aufnehmen
            </Button>
          </Link>

        </div>
      </nav>
    </header>
  )
}
