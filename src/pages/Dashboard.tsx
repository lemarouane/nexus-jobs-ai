import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Briefcase, Users, TrendingUp, Calendar, MapPin, Clock, Eye, Heart, Send, Star, Award, Target } from "lucide-react";

const mockApplicationData = [
  { month: "Jan", applications: 12, interviews: 3, offers: 1 },
  { month: "Feb", applications: 18, interviews: 5, offers: 2 },
  { month: "Mar", applications: 25, interviews: 8, offers: 3 },
  { month: "Apr", applications: 22, interviews: 6, offers: 2 },
  { month: "May", applications: 30, interviews: 10, offers: 4 },
  { month: "Jun", applications: 28, interviews: 12, offers: 5 }
];

const mockSkillsData = [
  { skill: "React", level: 85, color: "hsl(220, 100%, 50%)" },
  { skill: "TypeScript", level: 80, color: "hsl(280, 100%, 60%)" },
  { skill: "Node.js", level: 75, color: "hsl(140, 80%, 45%)" },
  { skill: "Python", level: 70, color: "hsl(45, 100%, 55%)" },
  { skill: "AWS", level: 65, color: "hsl(350, 90%, 55%)" }
];

const mockJobMatches = [
  { id: 1, title: "Senior React Developer", company: "TechCorp", location: "San Francisco", match: 95, salary: "$120k-150k", applied: false },
  { id: 2, title: "Full Stack Engineer", company: "StartupXYZ", location: "New York", match: 88, salary: "$100k-130k", applied: true },
  { id: 3, title: "Frontend Lead", company: "BigTech", location: "Seattle", match: 82, salary: "$140k-180k", applied: false },
  { id: 4, title: "Software Engineer", company: "InnovateCo", location: "Austin", match: 78, salary: "$90k-120k", applied: true }
];

const mockEmployerStats = [
  { month: "Jan", jobPosts: 5, applications: 45, hires: 2 },
  { month: "Feb", jobPosts: 8, applications: 72, hires: 3 },
  { month: "Mar", jobPosts: 12, applications: 98, hires: 5 },
  { month: "Apr", jobPosts: 10, applications: 87, hires: 4 },
  { month: "May", jobPosts: 15, applications: 125, hires: 6 },
  { month: "Jun", jobPosts: 18, applications: 156, hires: 8 }
];

const jobSeekerChartConfig = {
  applications: { label: "Applications", color: "hsl(220, 100%, 50%)" },
  interviews: { label: "Interviews", color: "hsl(280, 100%, 60%)" },
  offers: { label: "Offers", color: "hsl(140, 80%, 45%)" }
};

const employerChartConfig = {
  jobPosts: { label: "Job Posts", color: "hsl(220, 100%, 50%)" },
  applications: { label: "Applications", color: "hsl(280, 100%, 60%)" },
  hires: { label: "Hires", color: "hsl(140, 80%, 45%)" }
};

const JobSeekerDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Profile Overview */}
      <Card className="bg-gradient-primary text-primary-foreground">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">John Smith</CardTitle>
              <CardDescription className="text-primary-foreground/80">Senior Software Developer</CardDescription>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <MapPin className="h-3 w-3 mr-1" />
                  San Francisco, CA
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Briefcase className="h-3 w-3 mr-1" />
                  5+ years experience
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">135</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">44</div>
            <p className="text-xs text-muted-foreground">+25% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Offers</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">17</div>
            <p className="text-xs text-muted-foreground">+41% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">289</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Application Trends</CardTitle>
            <CardDescription>Your job search activity over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={jobSeekerChartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockApplicationData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="applications" stroke="hsl(220, 100%, 50%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="interviews" stroke="hsl(280, 100%, 60%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="offers" stroke="hsl(140, 80%, 45%)" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skill Proficiency</CardTitle>
            <CardDescription>Your technical skill levels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockSkillsData.map((skill) => (
              <div key={skill.skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.skill}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* AI Job Matches */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Target className="h-5 w-5 mr-2 text-primary" />
            AI-Recommended Job Matches
          </CardTitle>
          <CardDescription>Jobs that match your skills and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockJobMatches.map((job) => (
              <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <Badge variant={job.match >= 90 ? "default" : job.match >= 80 ? "secondary" : "outline"}>
                      {job.match}% match
                    </Badge>
                    {job.applied && <Badge variant="success">Applied</Badge>}
                  </div>
                  <p className="text-muted-foreground">{job.company} • {job.location}</p>
                  <p className="text-sm font-medium text-success">{job.salary}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  {!job.applied && (
                    <Button size="sm">
                      <Send className="h-4 w-4 mr-1" />
                      Apply
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const EmployerDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Company Overview */}
      <Card className="bg-gradient-primary text-primary-foreground">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">TechCorp Inc.</CardTitle>
              <CardDescription className="text-primary-foreground/80">Technology Company</CardDescription>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Users className="h-3 w-3 mr-1" />
                  500+ employees
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <MapPin className="h-3 w-3 mr-1" />
                  San Francisco, CA
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Job Posts</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">23</div>
            <p className="text-xs text-muted-foreground">+3 new this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <Send className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">583</div>
            <p className="text-xs text-muted-foreground">+156 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Successful Hires</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">28</div>
            <p className="text-xs text-muted-foreground">+8 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time to Hire</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">18</div>
            <p className="text-xs text-muted-foreground">days (-2 from last month)</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Hiring Metrics</CardTitle>
            <CardDescription>Your recruitment performance over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={employerChartConfig}>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={mockEmployerStats}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" className="text-muted-foreground" />
                  <YAxis className="text-muted-foreground" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="applications" stackId="1" stroke="hsl(280, 100%, 60%)" fill="hsl(280, 100%, 60%)" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="hires" stackId="1" stroke="hsl(140, 80%, 45%)" fill="hsl(140, 80%, 45%)" fillOpacity={0.8} />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Application Sources</CardTitle>
            <CardDescription>Where your applications come from</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}}>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={[
                      { name: "Job Boards", value: 45, fill: "hsl(220, 100%, 50%)" },
                      { name: "Direct Apply", value: 30, fill: "hsl(280, 100%, 60%)" },
                      { name: "Referrals", value: 15, fill: "hsl(140, 80%, 45%)" },
                      { name: "Social Media", value: 10, fill: "hsl(45, 100%, 55%)" }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applications */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
          <CardDescription>Latest candidates who applied to your jobs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Sarah Johnson", role: "Senior Frontend Developer", applied: "2 hours ago", match: 92 },
              { name: "Mike Chen", role: "Backend Engineer", applied: "5 hours ago", match: 88 },
              { name: "Emily Davis", role: "Full Stack Developer", applied: "1 day ago", match: 85 },
              { name: "Alex Rodriguez", role: "DevOps Engineer", applied: "2 days ago", match: 79 }
            ].map((candidate, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{candidate.name}</h3>
                    <p className="text-sm text-muted-foreground">{candidate.role}</p>
                    <p className="text-xs text-muted-foreground">Applied {candidate.applied}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={candidate.match >= 90 ? "default" : "secondary"}>
                    {candidate.match}% match
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    Review
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Dashboard = () => {
  const location = useLocation();
  const [userType, setUserType] = useState<"jobseeker" | "employer">("jobseeker");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Welcome to Your Dashboard
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your {userType === "jobseeker" ? "job search" : "recruitment process"} with AI-powered insights
          </p>
        </div>

        <Tabs value={userType} onValueChange={(value) => setUserType(value as "jobseeker" | "employer")} className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="jobseeker">Job Seeker</TabsTrigger>
            <TabsTrigger value="employer">Employer</TabsTrigger>
          </TabsList>

          <TabsContent value="jobseeker">
            <JobSeekerDashboard />
          </TabsContent>

          <TabsContent value="employer">
            <EmployerDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;