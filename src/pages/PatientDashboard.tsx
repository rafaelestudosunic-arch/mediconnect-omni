import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft,
  MessageSquare, 
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  Smartphone,
  MessageCircle,
  Instagram,
  Send,
  FileText,
  User,
  Heart
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      channel: "WhatsApp",
      icon: MessageSquare,
      color: "bg-green-500",
      lastMessage: "Your appointment is confirmed for tomorrow at 2:00 PM",
      time: "10:30 AM",
      unread: 0,
      status: "confirmed"
    },
    {
      id: 2,
      channel: "Email", 
      icon: Mail,
      color: "bg-gray-500",
      lastMessage: "Lab results are now available in your portal",
      time: "Yesterday",
      unread: 1,
      status: "new"
    },
    {
      id: 3,
      channel: "Website Chat",
      icon: MessageCircle,
      color: "bg-medical-primary", 
      lastMessage: "Thank you for contacting us. How can we help?",
      time: "2 days ago",
      unread: 0,
      status: "resolved"
    }
  ];

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      date: "Dec 22, 2024",
      time: "2:00 PM",
      status: "confirmed",
      type: "Follow-up"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatology", 
      date: "Dec 28, 2024",
      time: "10:30 AM",
      status: "pending",
      type: "Consultation"
    },
    {
      id: 3,
      doctor: "Dr. Emily Rodriguez",
      specialty: "General Practice",
      date: "Jan 5, 2025",
      time: "3:15 PM", 
      status: "scheduled",
      type: "Annual Checkup"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Dr. Johnson",
      message: "Your test results look good. Please continue with the prescribed medication.",
      time: "2:30 PM",
      type: "received"
    },
    {
      id: 2,
      sender: "You",
      message: "Thank you doctor. Should I schedule a follow-up appointment?",
      time: "2:35 PM", 
      type: "sent"
    },
    {
      id: 3,
      sender: "Clinic Assistant",
      message: "Your appointment is confirmed for tomorrow at 2:00 PM. Please arrive 15 minutes early.",
      time: "10:30 AM",
      type: "received"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-medical-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Patient Portal</h1>
                  <p className="text-sm text-muted-foreground">Welcome back, John Smith</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-medical-success/10 text-medical-success border-medical-success/20">
              <div className="status-indicator status-online mr-2"></div>
              Online
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Tabs defaultValue="conversations" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="conversations" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Conversations
                </TabsTrigger>
                <TabsTrigger value="appointments" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Appointments
                </TabsTrigger>
                <TabsTrigger value="messages" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Message Center
                </TabsTrigger>
              </TabsList>

              <TabsContent value="conversations" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">Your Conversations</h2>
                  <Button className="medical-gradient text-white">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    New Conversation
                  </Button>
                </div>

                <div className="space-y-4">
                  {conversations.map((conv) => (
                    <Card key={conv.id} className="medical-card hover:shadow-lg transition-all cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 ${conv.color} rounded-lg flex items-center justify-center`}>
                              <conv.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-foreground">{conv.channel}</h3>
                                {conv.unread > 0 && (
                                  <Badge variant="destructive" className="text-xs">{conv.unread}</Badge>
                                )}
                              </div>
                              <p className="text-muted-foreground text-sm">{conv.lastMessage}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-muted-foreground mb-2">{conv.time}</p>
                            <Badge 
                              variant={conv.status === 'confirmed' ? 'default' : 
                                     conv.status === 'new' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {conv.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="appointments" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">Appointments</h2>
                  <Button className="bg-medical-success hover:bg-medical-success/90 text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                </div>

                <div className="space-y-4">
                  {appointments.map((apt) => (
                    <Card key={apt.id} className="medical-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-medical-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{apt.doctor}</h3>
                              <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                              <p className="text-xs text-muted-foreground mt-1">{apt.type}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium">{apt.date}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{apt.time}</span>
                            </div>
                            <Badge 
                              variant={apt.status === 'confirmed' ? 'default' : 
                                     apt.status === 'pending' ? 'secondary' : 'outline'}
                            >
                              {apt.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="messages" className="space-y-4">
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Message Center
                    </CardTitle>
                    <CardDescription>
                      Send a message to your healthcare team
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                      {messages.map((msg) => (
                        <div 
                          key={msg.id} 
                          className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`max-w-sm p-3 rounded-lg ${
                              msg.type === 'sent' 
                                ? 'bg-medical-primary text-white' 
                                : 'bg-secondary text-secondary-foreground'
                            }`}
                          >
                            <p className="text-sm font-medium mb-1">{msg.sender}</p>
                            <p className="text-sm">{msg.message}</p>
                            <p className={`text-xs mt-2 ${
                              msg.type === 'sent' ? 'text-white/80' : 'text-muted-foreground'
                            }`}>
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-4 border-t">
                      <Textarea 
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="min-h-[80px]"
                      />
                      <Button className="medical-gradient text-white">
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Actions */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Request Medical Records
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Report Issue
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-medical-success rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Appointment confirmed</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-medical-primary rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Lab results available</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-medical-warning rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Prescription refill reminder</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Summary */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Profile Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Patient ID:</span>
                  <span className="text-sm font-medium">P-2024-001</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Next Appointment:</span>
                  <span className="text-sm font-medium">Dec 22, 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Primary Care:</span>
                  <span className="text-sm font-medium">Dr. Johnson</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Insurance:</span>
                  <span className="text-sm font-medium">BlueCross</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;