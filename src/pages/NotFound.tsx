import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Home, Search, ArrowLeft, Compass } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center px-4">
      <Card className="w-full max-w-lg text-center">
        <CardHeader>
          <div className="mx-auto mb-6 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
            <Compass className="h-12 w-12 text-primary-foreground" />
          </div>
          <CardTitle className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            404
          </CardTitle>
          <CardDescription className="text-xl">
            Oops! This page seems to be on a coffee break.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            The page you're looking for might have been moved, deleted, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => navigate("/")} className="bg-gradient-primary hover:opacity-90">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Button>
            <Button onClick={() => navigate("/jobs")} variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Browse Jobs
            </Button>
            <Button onClick={() => navigate(-1)} variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
