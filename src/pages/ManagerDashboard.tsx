import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft,
  BarChart3,
  Users,
  Clock,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  UserCheck,
  Activity,
  Target,
  Zap,
  Heart,
  Settings,
  Download,
  Filter
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManagerDashboard = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeframe, setSelectedTimeframe] = useState("today");

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const kpiMetrics = [
    { 
      label: "Average Response Time", 
      value: "1.2", 
      unit: "min",
      change: -15, 
      target: 2.0,
      status: "good",
      icon: Clock 
    },
    { 
      label: "Resolution Rate", 
      value: "94.5", 
      unit: "%",
      change: +3.2, 
      target: 90,
      status: "excellent",
      icon: CheckCircle2 
    },
    { 
      label: "Patient Satisfaction", 
      value: "4.8", 
      unit: "/5",
      change: +0.2, 
      target: 4.5,
      status: "excellent",
      icon: Heart 
    },
    { 
      label: "Active Conversations", 
      value: "47", 
      unit: "",
      change: +8, 
      target: 50,
      status: "good",
      icon: MessageSquare 
    }
  ];

  const agents = [
    {
      id: 1,
      name: "Sarah Mitchell",
      status: "online",
      activeChats: 4,
      avgResponseTime: "45s",
      resolvedToday: 12,
      satisfaction: 4.9,
      shift: "8:00 AM - 5:00 PM",
      utilization: 85
    },
    {
      id: 2,
      name: "Mike Johnson", 
      status: "busy",
      activeChats: 6,
      avgResponseTime: "1.2m",
      resolvedToday: 15,
      satisfaction: 4.7,
      shift: "9:00 AM - 6:00 PM",
      utilization: 95
    },
    {
      id: 3,
      name: "Emma Davis",
      status: "online",
      activeChats: 3,
      avgResponseTime: "38s",
      resolvedToday: 10,
      satisfaction: 4.8,
      shift: "10:00 AM - 7:00 PM",
      utilization: 70
    },
    {
      id: 4,
      name: "John Wilson",
      status: "away",
      activeChats: 0,
      avgResponseTime: "2.1m",
      resolvedToday: 8,
      satisfaction: 4.5,
      shift: "8:00 AM - 5:00 PM",
      utilization: 60
    }
  ];

  const queueData = [
    {
      channel: "WhatsApp",
      icon: MessageSquare,
      color: "bg-green-500",
      waiting: 8,
      avgWait: "2.3m",
      priority: "normal"
    },
    {
      channel: "Email",
      icon: Mail, 
      color: "bg-gray-500",
      waiting: 12,
      avgWait: "15.2m",
      priority: "normal"
    },
    {
      channel: "Instagram",
      icon: Instagram,
      color: "bg-pink-500", 
      waiting: 3,
      avgWait: "5.1m",
      priority: "low"
    },
    {
      channel: "Website Chat",
      icon: MessageCircle,
      color: "bg-medical-primary",
      waiting: 6,
      avgWait: "1.8m", 
      priority: "high"
    },
    {
      channel: "Phone",
      icon: Phone,
      color: "bg-indigo-500",
      waiting: 2,
      avgWait: "45s",
      priority: "urgent"
    }
  ];

  const alerts = [
    {
      id: 1,
      type: "warning",
      message: "SLA breach risk: 3 conversations approaching 5-minute limit",
      time: "2 min ago",
      action: "Redistribute"
    },
    {
      id: 2,
      type: "info",
      message: "Agent John Wilson returned from break",
      time: "5 min ago",
      action: "Assign"
    },
    {
      id: 3,
      type: "critical",
      message: "Urgent patient case requires immediate attention",
      time: "8 min ago",
      action: "Escalate"
    }
  ];

  const channelMetrics = [
    { channel: "WhatsApp", volume: 156, avgResponse: "1.1m", satisfaction: 4.9 },
    { channel: "Email", volume: 98, avgResponse: "12.5m", satisfaction: 4.6 },
    { channel: "Website Chat", volume: 87, avgResponse: "45s", satisfaction: 4.8 },
    { channel: "Instagram", volume: 34, avgResponse: "3.2m", satisfaction: 4.7 },
    { channel: "Phone", volume: 23, avgResponse: "35s", satisfaction: 4.5 }
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
                <div className="w-10 h-10 bg-medical-warning rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Manager Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Real-time Operations Overview</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <div className="text-sm text-muted-foreground">
                {currentTime.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {kpiMetrics.map((kpi, index) => (
            <Card key={index} className="medical-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <kpi.icon className={`w-8 h-8 ${
                    kpi.status === 'excellent' ? 'text-medical-success' :
                    kpi.status === 'good' ? 'text-medical-primary' :
                    'text-medical-warning'
                  }`} />
                  <div className="flex items-center gap-1">
                    {kpi.change > 0 ? (
                      <TrendingUp className="w-4 h-4 text-medical-success" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-medical-critical" />
                    )}
                    <span className={`text-sm font-medium ${
                      kpi.change > 0 ? 'text-medical-success' : 'text-medical-critical'
                    }`}>
                      {kpi.change > 0 ? '+' : ''}{kpi.change}
                      {kpi.unit === '%' ? 'pp' : kpi.unit === 'min' ? 's' : ''}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{kpi.value}</span>
                    <span className="text-lg text-muted-foreground">{kpi.unit}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{kpi.label}</p>
                  <div className="flex items-center gap-2">
                    <Progress 
                      value={kpi.unit === '%' ? parseFloat(kpi.value) : 
                             (parseFloat(kpi.value) / kpi.target) * 100} 
                      className="flex-1 h-2"
                    />
                    <span className="text-xs text-muted-foreground">
                      Target: {kpi.target}{kpi.unit}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="agents">Team</TabsTrigger>
                <TabsTrigger value="queues">Queues</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Channel Performance */}
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Channel Performance
                    </CardTitle>
                    <CardDescription>Today's performance across all communication channels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {channelMetrics.map((channel, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-accent/20 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-medical-primary rounded-full"></div>
                            <span className="font-medium">{channel.channel}</span>
                          </div>
                          <div className="flex items-center gap-8 text-sm">
                            <div className="text-center">
                              <p className="text-muted-foreground">Volume</p>
                              <p className="font-semibold">{channel.volume}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-muted-foreground">Avg Response</p>
                              <p className="font-semibold">{channel.avgResponse}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-muted-foreground">Satisfaction</p>
                              <p className="font-semibold">{channel.satisfaction}/5</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Real-time Alerts */}
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Real-time Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {alerts.map((alert) => (
                        <div key={alert.id} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${
                              alert.type === 'critical' ? 'bg-medical-critical' :
                              alert.type === 'warning' ? 'bg-medical-warning' :
                              'bg-medical-primary'
                            }`}></div>
                            <div>
                              <p className="text-sm font-medium">{alert.message}</p>
                              <p className="text-xs text-muted-foreground">{alert.time}</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            {alert.action}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="agents" className="space-y-6">
                <Card className="medical-card">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Team Performance
                      </CardTitle>
                      <Button size="sm" variant="outline">
                        <Settings className="w-4 h-4 mr-2" />
                        Manage Team
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {agents.map((agent) => (
                        <div key={agent.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-medical-primary/10 rounded-full flex items-center justify-center">
                              <UserCheck className="w-6 h-6 text-medical-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{agent.name}</h3>
                              <p className="text-sm text-muted-foreground">{agent.shift}</p>
                              <div className="flex items-center gap-2 mt-1">
                                <div className={`status-indicator ${
                                  agent.status === 'online' ? 'status-online' :
                                  agent.status === 'busy' ? 'status-busy' :
                                  'status-away'
                                }`}></div>
                                <span className="text-xs capitalize">{agent.status}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-8 text-sm">
                            <div className="text-center">
                              <p className="text-muted-foreground">Active</p>
                              <p className="font-semibold">{agent.activeChats}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-muted-foreground">Avg Response</p>
                              <p className="font-semibold">{agent.avgResponseTime}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-muted-foreground">Resolved</p>
                              <p className="font-semibold">{agent.resolvedToday}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-muted-foreground">Rating</p>
                              <p className="font-semibold">{agent.satisfaction}/5</p>
                            </div>
                            <div className="text-center min-w-[80px]">
                              <p className="text-muted-foreground">Utilization</p>
                              <Progress value={agent.utilization} className="mt-1" />
                              <p className="text-xs mt-1">{agent.utilization}%</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="queues" className="space-y-6">
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Queue Management
                    </CardTitle>
                    <CardDescription>Monitor and manage conversation queues across all channels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {queueData.map((queue, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 ${queue.color} rounded-lg flex items-center justify-center`}>
                              <queue.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{queue.channel}</h3>
                              <Badge 
                                variant={queue.priority === 'urgent' ? 'destructive' : 
                                       queue.priority === 'high' ? 'secondary' : 'outline'}
                                className="text-xs mt-1"
                              >
                                {queue.priority} priority
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-8">
                            <div className="text-center">
                              <p className="text-2xl font-bold text-foreground">{queue.waiting}</p>
                              <p className="text-sm text-muted-foreground">Waiting</p>
                            </div>
                            <div className="text-center">
                              <p className="text-lg font-semibold text-foreground">{queue.avgWait}</p>
                              <p className="text-sm text-muted-foreground">Avg Wait</p>
                            </div>
                            <Button 
                              size="sm" 
                              variant={queue.waiting > 5 ? "destructive" : "outline"}
                            >
                              {queue.waiting > 5 ? "Redistribute" : "Monitor"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      Performance Analytics
                    </CardTitle>
                    <CardDescription>Detailed insights and trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Advanced analytics charts would be displayed here</p>
                        <p className="text-sm text-muted-foreground mt-2">Integration with chart libraries for detailed reporting</p>
                      </div>
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
                <Button className="w-full justify-start medical-gradient text-white">
                  <Zap className="w-4 h-4 mr-2" />
                  Auto-redistribute Queue
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Add Agent to Shift
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Create Alert Rule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  System Settings
                </Button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">WhatsApp API</span>
                  <div className="flex items-center gap-2">
                    <div className="status-indicator status-online"></div>
                    <span className="text-sm text-medical-success">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email Service</span>
                  <div className="flex items-center gap-2">
                    <div className="status-indicator status-online"></div>
                    <span className="text-sm text-medical-success">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <div className="flex items-center gap-2">
                    <div className="status-indicator status-online"></div>
                    <span className="text-sm text-medical-success">Operational</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">SMS Gateway</span>
                  <div className="flex items-center gap-2">
                    <div className="status-indicator status-away"></div>
                    <span className="text-sm text-medical-warning">Limited</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="medical-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medical-success rounded-full mt-2"></div>
                    <div>
                      <p>Agent Sarah Mitchell resolved 5 cases</p>
                      <p className="text-xs text-muted-foreground">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medical-warning rounded-full mt-2"></div>
                    <div>
                      <p>Queue alert triggered for Instagram</p>
                      <p className="text-xs text-muted-foreground">12 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medical-primary rounded-full mt-2"></div>
                    <div>
                      <p>New agent John Wilson started shift</p>
                      <p className="text-xs text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-medical-critical rounded-full mt-2"></div>
                    <div>
                      <p>SLA breach prevented by auto-routing</p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
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

export default ManagerDashboard;