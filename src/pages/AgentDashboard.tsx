import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft,
  MessageSquare, 
  Users,
  Clock,
  Send,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Search,
  Filter,
  MoreVertical,
  UserCheck,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Heart,
  Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AgentDashboard = () => {
  const navigate = useNavigate();
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const conversations = [
    {
      id: 1,
      patient: "Maria Rodriguez",
      patientId: "P-2024-156",
      channel: "WhatsApp",
      icon: MessageSquare,
      color: "bg-green-500",
      lastMessage: "Thank you for the appointment confirmation. Can I reschedule?",
      time: "2 min ago",
      unread: 2,
      priority: "normal",
      status: "active",
      waitTime: "00:02:15"
    },
    {
      id: 2,
      patient: "John Smith",
      patientId: "P-2024-098", 
      channel: "Email",
      icon: Mail,
      color: "bg-gray-500",
      lastMessage: "I need to discuss my lab results with Dr. Johnson",
      time: "15 min ago",
      unread: 1,
      priority: "high",
      status: "waiting",
      waitTime: "00:15:32"
    },
    {
      id: 3,
      patient: "Emma Chen",
      patientId: "P-2024-203",
      channel: "Instagram",
      icon: Instagram,
      color: "bg-pink-500",
      lastMessage: "Is the clinic open on weekends?",
      time: "1 hour ago",
      unread: 0,
      priority: "normal",
      status: "resolved",
      waitTime: "00:00:00"
    },
    {
      id: 4,
      patient: "David Wilson",
      patientId: "P-2024-175",
      channel: "Website Chat",
      icon: MessageCircle,
      color: "bg-medical-primary",
      lastMessage: "I'm experiencing side effects from my medication",
      time: "3 min ago",
      unread: 3,
      priority: "urgent",
      status: "active",
      waitTime: "00:03:45"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Maria Rodriguez",
      message: "Hello, I received a confirmation for my appointment tomorrow at 2 PM.",
      time: "10:25 AM",
      type: "received",
      channel: "WhatsApp"
    },
    {
      id: 2,
      sender: "You",
      message: "Hi Maria! Yes, your appointment with Dr. Johnson is confirmed for tomorrow at 2:00 PM. Please arrive 15 minutes early for check-in.",
      time: "10:26 AM",
      type: "sent",
      channel: "WhatsApp"
    },
    {
      id: 3,
      sender: "Maria Rodriguez", 
      message: "Thank you for the confirmation. Actually, I need to reschedule. Something came up. What's the earliest available slot?",
      time: "10:28 AM",
      type: "received",
      channel: "WhatsApp"
    }
  ];

  const quickReplies = [
    "Thank you for contacting us. How can I help you today?",
    "Your appointment has been confirmed. You'll receive a reminder 24 hours before.",
    "I'll check with the doctor and get back to you shortly.",
    "Please hold while I review your medical history.",
    "Let me transfer you to the appropriate specialist."
  ];

  const patientInfo = {
    name: "Maria Rodriguez",
    id: "P-2024-156",
    dob: "March 15, 1985",
    phone: "+1 (555) 123-4567",
    email: "maria.rodriguez@email.com",
    insurance: "BlueCross BlueShield",
    primaryCare: "Dr. Sarah Johnson",
    lastVisit: "Dec 10, 2024",
    allergies: ["Penicillin", "Latex"],
    conditions: ["Hypertension", "Type 2 Diabetes"]
  };

  const stats = [
    { label: "Active Chats", value: "12", change: "+3", icon: MessageSquare, color: "text-medical-primary" },
    { label: "Avg Response", value: "1.2m", change: "-15s", icon: Clock, color: "text-medical-success" },
    { label: "Resolved Today", value: "28", change: "+5", icon: CheckCircle2, color: "text-medical-success" },
    { label: "Queue Length", value: "4", change: "-2", icon: Users, color: "text-medical-warning" }
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
                <div className="w-10 h-10 bg-medical-success rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Agent Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Agent: Sarah Mitchell | Shift: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-medical-success/10 text-medical-success border-medical-success/20">
                <div className="status-indicator status-online mr-2"></div>
                Available
              </Badge>
              <div className="text-sm text-muted-foreground">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="medical-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.change} from yesterday</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Conversation List */}
          <div className="lg:col-span-4">
            <Card className="medical-card h-[calc(100vh-280px)]">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Active Conversations
                  </CardTitle>
                  <Button size="sm" variant="outline">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search conversations..." className="pl-10" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1 max-h-96 overflow-y-auto">
                  {conversations.map((conv) => (
                    <div
                      key={conv.id}
                      className={`p-4 cursor-pointer hover:bg-accent/50 transition-colors border-l-4 ${
                        selectedConversation === conv.id 
                          ? 'bg-accent border-l-medical-primary' 
                          : conv.priority === 'urgent' 
                            ? 'border-l-medical-critical' 
                            : conv.priority === 'high'
                              ? 'border-l-medical-warning'
                              : 'border-l-transparent'
                      }`}
                      onClick={() => setSelectedConversation(conv.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 ${conv.color} rounded-full flex items-center justify-center`}>
                            <conv.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">{conv.patient}</p>
                            <p className="text-xs text-muted-foreground">{conv.patientId}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {conv.unread > 0 && (
                            <Badge variant="destructive" className="text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center">
                              {conv.unread}
                            </Badge>
                          )}
                          <Badge 
                            variant={conv.priority === 'urgent' ? 'destructive' : 
                                   conv.priority === 'high' ? 'secondary' : 'outline'}
                            className="text-xs"
                          >
                            {conv.priority}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{conv.lastMessage}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                        <div className="flex items-center gap-2">
                          <div className={`status-indicator ${
                            conv.status === 'active' ? 'status-online' :
                            conv.status === 'waiting' ? 'status-away' :
                            'status-offline'
                          }`}></div>
                          <span className="text-xs text-muted-foreground">{conv.waitTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-5">
            <Card className="medical-card h-[calc(100vh-280px)] flex flex-col">
              <CardHeader className="flex-shrink-0 pb-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{patientInfo.name}</h3>
                      <p className="text-sm text-muted-foreground">WhatsApp • Active now</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
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
              </CardContent>

              <div className="flex-shrink-0 p-4 border-t bg-muted/30">
                {/* Quick Replies */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickReplies.slice(0, 3).map((reply, index) => (
                    <Button 
                      key={index} 
                      size="sm" 
                      variant="outline" 
                      className="text-xs h-7"
                      onClick={() => setNewMessage(reply)}
                    >
                      {reply.substring(0, 25)}...
                    </Button>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Textarea 
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="min-h-[60px] resize-none"
                  />
                  <div className="flex flex-col gap-2">
                    <Button size="sm" className="bg-medical-success hover:bg-medical-success/90 text-white">
                      <Send className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <FileText className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Patient Info Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            {/* Patient Details */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  Patient Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-medical-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{patientInfo.name}</p>
                    <p className="text-sm text-muted-foreground">{patientInfo.id}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">DOB:</span>
                    <span>{patientInfo.dob}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone:</span>
                    <span>{patientInfo.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Primary Care:</span>
                    <span>{patientInfo.primaryCare}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Visit:</span>
                    <span>{patientInfo.lastVisit}</span>
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <p className="text-sm font-medium mb-2">Allergies:</p>
                  <div className="flex flex-wrap gap-1">
                    {patientInfo.allergies.map((allergy, index) => (
                      <Badge key={index} variant="destructive" className="text-xs">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <p className="text-sm font-medium mb-2">Conditions:</p>
                  <div className="flex flex-wrap gap-1">
                    {patientInfo.conditions.map((condition, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Items */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Action Items
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Follow-up
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Update Medical Record
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="w-4 h-4 mr-2" />
                  Escalate to Doctor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Zap className="w-4 h-4 mr-2" />
                  Mark as Urgent
                </Button>
              </CardContent>
            </Card>

            {/* Conversation History */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-medical-success rounded-full"></div>
                    <span>Appointment confirmed</span>
                    <span className="text-xs text-muted-foreground ml-auto">2h ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-medical-primary rounded-full"></div>
                    <span>Message received</span>
                    <span className="text-xs text-muted-foreground ml-auto">5h ago</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-medical-warning rounded-full"></div>
                    <span>Prescription refill requested</span>
                    <span className="text-xs text-muted-foreground ml-auto">1d ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;