export function Footer() {
    return (
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <p>&copy; 2024 AlumniConnect. All rights reserved.</p>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    )
  }