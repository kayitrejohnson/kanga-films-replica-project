
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Users, Film, BarChart3, Settings } from "lucide-react";
import Navigation from "../components/Navigation";
import { movies } from "../data/movies";

const AdminDashboard = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

  const stats = {
    totalMovies: movies.length,
    totalUsers: 1250,
    totalViews: 45670,
    activeStreams: 23
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Manage your KANGA Films platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Movies</p>
                <p className="text-2xl font-bold text-white">{stats.totalMovies}</p>
              </div>
              <Film className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-white">{stats.totalUsers}</p>
              </div>
              <Users className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Views</p>
                <p className="text-2xl font-bold text-white">{stats.totalViews.toLocaleString()}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Streams</p>
                <p className="text-2xl font-bold text-white">{stats.activeStreams}</p>
              </div>
              <Settings className="w-8 h-8 text-red-500" />
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="movies" className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="movies" className="text-white">Movies</TabsTrigger>
            <TabsTrigger value="users" className="text-white">Users</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
            <TabsTrigger value="settings" className="text-white">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="movies" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-white">Movie Management</h2>
              <Dialog open={isAddMovieOpen} onOpenChange={setIsAddMovieOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Movie
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white">Add New Movie</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                      <input className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
                      <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                        <option>Action</option>
                        <option>Sci-Fi</option>
                        <option>Drama</option>
                        <option>Thriller</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Year</label>
                      <input type="number" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                      <input type="number" step="0.1" min="0" max="10" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Add Movie</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="bg-gray-800 rounded-lg border border-gray-700">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700">
                    <TableHead className="text-gray-300">Title</TableHead>
                    <TableHead className="text-gray-300">Genre</TableHead>
                    <TableHead className="text-gray-300">Year</TableHead>
                    <TableHead className="text-gray-300">Rating</TableHead>
                    <TableHead className="text-gray-300">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {movies.slice(0, 10).map((movie) => (
                    <TableRow key={movie.id} className="border-gray-700">
                      <TableCell className="text-white">{movie.title}</TableCell>
                      <TableCell className="text-gray-300">{movie.genre}</TableCell>
                      <TableCell className="text-gray-300">{movie.year}</TableCell>
                      <TableCell className="text-gray-300">{movie.rating}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="text-blue-400 border-blue-400">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-400 border-red-400">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <h2 className="text-xl font-semibold text-white">User Management</h2>
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <p className="text-gray-300">User management features coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Analytics</h2>
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <p className="text-gray-300">Analytics dashboard coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Platform Settings</h2>
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Site Configuration</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Site Name</label>
                    <input defaultValue="KANGA Films" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Contact Email</label>
                    <input defaultValue="kjohnsonkayitare@gmail.com" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">Save Changes</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
