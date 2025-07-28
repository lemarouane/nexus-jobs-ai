import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Calendar, 
  Heart, 
  Share2, 
  ArrowLeft,
  Building,
  CheckCircle,
  AlertCircle,
  Star,
  Briefcase,
  GraduationCap,
  Target
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockJob = {
  id: 1,
  title: "Senior React Developer",
  company: "TechCorp Inc.",
  location: "San Francisco, CA",
  type: "Full-time",
  experience: "5+ years",
  salary: "$120,000 - $150,000",
  posted: "2 days ago",
  applicants: 47,
  aiMatch: 95,
  description: `We are looking for a Senior React Developer to join our dynamic team. You will be responsible for developing and maintaining high-quality web applications using React and related technologies.`,
  responsibilities: [
    "Develop and maintain React-based web applications",
    "Collaborate with cross-functional teams to define, design, and ship new features",
    "Write clean, maintainable, and efficient code",
    "Participate in code reviews and mentor junior developers",
    "Stay up-to-date with the latest industry trends and technologies"
  ],
  requirements: [
    "5+ years of experience with React and JavaScript",
    "Strong knowledge of HTML, CSS, and modern CSS frameworks",
    "Experience with state management libraries (Redux, Context API)",
    "Familiarity with testing frameworks (Jest, React Testing Library)",
    "Bachelor's degree in Computer Science or related field"
  ],
  niceToHave: [
    "Experience with TypeScript",
    "Knowledge of Node.js and Express",
    "Experience with cloud platforms (AWS, Azure)",
    "Familiarity with CI/CD pipelines"
  ],
  benefits: [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote work options",
    "Professional development budget",
    "Unlimited PTO policy"
  ],
  skills: [
    { name: "React", required: true, match: 95 },
    { name: "JavaScript", required: true, match: 90 },
    { name: "TypeScript", required: false, match: 85 },
    { name: "HTML/CSS", required: true, match: 92 },
    { name: "Redux", required: true, match: 80 },
    { name: "Node.js", required: false, match: 75 }
  ],
  company_info: {
    name: "TechCorp Inc.",
    size: "500-1000 employees",
    industry: "Technology",
    founded: "2010",
    description: "TechCorp is a leading technology company focused on building innovative software solutions for businesses worldwide.",
    website: "https://techcorp.com",
    employees: 750,
    funding: "Series C",
    culture: ["Innovation", "Collaboration", "Work-life balance", "Continuous learning"]
  }
};

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isApplied, setIsApplied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    toast({
      title: "Application Submitted!",
      description: "Your application has been sent to TechCorp Inc. You'll hear back within 5-7 business days.",
    });
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "Job Removed" : "Job Saved!",
      description: isSaved ? "Job removed from your saved list." : "Job added to your saved list.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied!",
      description: "Job link has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/jobs")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Button>
        </div>

        {/* Job Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback>TC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-2xl lg:text-3xl">{mockJob.title}</CardTitle>
                    <Badge variant={mockJob.aiMatch >= 90 ? "default" : "secondary"} className="text-sm">
                      <Target className="h-3 w-3 mr-1" />
                      {mockJob.aiMatch}% AI Match
                    </Badge>
                  </div>
                  <CardDescription className="text-lg font-medium text-foreground">
                    {mockJob.company}
                  </CardDescription>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {mockJob.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {mockJob.type}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {mockJob.posted}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {mockJob.applicants} applicants
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <DollarSign className="h-5 w-5 text-success mr-2" />
                    <span className="text-lg font-semibold text-success">{mockJob.salary}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleSave}
                  className={isSaved ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isSaved ? "fill-current" : ""}`} />
                  {isSaved ? "Saved" : "Save"}
                </Button>
                <Button 
                  size="lg" 
                  onClick={handleApply} 
                  disabled={isApplied}
                  className="bg-gradient-primary hover:opacity-90"
                >
                  {isApplied ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Applied
                    </>
                  ) : (
                    "Apply Now"
                  )}
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Job Details</TabsTrigger>
                <TabsTrigger value="company">Company</TabsTrigger>
                <TabsTrigger value="skills">Skills Match</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{mockJob.description}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Responsibilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockJob.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockJob.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <AlertCircle className="h-4 w-4 text-warning mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Nice to Have</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockJob.niceToHave.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Benefits & Perks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockJob.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="company" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="h-5 w-5 mr-2" />
                      About {mockJob.company_info.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{mockJob.company_info.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Company Size</span>
                          <span className="text-sm text-muted-foreground">{mockJob.company_info.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Industry</span>
                          <span className="text-sm text-muted-foreground">{mockJob.company_info.industry}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Founded</span>
                          <span className="text-sm text-muted-foreground">{mockJob.company_info.founded}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Funding Stage</span>
                          <span className="text-sm text-muted-foreground">{mockJob.company_info.funding}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Company Culture</h4>
                      <div className="flex flex-wrap gap-2">
                        {mockJob.company_info.culture.map((value, index) => (
                          <Badge key={index} variant="secondary">{value}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Skills Assessment</CardTitle>
                    <CardDescription>
                      How well your skills match this job's requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockJob.skills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{skill.name}</span>
                              {skill.required && (
                                <Badge variant="destructive" className="text-xs">Required</Badge>
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.match}% match</span>
                          </div>
                          <Progress value={skill.match} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90" 
                  size="lg"
                  onClick={handleApply}
                  disabled={isApplied}
                >
                  {isApplied ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Applied
                    </>
                  ) : (
                    "Apply Now"
                  )}
                </Button>
                <Button variant="outline" className="w-full" onClick={handleSave}>
                  <Heart className={`h-4 w-4 mr-2 ${isSaved ? "fill-current text-red-500" : ""}`} />
                  {isSaved ? "Saved" : "Save Job"}
                </Button>
                <Button variant="outline" className="w-full" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Job
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Job Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">AI Match Score</span>
                  <Badge variant="default" className="bg-gradient-primary">
                    {mockJob.aiMatch}%
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Competition Level</span>
                  <Badge variant="warning">Medium</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Response Rate</span>
                  <Badge variant="success">High</Badge>
                </div>
                <Separator />
                <div className="text-sm text-muted-foreground">
                  <p>This role matches your profile very well. You have a high chance of getting an interview.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "React Developer", company: "StartupXYZ", match: 88 },
                  { title: "Frontend Engineer", company: "BigTech", match: 82 },
                  { title: "Software Engineer", company: "InnovateCo", match: 78 }
                ].map((job, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-sm">{job.title}</h4>
                        <p className="text-xs text-muted-foreground">{job.company}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {job.match}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;