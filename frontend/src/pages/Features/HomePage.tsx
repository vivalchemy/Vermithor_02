import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { Header } from '@/base components/Header'

export function HomePage() {
  return (
    <>
    <Header />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to AlumniConnect</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Donate</CardTitle>
            <CardDescription>Support college projects and initiatives</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/donate"><Button className="w-full">Contribute Now</Button></Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Connect</CardTitle>
            <CardDescription>Network with students and fellow alumni</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/connect"><Button className="w-full">Start Networking</Button></Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Directory</CardTitle>
            <CardDescription>Find and connect with other alumni</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/directory"><Button className="w-full">Search Directory</Button></Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Events</CardTitle>
            <CardDescription>Participate in alumni events and reunions</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/events"><Button className="w-full">View Events</Button></Link>
          </CardContent>
        </Card>
      </div>
      </div>
    </>
  )
}