import Link from "next/link"

const Header = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/todolist">TodoList</Link>
      <Link href="/contact">Contact</Link>
    </>
  )
}

export default Header