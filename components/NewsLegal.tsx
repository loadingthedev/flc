"use client";
import Stripes from "@/public/images/stripes-dark.svg";
import Image from "next/image";
import { useState } from "react";
import {
  FaBrain,
  FaChartLine,
  FaLightbulb,
  FaNewspaper,
  FaRegClock,
} from "react-icons/fa";

const NewsAndInsights = () => {
  const [activeTab, setActiveTab] = useState("news");

  const newsData = [
    {
      id: 1,
      title: "Global Market Trends Show Promising Growth",
      description:
        "Recent analysis reveals unprecedented opportunities in emerging markets, with technology sector leading the charge.",
      date: "2024-01-15",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
      category: "Markets",
    },
    {
      id: 2,
      title: "Innovation Summit 2024 Highlights",
      description:
        "Leading tech giants unveil groundbreaking AI solutions at this year's premier innovation conference.",
      date: "2024-01-14",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      category: "Technology",
    },
    {
      id: 3,
      title: "Sustainable Business Practices on the Rise",
      description:
        "Companies worldwide are increasingly adopting eco-friendly initiatives to combat climate change.",
      date: "2024-01-13",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      category: "Sustainability",
    },
  ];

  const insightsData = [
    {
      id: 1,
      title: "Digital Transformation Trends 2024",
      description:
        "Expert analysis on upcoming digital transformation strategies and their impact on businesses.",
      author: "Dr. Sarah Chen",
      icon: <FaChartLine />,
      category: "Digital",
    },
    {
      id: 2,
      title: "Future of Work: AI Integration",
      description:
        "Insights on how artificial intelligence is reshaping workplace dynamics and productivity.",
      author: "Prof. Michael Roberts",
      icon: <FaBrain />,
      category: "AI",
    },
    {
      id: 3,
      title: "Investment Strategies for Q1 2024",
      description:
        "Key investment opportunities and risk management approaches for the upcoming quarter.",
      author: "Jane Thompson",
      icon: <FaLightbulb />,
      category: "Finance",
    },
  ];

  return (
    <div className="relative w-full   p-8 overflow-hidden  mb-10">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="mb-6 border-y text-3xl text-4xl font-bold  text-foreground  [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
            News and Legal Insights
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("news")}
              className={`flex items-center gap-2 px-6 py-3 rounded-none transition-all ${activeTab === "news" ? "bg-primary hover:bg-muted-foreground text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
            >
              <FaNewspaper />
              News
            </button>
            <button
              onClick={() => setActiveTab("insights")}
              className={`flex items-center gap-2 px-6 py-3 rounded-none transition-all ${activeTab === "insights" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
            >
              <FaLightbulb />
              Insights
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === "news"
            ? newsData.map((news) => (
                <div
                  key={news.id}
                  className="bg-card rounded-none shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-accent/20 text-accent px-3 py-1 rounded-none text-sm">
                        {news.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <FaRegClock className="mr-2" />
                        {new Date(news.date).toISOString().split("T")[0]}
                      </div>
                    </div>
                    <h3 className="text-xl font-heading text-foreground mb-3">
                      {news.title}
                    </h3>
                    <p className="text-body text-muted-foreground">
                      {news.description}
                    </p>
                  </div>
                </div>
              ))
            : insightsData.map((insight) => (
                <div
                  key={insight.id}
                  className="bg-card rounded-none shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl text-accent">{insight.icon}</div>
                    <span className="bg-accent/20 text-accent px-3 py-1 rounded-none text-sm">
                      {insight.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading text-foreground mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-4">
                    {insight.description}
                  </p>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <span>By {insight.author}</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[0] -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={Stripes}
          width={768}
          height={432}
          alt="Stripes"
        />
      </div>
    </div>
  );
};

export default NewsAndInsights;
