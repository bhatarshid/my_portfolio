export const NavBarComponent = function() {
  return <nav className="bg-lightGray p-4 px-12">
    <div className="flex justify-between items-center font-sans">
      <div className="font-bold text-xl flex">
        <h1>Arshid Bhat</h1>
      </div>
      <div className="flex font-semibold text-lg space-x-4 md:space-x-8">
        <h2>Home</h2>
        <h2>About</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </div>
    </div>
  </nav>
}