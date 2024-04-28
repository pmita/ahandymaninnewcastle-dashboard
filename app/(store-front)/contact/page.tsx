// COMPONENTS
import { ContactForm } from "./_components/contact-form";


export default async function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-stretch w-[375px] sm:w-[450px] p-4 bg-secondary">
      <ContactForm />
    </div>
  )
}