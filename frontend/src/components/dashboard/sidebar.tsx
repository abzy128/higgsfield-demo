'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  FolderKanban,
  Gamepad,
  Settings
} from 'lucide-react'

const navItems = [
  {
    title: 'Overview',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'Games',
    href: '/games',
    icon: Gamepad,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: FolderKanban,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex w-64 flex-col border-r bg-background">
      <div className="flex h-16 items-center border-b px-6">
        <span className="text-sm font-medium text-muted-foreground">
          Navigation
        </span>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

