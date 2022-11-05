import React from "react"
import Logo from "../../images/logomark.png"
import { Link } from "gatsby"
export default function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <img src={Logo} />
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl text-secondary ">
          {" "}
          Deep Purple
        </a>
      </div>
      <div className="flex-none">
        <Link to="https://dev1410.dbyl8h7nhmtvn.amplifyapp.com/">
          <button className="btn btn-outline btn-secondary px-12">Login</button>
        </Link>
      </div>
    </div>
  )
}
