import React from "react"
import Logo from "../../../public/logomark.png"
import { Link } from "gatsby"
export default function Nav() {
  return (
    <div className="navbar bg-base-100 py-4">
      <div className="navbar-start">
        <img src={Logo} className="h-20" />
        <a className="btn btn-ghost text-3xl normal-case text-secondary">
          Deep Purple
        </a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <Link to="https://dev1410.dbyl8h7nhmtvn.amplifyapp.com/">
          <button className="btn btn-outline btn-secondary px-12">Login</button>
        </Link>
      </div>
    </div>
  )
}
