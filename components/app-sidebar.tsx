"use client"

import * as React from "react"
import {
  FolderKanban,
  NotebookTabsIcon,
  LifeBuoy,
  Wallet,
  Send,
  Cog,
} from "lucide-react"
import Link from 'next/link'

import { NavMain } from "@/components/nav/nav-main"
// import { NavProjects } from "@/components/nav/nav-projects"
import { NavSecondary } from "@/components/nav/nav-secondary"
import { NavUser } from "@/components/nav/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "HappyJoy",
    email: "temp@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Budget",
      url: "/Budget",
      icon: Wallet,
      // isActive: false,
      items: [
        {
          title: "Summary",
          url: "/Budget",
        },
        {
          title: "Add Expenses",
          url: "/Budget/addExpense",
        },
        {
          title: "Recurring Settings",
          url: "/Budget/recurSet",
        },
      ],
    },
    {
      title: "Productivity",
      url: "#",
      icon: FolderKanban,
      items: [
        {
          title: "Summary",
          url: "#",
        },
        {
          title: "Pomodoro",
          url: "#",
        },
        {
          title: "To-Do(Kanban)",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Cog,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              {/* <a href="/Dashboard"> */}
              <Link href="/Dashboard/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <NotebookTabsIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Happy Joy</span>
                  <span className="truncate text-xs">A Fun App.</span>
                </div>
              {/* </a> */}
              </Link> 
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
