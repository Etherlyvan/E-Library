import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth , signOut} from '@/auth'
const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image
            src="/next.svg"
            alt="Logo"
            width={128}
            height={36}
            className="mr-3"
          />
        </Link>
        <div className="flex items-center gap-3">
          <ul className="hidden md:flex md:items-center md:gap-4 mr-5 font-semibold text-gray-600 hover:text-gray-900">
            <li>
              <Link href="/">Home</Link>
            </li>
            {session && (
              <>
                <li>
                  <Link href="/product">Product</Link>
                </li>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                {session.user.role === "admin" ? (
                  <li>
                    <Link href="/user">Users</Link>
                  </li>
                ): null}
                
              </>
            )}
          </ul>
          {session && (
            <div className="flex items-center gap-3">
              <div className="flex flex-col justify-center -space-y-1">
                <span className="font-semibold text-gray-600 text-right capitalize">
                  {session.user.name}
                </span>
                <span className="text-xs text-gray-400 text-right capitalize">
                  {session.user.role}
                </span>
              </div>
              <button type="button">
                <Image
                  src={session.user.image || "/globe.svg"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="w-8 h-8 rounded-full"
                />
              </button>
            </div>
          )}
          {session ? (
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
              >
                Sign Out
              </button>
            </form>
          ) : (
            <Link
              href="/login"
              className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;