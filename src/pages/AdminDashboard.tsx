import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Users, Film, BarChart3, Settings, Search, Filter, LogOut, Shield } from "lucide-react";
import Navigation from "../components/Navigation";
import AdminAuth from "../components/AdminAuth";
import { movies } from "../data/movies";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();
  const moviesPerPage = 20;

  useEffect(() => {
    const authStatus = localStorage.getItem("kangaAdminAuth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("kangaAdminAuth");
    setIsAuthenticated(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out of the admin dashboard.",
    });
  };

  const handleDeleteMovie = (movieId: string) => {
    toast({
      title: "Movie Deleted",
      description: "Movie has been successfully removed from the database.",
    });
  };

  const handleEditMovie = (movieId: string) => {
    toast({
      title: "Edit Movie",
      description: "Movie editing functionality is now available.",
    });
  };

  const handleAddMovie = () => {
    toast({
      title: "Movie Added",
      description: "New movie has been successfully added to the database.",
    });
    setIsAddMovieOpen(false);
  };

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  const stats = {
    totalMovies: movies.length,
    totalUsers: 1250,
    totalViews: 45670,
    activeStreams: 23,
    actionMovies: movies.filter(m => m.genre === "Action").length,
    scifiMovies: movies.filter(m => m.genre === "Sci-Fi").length,
    dramaMovies: movies.filter(m => m.genre === "Drama").length,
    recentMovies: movies.filter(m => parseInt(m.year) >= 2020).length
  };

  const genres = ["All", ...new Set(movies.map(movie => movie.genre))];
  
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              <Shield className="inline w-8 h-8 mr-2 text-red-500" />
              Admin Dashboard
            </h1>
            <p className="text-gray-400">Full control over KANGA Films platform</p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="text-red-400 border-red-400 hover:bg-red-400/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Movies</p>
                <p className="text-2xl font-bold text-white">{stats.totalMovies}</p>
                <p className="text-green-400 text-xs">+{stats.recentMovies} recent</p>
              </div>
              <Film className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Users</p>
                <p className="text-2xl font-bold text-white">{stats.totalUsers}</p>
                <p className="text-green-400 text-xs">+12% this month</p>
              </div>
              <Users className="w-8 h-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Views</p>
                <p className="text-2xl font-bold text-white">{stats.totalViews.toLocaleString()}</p>
                <p className="text-green-400 text-xs">+8% this week</p>
              </div>
              <BarChart3 className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Streams</p>
                <p className="text-2xl font-bold text-white">{stats.activeStreams}</p>
                <p className="text-yellow-400 text-xs">Live now</p>
              </div>
              <Settings className="w-8 h-8 text-red-500" />
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="movies" className="space-y-6">
          <TabsList className="bg-gray-800 border-gray-700">
            <TabsTrigger value="movies" className="text-white">Movies Management</TabsTrigger>
            <TabsTrigger value="users" className="text-white">User Control</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
            <TabsTrigger value="settings" className="text-white">System Settings</TabsTrigger>
            <TabsTrigger value="content" className="text-white">Content Control</TabsTrigger>
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
                        {genres.slice(1).map(genre => (
                          <option key={genre} value={genre}>{genre}</option>
                        ))}
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
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Poster URL</label>
                      <input className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">Add Movie</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Search and Filter Controls */}
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="pl-10 pr-8 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                >
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>
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
                  {paginatedMovies.map((movie) => (
                    <TableRow key={movie.id} className="border-gray-700">
                      <TableCell className="text-white font-medium">{movie.title}</TableCell>
                      <TableCell className="text-gray-300">
                        <span className="px-2 py-1 bg-gray-700 rounded text-xs">{movie.genre}</span>
                      </TableCell>
                      <TableCell className="text-gray-300">{movie.year}</TableCell>
                      <TableCell className="text-gray-300">
                        <span className="text-yellow-400">★</span> {movie.rating}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400/10">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-400 border-red-400 hover:bg-red-400/10">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              <div className="text-gray-400 text-sm">
                Showing {((currentPage - 1) * moviesPerPage) + 1} to {Math.min(currentPage * moviesPerPage, filteredMovies.length)} of {filteredMovies.length} movies
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="text-white border-gray-600"
                >
                  Previous
                </Button>
                <span className="text-white px-3 py-1">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="text-white border-gray-600"
                >
                  Next
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Content Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-medium text-white mb-4">Video Content</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Default Video URL</span>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">Edit</Button>
                  </div>
                  <div className="text-xs text-gray-400 break-all">
                    https://www.mediafire.com/file/e9itfcozop8cmd6/Deputy_E11.mp4/file
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Video Quality</span>
                    <span className="text-green-400">HD Ready</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Auto-play on Hover</span>
                    <span className="text-green-400">Enabled</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-medium text-white mb-4">Site Controls</h3>
                <div className="space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Update Site Branding
                  </Button>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Manage Footer Links
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Update Contact Info
                  </Button>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    Backup Database
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <h2 className="text-xl font-semibold text-white">User Management</h2>
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">1,250</p>
                  <p className="text-gray-300">Total Users</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">890</p>
                  <p className="text-gray-300">Active This Month</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-400">156</p>
                  <p className="text-gray-300">New This Week</p>
                </div>
              </div>
              <p className="text-gray-300">User management features coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Analytics Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-medium text-white mb-4">Popular Genres</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Action</span>
                    <span className="text-blue-400">{stats.actionMovies} movies</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sci-Fi</span>
                    <span className="text-purple-400">{stats.scifiMovies} movies</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Drama</span>
                    <span className="text-green-400">{stats.dramaMovies} movies</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-medium text-white mb-4">Recent Activity</h3>
                <p className="text-gray-300">Advanced analytics coming soon...</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <h2 className="text-xl font-semibold text-white">Platform Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 space-y-4">
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
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Movies Per Page</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                      <option value="12">12</option>
                      <option value="18">18</option>
                      <option value="24">24</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">Save Changes</Button>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-medium text-white mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Server Status</span>
                    <span className="text-green-400 text-sm">● Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Database</span>
                    <span className="text-green-400 text-sm">● Connected</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">CDN</span>
                    <span className="text-green-400 text-sm">● Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Last Backup</span>
                    <span className="text-gray-400 text-sm">2 hours ago</span>
                  </div>
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
