// COMPONENTS
import { SignInForm } from "./_components/sign-in";


export default function SignInPage() {
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <h1>Sign In</h1>
      <SignInForm />
    </section>
  )
}