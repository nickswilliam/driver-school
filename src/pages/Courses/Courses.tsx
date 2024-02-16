const Courses = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="flex flex-col w-full">
        {children}
    </main>
  )
}

export default Courses