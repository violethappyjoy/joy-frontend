import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Hello, create your account</CardTitle>
          <CardDescription>
            SignUp with your Github account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.43c.6.111.82-.26.82-.577v-2.234c-3.338.73-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.495.997.108-.775.42-1.304.763-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.312.468-2.383 1.235-3.222-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0112 5.803c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.874.119 3.176.77.839 1.233 1.91 1.233 3.222 0 4.61-2.807 5.628-5.48 5.922.431.37.815 1.096.815 2.21v3.293c0 .32.217.694.825.576A12.005 12.005 0 0024 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  SignUp with Github
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="Username">Username</Label>
                  </div>
                  <Input id="Username" type="text" required />
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Confirm Password</Label>
                  </div>
                  <Input id="cpass" type="password" required />
                </div>

                <Button type="submit" className="w-full">
                  SignUp
                </Button>
              </div>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/logon" className="underline underline-offset-4">
                  Login 
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      {/* <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div> */}
    </div>
  )
}
