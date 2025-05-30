const Headers = ({ changeUser }) => {

  const LogoutUser = () => {
    localStorage.setItem('loggedInUser', "")
    changeUser("")
    // window.location.reload()
  }

  return (
    <div className="flex item-center justify-between ">
      <div className="text-2xl font-medium">Hello <span className="text-3xl font-semibold">Admin</span></div>
      <button
        onClick={LogoutUser}
        className="bg-red-600 text-white px-5 py-2 rounded text-lg font-semibold">Log out</button>
    </div>
  )
}

export default Headers