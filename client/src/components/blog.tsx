import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const blogData = [
  {
    title: "Building Scalable ML Pipelines with Python and Docker",
    category: "Machine Learning",
    categoryColor: "bg-primary text-primary-foreground",
    date: "Dec 15, 2023",
    excerpt: "Learn how to create production-ready machine learning pipelines that can handle millions of requests while maintaining high accuracy and low latency...",
    readTime: "8 min read",
    url: "#",
  },
  {
    title: "The Future of React: Server Components and Beyond",
    category: "Web Development",
    categoryColor: "bg-green-500 text-white",
    date: "Dec 8, 2023",
    excerpt: "Exploring the latest React innovations and how they're changing the way we build modern web applications with improved performance and developer experience...",
    readTime: "6 min read",
    url: "#",
  },
  {
    title: "Kubernetes Best Practices for Startup Scale",
    category: "DevOps",
    categoryColor: "bg-purple-500 text-white",
    date: "Nov 28, 2023",
    excerpt: "A practical guide to implementing Kubernetes in startup environments, covering cost optimization, security, and scalability considerations...",
    readTime: "10 min read",
    url: "#",
  },
];

export default function Blog() {
  const handleBlogClick = (title: string) => {
    trackEvent('blog_article_click', 'engagement', title);
  };

  const handleViewAllClick = () => {
    trackEvent('blog_view_all_click', 'engagement', 'blog_section');
  };

  return (
    <section id="blogs" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
          <p className="text-xl text-muted-foreground">Thoughts on technology, development, and innovation</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogData.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Badge className={`text-sm font-medium ${blog.categoryColor}`}>
                      {blog.category}
                    </Badge>
                    <span className="text-muted-foreground text-sm ml-auto">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight flex-grow-0">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <Button 
                      variant="ghost"
                      className="text-primary font-semibold hover:bg-primary/10 p-0"
                      onClick={() => handleBlogClick(blog.title)}
                    >
                      Read More
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                    <span className="text-muted-foreground text-sm">{blog.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button 
            className="bg-primary text-primary-foreground px-8 py-3 text-base font-semibold hover:bg-primary/90 transition-all shadow-lg"
            onClick={handleViewAllClick}
            size="lg"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
