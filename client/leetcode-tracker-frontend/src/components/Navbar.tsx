const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">LeetCode Tracker</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-14 rounded-full">
              <img src={"https://i.pravatar.cc/300"} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-36">
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
