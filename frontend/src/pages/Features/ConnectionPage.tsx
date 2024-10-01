//@ts-nocheck

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Send, Users, ArrowLeft } from "lucide-react";
import { io, Socket } from "socket.io-client";
import { Header } from "@/base components/Header";

export function ConnectionPage() {
  const [forumMessages, setForumMessages] = useState([
    {
      id: 1,
      sender: "John Doe",
      text: "Hello everyone! Any AI enthusiasts here?",
    },
    {
      id: 2,
      sender: "Jane Smith",
      text: "Hi John! I'm working on a machine learning project.",
    },
  ]);
  const [oneToOneMessages, setOneToOneMessages] = useState({});
  const [currentMessage, setCurrentMessage] = useState("");
  const [activeChat, setActiveChat] = useState("forum");
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3001"); // Adjust the URL to match your backend
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to server");
    });

    newSocket.on("forumMessage", (message) => {
      setForumMessages((prevMessages) => [...prevMessages, message]);
    });

    newSocket.on("privateMessage", (senderId, message) => {
      setOneToOneMessages((prev) => ({
        ...prev,
        [senderId]: [...(prev[senderId] || []), message],
      }));
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const connections = [
    {
      id: 1,
      name: "Ravi Sharma",
      role: "AI Researcher",
      location: "Bangalore, India",
    },
    {
      id: 2,
      name: "Ananya Gupta",
      role: "Data Scientist",
      location: "Mumbai, India",
    },
    {
      id: 3,
      name: "Aarav Desai",
      role: "Software Engineer",
      location: "Hyderabad, India",
    }

  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage.trim() && socket) {
      const message = { id: Date.now(), sender: "You", text: currentMessage };
      if (activeChat === "forum") {
        socket.emit("forumMessage", message);
        setForumMessages((prevMessages) => [...prevMessages, message]);
      } else {
        socket.emit("privateMessage", { recipientId: activeChat, message });
        setOneToOneMessages((prev) => ({
          ...prev,
          [activeChat]: [...(prev[activeChat] || []), message],
        }));
      }
      setCurrentMessage("");
    }
  };

  const handleConnect = (id: number, name: string) => {
    setActiveChat(id.toString());
    if (!oneToOneMessages[id] && socket) {
      const initialMessage = {
        id: Date.now(),
        sender: name,
        text: `Hello! I'm ${name}. How can I help you?`,
      };
      socket.emit("privateMessage", {
        recipientId: id.toString(),
        message: initialMessage,
      });
      setOneToOneMessages((prev) => ({
        ...prev,
        [id]: [initialMessage],
      }));
    }
  };

  const handleReturnToForum = () => {
    setActiveChat("forum");
  };

  return (
    <>
      <Header />
      <div className="mx-auto p-16 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Forum and One-to-One Chat */}
          <Card className="h-[600px] flex flex-col bg-slate-100 dark:bg-slate-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>
                {activeChat === "forum"
                  ? "Forum Chat"
                  : `Chat with ${connections.find((c) => c.id.toString() === activeChat)
                    ?.name
                  }`}
              </CardTitle>
              {activeChat !== "forum" && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleReturnToForum}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Return to Forum
                </Button>
              )}
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <ScrollArea className="flex-grow mb-4">
                {(activeChat === "forum"
                  ? forumMessages
                  : oneToOneMessages[activeChat] || []
                ).map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-2 ${msg.sender === "You" ? "text-right" : ""
                      }`}
                  >
                    <span className="font-bold">{msg.sender}: </span>
                    <span>{msg.text}</span>
                  </div>
                ))}
              </ScrollArea>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow bg-background p-2"
                />
                <Button type="submit">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Connections */}
          <Card className="h-[600px]">
            <CardHeader>
              <CardTitle>Alumni Connections</CardTitle>
              <CardDescription>
                Connect with alumni for one-to-one chats
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="connected">Connected</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <ScrollArea className="h-[400px]">
                    {connections.map((connection) => (
                      <Card key={connection.id} className="mb-4">
                        <CardHeader>
                          <CardTitle>{connection.name}</CardTitle>
                          <CardDescription>
                            {connection.role} | {connection.location}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button
                            onClick={() =>
                              handleConnect(connection.id, connection.name)
                            }
                          >
                            {oneToOneMessages[connection.id]
                              ? "Continue Chat"
                              : "Connect"}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </ScrollArea>
                </TabsContent>
                <TabsContent value="connected">
                  <ScrollArea className="h-[400px]">
                    {connections
                      .filter((c) => oneToOneMessages[c.id])
                      .map((connection) => (
                        <Card key={connection.id} className="mb-4">
                          <CardHeader>
                            <CardTitle>{connection.name}</CardTitle>
                            <CardDescription>
                              {connection.role} | {connection.location}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button
                              onClick={() =>
                                handleConnect(connection.id, connection.name)
                              }
                            >
                              Continue Chat
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
