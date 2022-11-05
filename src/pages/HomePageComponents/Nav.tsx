import React from "react"
import Logo from "../../images/logomark.png"
import { Link } from "gatsby"
export default function Nav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src={Logo} className="h-20 w-20" />
        <a className="btn btn-ghost normal-case text-3xl  text-secondary">
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
