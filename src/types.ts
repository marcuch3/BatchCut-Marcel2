export interface WorkItem {
  id: string;
  title: string;
  category: string;
  metrics: string;
  growthFactor: string;
  duration: string;
  views: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  aspectRatio: "portrait" | "landscape";
  tags: string[];
}

export interface MachineStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  iconName: string;
  detailedDescription: string;
  badge: string;
}

export interface ToolStackItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  status: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  stats: string;
}
