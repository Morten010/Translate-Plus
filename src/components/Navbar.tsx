import ThemeButton from "./ui/ThemeButton";

export default function Navbar() {

  return (
    <nav
    className='p-2 flex justify-between font-bold'
    >
        <p
        className="text-xl"
        >
          Translate+
        </p>
        <ThemeButton />
    </nav>
  )
}
