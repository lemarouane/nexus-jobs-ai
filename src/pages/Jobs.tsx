import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, Building, Clock, DollarSign, Heart, Filter } from "lucide-react";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState([50000]);
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechVision Inc",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: true,
      salary: "$120,000 - $150,000",
      description: "Build amazing user experiences with React and TypeScript. Join our growing team of innovative developers.",
      skills: ["React", "TypeScript", "JavaScript", "CSS"],
      postedDate: "2 days ago",
      aiMatch: 95
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "DataFlow Solutions",
      location: "New York, NY",
      type: "Full-time",
      remote: false,
      salary: "$130,000 - $170,000",
      description: "Analyze large datasets and build machine learning models to drive business insights.",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      postedDate: "1 day ago",
      aiMatch: 88
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Creative Studios",
      location: "Austin, TX",
      type: "Full-time",
      remote: true,
      salary: "$90,000 - $120,000",
      description: "Design intuitive and beautiful user interfaces for our suite of SaaS products.",
      skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
      postedDate: "3 days ago",
      aiMatch: 82
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudTech Corp",
      location: "Seattle, WA",
      type: "Full-time",
      remote: true,
      salary: "$110,000 - $140,000",
      description: "Manage cloud infrastructure and CI/CD pipelines for scalable applications.",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      postedDate: "1 week ago",
      aiMatch: 91
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Boston, MA",
      type: "Full-time",
      remote: false,
      salary: "$140,000 - $180,000",
      description: "Lead product strategy and work with cross-functional teams to deliver exceptional products.",
      skills: ["Product Strategy", "Agile", "Analytics", "Leadership"],
      postedDate: "4 days ago",
      aiMatch: 76
    },
    {
      id: 6,
      title: "Mobile App Developer",
      company: "AppWorks Studio",
      location: "Los Angeles, CA",
      type: "Contract",
      remote: true,
      salary: "$80,000 - $100,000",
      description: "Develop native iOS and Android applications using React Native and Flutter.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      postedDate: "5 days ago",
      aiMatch: 85
    }
  ];

  const getMatchColor = (match: number) => {
    if (match >= 90) return "bg-success";
    if (match >= 80) return "bg-warning";
    return "bg-primary";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Perfect Job</h1>
          <p className="text-muted-foreground">Discover opportunities tailored to your skills and preferences</p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 bg-gradient-card border-0 shadow-md">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Job title, keywords, or company"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Location"
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="hero" className="flex-1">
                  <Search className="mr-2 h-4 w-4" />
                  Search Jobs
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden"
                >
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} space-y-6`}>
            <Card className="border-0 bg-card shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Job Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fulltime">Full-time</SelectItem>
                      <SelectItem value="parttime">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Experience Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="lead">Lead/Principal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-4 block">
                    Salary Range: ${salaryRange[0].toLocaleString()}+
                  </label>
                  <Slider
                    value={salaryRange}
                    onValueChange={setSalaryRange}
                    max={200000}
                    min={30000}
                    step={10000}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Remote Work</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Remote preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="remote">Remote Only</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">
                Showing {jobs.length} jobs
              </p>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="salary">Highest Salary</SelectItem>
                  <SelectItem value="match">Best AI Match</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {jobs.map((job) => (
              <Card key={job.id} className="border-0 bg-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Link to={`/jobs/${job.id}`}>
                          <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                        </Link>
                        <Badge
                          variant="secondary"
                          className={`${getMatchColor(job.aiMatch)} text-white`}
                        >
                          {job.aiMatch}% AI Match
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <Building className="h-4 w-4" />
                          {job.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        {job.remote && (
                          <Badge variant="outline">Remote</Badge>
                        )}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {job.salary}
                      </div>
                      <span>{job.postedDate}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Link to={`/jobs/${job.id}`}>
                        <Button variant="hero" size="sm">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;