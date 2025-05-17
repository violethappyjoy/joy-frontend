import { NotebookTabsIcon } from "lucide-react"

import { ForgotPassForm } from "@/components/forms/fgot-form"

export default function SignUpPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <NotebookTabsIcon className="size-4" />
          </div>
          <span className="text-primary">Happy-Joy</span>
        </div>
        <ForgotPassForm />
      </div>
    </div>
  )
}
