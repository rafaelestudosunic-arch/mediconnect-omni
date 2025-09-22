import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Users, 
  BarChart3, 
  Phone, 
  Mail, 
  Smartphone,
  MessageCircle,
  Instagram,
  Heart,
  Shield,
  Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    navigate(`/${role}`);
  };

  const channels = [
    { icon: MessageSquare, name: "WhatsApp", color: "bg-green-500" },
    { icon: Instagram, name: "Instagram", color: "bg-pink-500" },
    { icon: MessageCircle, name: "Messenger", color: "bg-blue-500" },
    { icon: Mail, name: "Email", color: "bg-gray-500" },
    { icon: Phone, name: "Phone", color: "bg-indigo-500" },
    { icon: MessageSquare, name: "Website Chat", color: "bg-medical-primary" },
  ];

  const features = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Unified experience across all communication channels"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Secure handling of all patient communications"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Live performance monitoring and insights"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-medical-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MedConnect</h1>
                <p className="text-sm text-muted-foreground">Omnichannel Healthcare Platform</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-medical-success/10 text-medical-success border-medical-success/20">
              Live System
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unified Healthcare Communication
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with patients across all channels from a single, powerful platform. 
            Streamline operations, improve response times, and deliver exceptional patient care.
          </p>
          
          {/* Channel Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12 max-w-4xl mx-auto">
            {channels.map((channel, index) => (
              <div key={index} className="medical-card text-center p-4 hover:scale-105 transition-transform">
                <div className={`w-12 h-12 ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">{channel.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-none shadow-lg bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-medical-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Role Selection */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Role</h2>
            <p className="text-lg text-muted-foreground">
              Access your personalized dashboard based on your role in the healthcare system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Patient Portal */}
            <Card className="medical-card hover:shadow-xl transition-all duration-300 cursor-pointer group" 
                  onClick={() => handleRoleSelect('patient')}>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-medical-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-primary/20 transition-colors">
                  <Heart className="w-10 h-10 text-medical-primary" />
                </div>
                <CardTitle className="text-2xl">Patient Portal</CardTitle>
                <CardDescription className="text-base">
                  View your conversations, book appointments, and access your medical communications
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full medical-gradient text-white font-semibold">
                  Access Patient Portal
                  <Heart className="w-4 h-4 ml-2" />
                </Button>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Conversation History</Badge>
                  <Badge variant="outline">Appointment Booking</Badge>
                  <Badge variant="outline">Reminders</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Agent Dashboard */}
            <Card className="medical-card hover:shadow-xl transition-all duration-300 cursor-pointer group" 
                  onClick={() => handleRoleSelect('agent')}>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-medical-success/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-success/20 transition-colors">
                  <Users className="w-10 h-10 text-medical-success" />
                </div>
                <CardTitle className="text-2xl">Agent Dashboard</CardTitle>
                <CardDescription className="text-base">
                  Unified inbox for all patient communications with complete conversation context
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-medical-success hover:bg-medical-success/90 text-white font-semibold">
                  Open Agent Dashboard
                  <Users className="w-4 h-4 ml-2" />
                </Button>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Unified Inbox</Badge>
                  <Badge variant="outline">Quick Replies</Badge>
                  <Badge variant="outline">Patient History</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Manager Dashboard */}
            <Card className="medical-card hover:shadow-xl transition-all duration-300 cursor-pointer group" 
                  onClick={() => handleRoleSelect('manager')}>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-medical-warning/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-medical-warning/20 transition-colors">
                  <BarChart3 className="w-10 h-10 text-medical-warning" />
                </div>
                <CardTitle className="text-2xl">Manager Dashboard</CardTitle>
                <CardDescription className="text-base">
                  Monitor performance, manage queues, and oversee team operations with real-time analytics
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-medical-warning hover:bg-medical-warning/90 text-white font-semibold">
                  View Manager Dashboard
                  <BarChart3 className="w-4 h-4 ml-2" />
                </Button>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">Performance KPIs</Badge>
                  <Badge variant="outline">Queue Management</Badge>
                  <Badge variant="outline">Team Analytics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-success mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-warning mb-2">&lt;30s</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-critical mb-2">HIPAA</div>
            <div className="text-muted-foreground">Compliant</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;