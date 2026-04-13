"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
  LogOut,
  Image as ImageIcon,
  FileText,
  Settings,
  Users,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const sections = [
    {
      title: "Portfolio Projects",
      icon: ImageIcon,
      description: "Manage your gallery and projects",
    },
    {
      title: "About & Bio",
      icon: FileText,
      description: "Update your personal information",
    },
    {
      title: "Testimonials",
      icon: Users,
      description: "Manage client reviews",
    },
    {
      title: "Site Settings",
      icon: Settings,
      description: "General configuration",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-16 pb-8 border-b border-white/5">
          <div>
            <h1 className="font-serif text-3xl text-white mb-2">Dashboard</h1>
            <p className="text-neutral-500 text-sm">Welcome back, Harsh.</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors border border-white/10 rounded-full hover:bg-white/5"
          >
            <LogOut size={16} />
            Logout
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-neutral-900/50 border border-white/5 rounded-sm hover:border-white/20 transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 mb-6 group-hover:text-white group-hover:bg-white/10 transition-all">
                <section.icon size={20} />
              </div>
              <h3 className="text-white font-medium mb-2">{section.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-neutral-900/30 border border-white/5 rounded-sm">
          <h2 className="text-xl font-serif text-white mb-4">
            Recent Activity
          </h2>
          <p className="text-neutral-500 text-sm">No recent changes.</p>
        </div>
      </div>
    </div>
  );
}
