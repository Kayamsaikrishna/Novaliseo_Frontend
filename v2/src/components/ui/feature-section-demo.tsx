import { FeatureSteps } from "@/components/ui/feature-section";

const features = [
  { 
    step: 'Step 1', 
    title: 'Learn the Basics',
    content: 'Start your engineering journey by mastering the basics of physical robotics.', 
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80' 
  },
  { 
    step: 'Step 2',
    title: 'Deep Dive',
    content: 'Dive deep into non-linear control loops, ROS2, and embedded microcontrollers.',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
  },
  { 
    step: 'Step 3',
    title: 'Build Systems',
    content: 'Graduate with hands-on flight experience through building physical autonomous hardware.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  },
];

export function FeatureStepsDemo() {
  return (
    <FeatureSteps 
      features={features}
      title="Your Journey Starts Here"
      autoPlayInterval={4000}
      imageHeight="h-[450px]"
    />
  );
}

export default FeatureStepsDemo;
