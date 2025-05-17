"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        {/* Logo on the left */}
        <div className="flex items-center mr-8">
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">Illumi</span>
            <span className="text-2xl font-bold text-muted-foreground transition-colors duration-200 group-hover:text-foreground">news</span>
          </Link>
        </div>

        {/* Centered navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav className="flex items-center justify-center w-full space-x-10 text-sm font-medium">
            <Link
              href="/"
              className="relative py-2 transition-colors hover:text-primary text-foreground group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/featured"
              className="relative py-2 transition-colors hover:text-primary text-muted-foreground group"
            >
              Featured
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-auto p-0 group">
                  <span className="relative py-2 transition-colors hover:text-primary text-muted-foreground flex items-center">
                    Categories
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 grid grid-cols-2 gap-1 p-2 animate-in fade-in zoom-in-95 duration-200">
                <DropdownMenuItem asChild>
                  <Link href="/category/science" className="hover:text-primary transition-colors">Science</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/technology" className="hover:text-primary transition-colors">Technology</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/environment" className="hover:text-primary transition-colors">Environment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/politics" className="hover:text-primary transition-colors">Politics</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/economy" className="hover:text-primary transition-colors">Economy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/education" className="hover:text-primary transition-colors">Education</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/category/health" className="hover:text-primary transition-colors">Health</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/categories" className="hover:text-primary transition-colors">More...</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/author"
              className="relative py-2 transition-colors hover:text-primary text-muted-foreground group"
            >
              Author
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/contact"
              className="relative py-2 transition-colors hover:text-primary text-muted-foreground group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </nav>
        </div>

        {/* Right side controls */}
        <div className="flex items-center ml-auto space-x-4">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="sr-only">Search</span>
            </Button>
            {isSearchOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-background rounded-md shadow-lg p-2 ring-1 ring-border">
                <div className="flex items-center border-b-2 border-muted py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted-foreground mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    className="w-full bg-transparent focus:outline-none text-foreground text-sm"
                    type="text"
                    placeholder="Search articles..."
                  />
                </div>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme("dark")}
            className="text-muted-foreground hover:text-foreground dark:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span className="sr-only">Dark mode</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme("light")}
            className="text-muted-foreground hover:text-foreground hidden dark:inline-flex"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="sr-only">Light mode</span>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-muted-foreground hover:text-foreground"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center mb-8 mt-4">
                  <Link href="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-primary">Illumi</span>
                    <span className="text-2xl font-bold text-muted-foreground transition-colors duration-200 group-hover:text-foreground">news</span>
                  </Link>
                </div>

                <nav className="flex flex-col gap-5">
                  <Link
                    href="/"
                    className="flex items-center px-3 py-2 text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 hover:bg-muted/50 rounded-md animate-in slide-in-from-right-5 duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Home
                  </Link>
                  <Link
                    href="/featured"
                    className="flex items-center px-3 py-2 text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200 hover:bg-muted/50 rounded-md animate-in slide-in-from-right-5 duration-300 delay-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Featured
                  </Link>

                  <div className="px-3 py-2 animate-in slide-in-from-right-5 duration-300 delay-200">
                    <h3 className="text-lg font-medium text-muted-foreground mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Categories
                    </h3>
                    <div className="grid grid-cols-2 gap-3 pl-8">
                      <Link
                        href="/category/science"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Science
                      </Link>
                      <Link
                        href="/category/technology"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Technology
                      </Link>
                      <Link
                        href="/category/environment"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Environment
                      </Link>
                      <Link
                        href="/category/politics"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Politics
                      </Link>
                      <Link
                        href="/categories"
                        className="text-primary hover:underline col-span-2 flex items-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        View all categories
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/author"
                    className="flex items-center px-3 py-2 text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200 hover:bg-muted/50 rounded-md animate-in slide-in-from-right-5 duration-300 delay-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Author
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center px-3 py-2 text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-200 hover:bg-muted/50 rounded-md animate-in slide-in-from-right-5 duration-300 delay-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </Link>
                </nav>

                <div className="mt-auto mb-6 flex justify-center space-x-4 pt-6 border-t">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setTheme("light");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="sr-only">Light mode</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setTheme("dark");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <span className="sr-only">Dark mode</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
