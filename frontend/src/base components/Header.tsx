import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function Header() {
  const { logout, isAuthenticated, loginWithRedirect, user } = useAuth0();
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-primary text-primary-foreground">
        <div className="container px-4 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              AlumniConnect
            </Link>
            <nav>
              <ul className="flex space-x-20 items-center">
                <li>
                  <Link
                    to="/donate"
                    className="hover:text-[#d3d3d3] text-white"
                  >
                    Donate
                  </Link>
                </li>
                <li>
                  <Link
                    to="/connect"
                    className="hover:text-[#d3d3d3] text-white"
                  >
                    Connect
                  </Link>
                </li>
                <li>
                  <Link
                    to="/directory"
                    className="hover:text-[#d3d3d3] text-white"
                  >
                    Directory
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    className="hover:text-[#d3d3d3] text-white"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <div className="flex gap-4">
                    <ModeToggle />
                    {isAuthenticated && (
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                          src={user?.picture}
                          alt={user?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {isAuthenticated ? (
                      <Button
                        variant="secondary"
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        Log Out
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        onClick={() => loginWithRedirect()}
                      >
                        Login
                      </Button>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
