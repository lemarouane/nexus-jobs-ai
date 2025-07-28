import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  Plus, 
  Trash2, 
  Edit3,
  Save,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Github,
  Linkedin,
  Star,
  Upload,
  Download,
  Settings,
  Bell,
  Shield,
  Eye
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockProfile = {
  personal: {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior Software Developer",
    bio: "Passionate software developer with 5+ years of experience building scalable web applications. I love working with React, TypeScript, and modern web technologies.",
    website: "https://johnsmith.dev",
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  experience: [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Software Developer",
      startDate: "2022-01",
      endDate: "Present",
      description: "Lead frontend development for multiple React applications, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "Frontend Developer",
      startDate: "2020-03",
      endDate: "2021-12",
      description: "Developed responsive web applications using React and TypeScript, collaborated with design team to implement UI/UX improvements."
    }
  ],
  education: [
    {
      id: 1,
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      startDate: "2016-09",
      endDate: "2020-05",
      gpa: "3.8"
    }
  ],
  skills: [
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "JavaScript", level: 95, category: "Language" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 75, category: "Language" },
    { name: "AWS", level: 70, category: "Cloud" },
    { name: "Docker", level: 75, category: "DevOps" },
    { name: "Git", level: 90, category: "Tools" }
  ],
  preferences: {
    jobType: "full-time",
    remote: true,
    minSalary: 120000,
    maxSalary: 180000,
    industries: ["Technology", "Fintech", "Healthcare"],
    notifications: {
      email: true,
      push: true,
      jobAlerts: true,
      messages: true
    }
  }
};

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(mockProfile);
  const [activeSection, setActiveSection] = useState("personal");

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated!",
      description: "Your profile has been successfully updated.",
    });
  };

  const addExperience = () => {
    const newExp = {
      id: Date.now(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: ""
    };
    setProfile(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const removeExperience = (id: number) => {
    setProfile(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const addSkill = () => {
    const skillName = prompt("Enter skill name:");
    if (skillName) {
      const newSkill = {
        name: skillName,
        level: 50,
        category: "Other"
      };
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill]
      }));
    }
  };

  const removeSkill = (skillName: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.name !== skillName)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              My Profile
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your personal information and job preferences
            </p>
          </div>
          <div className="flex items-center space-x-3">
            {isEditing ? (
              <>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave} className="bg-gradient-primary hover:opacity-90">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} variant="outline">
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-2xl">
                      {profile.personal.firstName[0]}{profile.personal.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="sm"
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full p-0"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <CardTitle>{profile.personal.firstName} {profile.personal.lastName}</CardTitle>
                <CardDescription>{profile.personal.title}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{profile.personal.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{profile.personal.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{profile.personal.phone}</span>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Social Links</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span className="text-primary cursor-pointer hover:underline">Portfolio</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Github className="h-4 w-4 text-muted-foreground" />
                      <span className="text-primary cursor-pointer hover:underline">GitHub</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-primary cursor-pointer hover:underline">LinkedIn</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Profile Completion</h4>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground">85% complete</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>
                      Update your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profile.personal.firstName}
                          disabled={!isEditing}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personal: { ...prev.personal, firstName: e.target.value }
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profile.personal.lastName}
                          disabled={!isEditing}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personal: { ...prev.personal, lastName: e.target.value }
                          }))}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="title">Professional Title</Label>
                      <Input
                        id="title"
                        value={profile.personal.title}
                        disabled={!isEditing}
                        onChange={(e) => setProfile(prev => ({
                          ...prev,
                          personal: { ...prev.personal, title: e.target.value }
                        }))}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.personal.email}
                          disabled={!isEditing}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personal: { ...prev.personal, email: e.target.value }
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={profile.personal.phone}
                          disabled={!isEditing}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personal: { ...prev.personal, phone: e.target.value }
                          }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={profile.personal.location}
                        disabled={!isEditing}
                        onChange={(e) => setProfile(prev => ({
                          ...prev,
                          personal: { ...prev.personal, location: e.target.value }
                        }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profile.personal.bio}
                        disabled={!isEditing}
                        rows={4}
                        onChange={(e) => setProfile(prev => ({
                          ...prev,
                          personal: { ...prev.personal, bio: e.target.value }
                        }))}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={profile.personal.website}
                          disabled={!isEditing}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personal: { ...prev.personal, website: e.target.value }
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                          id="github"
                          value={profile.personal.github}
                          disabled={!isEditing}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personal: { ...prev.personal, github: e.target.value }
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={profile.personal.linkedin}
                          disabled={!isEditing}
                          onChange={(e) => setProfile(prev => ({
                            ...prev,
                            personal: { ...prev.personal, linkedin: e.target.value }
                          }))}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Experience */}
              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <Briefcase className="h-5 w-5 mr-2" />
                          Work Experience
                        </CardTitle>
                        <CardDescription>
                          Add your work experience and achievements
                        </CardDescription>
                      </div>
                      {isEditing && (
                        <Button onClick={addExperience} variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Experience
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {profile.experience.map((exp, index) => (
                      <div key={exp.id} className="space-y-4 p-4 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Experience {index + 1}</h3>
                          {isEditing && (
                            <Button
                              onClick={() => removeExperience(exp.id)}
                              variant="outline"
                              size="sm"
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Company</Label>
                            <Input
                              value={exp.company}
                              disabled={!isEditing}
                              placeholder="Company name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Position</Label>
                            <Input
                              value={exp.position}
                              disabled={!isEditing}
                              placeholder="Job title"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Start Date</Label>
                            <Input
                              type="month"
                              value={exp.startDate}
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>End Date</Label>
                            <Input
                              type="month"
                              value={exp.endDate}
                              disabled={!isEditing}
                              placeholder="Present"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea
                            value={exp.description}
                            disabled={!isEditing}
                            rows={3}
                            placeholder="Describe your role and achievements"
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2" />
                      Education
                    </CardTitle>
                    <CardDescription>
                      Add your educational background
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {profile.education.map((edu, index) => (
                      <div key={edu.id} className="space-y-4 p-4 border rounded-lg">
                        <h3 className="font-medium">Education {index + 1}</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Institution</Label>
                            <Input
                              value={edu.institution}
                              disabled={!isEditing}
                              placeholder="University/School name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Degree</Label>
                            <Input
                              value={edu.degree}
                              disabled={!isEditing}
                              placeholder="Degree type and major"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label>Start Date</Label>
                            <Input
                              type="month"
                              value={edu.startDate}
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>End Date</Label>
                            <Input
                              type="month"
                              value={edu.endDate}
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>GPA (Optional)</Label>
                            <Input
                              value={edu.gpa}
                              disabled={!isEditing}
                              placeholder="3.8"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          <Award className="h-5 w-5 mr-2" />
                          Skills & Expertise
                        </CardTitle>
                        <CardDescription>
                          Manage your technical and soft skills
                        </CardDescription>
                      </div>
                      {isEditing && (
                        <Button onClick={addSkill} variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Skill
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(
                        profile.skills.reduce((acc, skill) => {
                          if (!acc[skill.category]) acc[skill.category] = [];
                          acc[skill.category].push(skill);
                          return acc;
                        }, {} as Record<string, typeof profile.skills>)
                      ).map(([category, skills]) => (
                        <div key={category} className="space-y-4">
                          <h3 className="font-medium text-lg">{category}</h3>
                          <div className="space-y-3">
                            {skills.map((skill) => (
                              <div key={skill.name} className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="font-medium">{skill.name}</span>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    {isEditing && (
                                      <Button
                                        onClick={() => removeSkill(skill.name)}
                                        variant="outline"
                                        size="sm"
                                        className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                                      >
                                        <Trash2 className="h-3 w-3" />
                                      </Button>
                                    )}
                                  </div>
                                </div>
                                <Progress value={skill.level} className="h-2" />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences */}
              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      Job Preferences
                    </CardTitle>
                    <CardDescription>
                      Set your job search preferences and notification settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Job Preferences</h3>
                        
                        <div className="space-y-2">
                          <Label>Job Type</Label>
                          <Select value={profile.preferences.jobType} disabled={!isEditing}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full-time">Full-time</SelectItem>
                              <SelectItem value="part-time">Part-time</SelectItem>
                              <SelectItem value="contract">Contract</SelectItem>
                              <SelectItem value="freelance">Freelance</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center justify-between">
                          <Label>Remote Work</Label>
                          <Switch
                            checked={profile.preferences.remote}
                            disabled={!isEditing}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Min Salary</Label>
                            <Input
                              type="number"
                              value={profile.preferences.minSalary}
                              disabled={!isEditing}
                              placeholder="120000"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Max Salary</Label>
                            <Input
                              type="number"
                              value={profile.preferences.maxSalary}
                              disabled={!isEditing}
                              placeholder="180000"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Preferred Industries</Label>
                          <div className="flex flex-wrap gap-2">
                            {profile.preferences.industries.map((industry) => (
                              <Badge key={industry} variant="secondary">
                                {industry}
                                {isEditing && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-4 w-4 p-0 ml-1 hover:bg-transparent"
                                  >
                                    <Trash2 className="h-3 w-3" />
                                  </Button>
                                )}
                              </Badge>
                            ))}
                            {isEditing && (
                              <Button variant="outline" size="sm">
                                <Plus className="h-3 w-3 mr-1" />
                                Add
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-medium">Notification Settings</h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Email Notifications</Label>
                              <p className="text-sm text-muted-foreground">Receive updates via email</p>
                            </div>
                            <Switch
                              checked={profile.preferences.notifications.email}
                              disabled={!isEditing}
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Push Notifications</Label>
                              <p className="text-sm text-muted-foreground">Browser push notifications</p>
                            </div>
                            <Switch
                              checked={profile.preferences.notifications.push}
                              disabled={!isEditing}
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Job Alerts</Label>
                              <p className="text-sm text-muted-foreground">New job recommendations</p>
                            </div>
                            <Switch
                              checked={profile.preferences.notifications.jobAlerts}
                              disabled={!isEditing}
                            />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Messages</Label>
                              <p className="text-sm text-muted-foreground">Employer messages</p>
                            </div>
                            <Switch
                              checked={profile.preferences.notifications.messages}
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;