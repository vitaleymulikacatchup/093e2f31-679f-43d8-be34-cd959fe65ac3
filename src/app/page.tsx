"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Utensils, ChefHat, Star, Award, Calendar, Heart, Users, MessageCircle, HelpCircle, BookOpen, Mail } from "lucide-react";

export default function RestaurantPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="medium"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "dishes" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Borsch & Beyond"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Authentic Ukrainian Cuisine"
          description="Experience the rich flavors and traditional recipes of Ukraine in our warm, welcoming restaurant. From classic borscht to homemade varenyky, every dish tells a story."
          tag="Welcome"
          tagIcon={Utensils}
          buttons={[
            { text: "View Menu", href: "dishes" },
            { text: "Book Table", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727398035-ct0pswyf.jpg"
          imageAlt="Traditional Ukrainian restaurant interior"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded by the Kovalenko family in 2018, Borsch & Beyond brings authentic Ukrainian flavors to your table. Our recipes have been passed down through generations, preserving the true taste of Ukraine.",
            "We source our ingredients from local Ukrainian suppliers and prepare everything fresh daily. Our mission is to share the warmth and hospitality of Ukrainian culture through exceptional food and service."
          ]}
          buttons={[
            { text: "Meet Our Team", href: "team" }
          ]}
          showBorder={false}
        />
      </div>

      <div id="dishes" data-section="dishes">
        <FeatureCardThree
          title="Traditional Dishes"
          description="Discover our signature Ukrainian specialties, prepared with authentic recipes and the finest ingredients"
          tag="Our Menu"
          tagIcon={ChefHat}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              id: "01",
              title: "Classic Borscht",
              description: "Traditional Ukrainian beet soup with beef, cabbage, and fresh dill, served with a dollop of sour cream",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727399555-drh30cxt.jpg",
              imageAlt: "Traditional Ukrainian borscht soup"
            },
            {
              id: "02",
              title: "Homemade Varenyky",
              description: "Hand-made dumplings filled with potato, cheese, or cherries, served with butter and onions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727401409-7aw32z9i.jpg",
              imageAlt: "Ukrainian varenyky dumplings"
            },
            {
              id: "03",
              title: "Chicken Kiev",
              description: "Tender chicken breast stuffed with herb butter, breaded and fried to golden perfection",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727402667-ctiu88lg.jpg",
              imageAlt: "Chicken Kiev cutlet"
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Featured Menu Items"
          description="Explore our most popular dishes, each prepared with traditional techniques and authentic ingredients"
          tag="Menu Highlights"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              name: "Ukrainian Bread Basket",
              price: "$8.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727403881-2ux6c9j7.jpg",
              imageAlt: "Traditional Ukrainian dark bread"
            },
            {
              id: "2",
              name: "Borscht Special",
              price: "$12.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727399555-drh30cxt.jpg",
              imageAlt: "Ukrainian borscht soup"
            },
            {
              id: "3",
              name: "Varenyky Platter",
              price: "$15.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727401409-7aw32z9i.jpg",
              imageAlt: "Ukrainian varenyky dumplings"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Achievements"
          description="Numbers that reflect our commitment to authentic Ukrainian cuisine and exceptional service"
          tag="Success Story"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              value: "6",
              title: "years",
              description: "Serving authentic Ukrainian cuisine",
              icon: Calendar
            },
            {
              id: "2",
              value: "50+",
              title: "dishes",
              description: "Traditional recipes on our menu",
              icon: ChefHat
            },
            {
              id: "3",
              value: "1000+",
              title: "families",
              description: "Have experienced our hospitality",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Chefs"
          description="Passionate culinary artists dedicated to bringing you authentic Ukrainian flavors"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Oksana Kovalenko",
              role: "Head Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727405531-nj400zzv.jpg",
              imageAlt: "Head Chef Oksana Kovalenko"
            },
            {
              id: "2",
              name: "Dimitro Petrenko",
              role: "Sous Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727406875-zfbftpei.jpg",
              imageAlt: "Sous Chef Dimitro Petrenko"
            },
            {
              id: "3",
              name: "Maria Shevchenko",
              role: "Pastry Chef",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727408061-s6hvu284.jpg",
              imageAlt: "Pastry Chef Maria Shevchenko"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Hear from customers who have experienced the authentic taste of Ukraine at our restaurant"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Emily Johnson",
              role: "Food Enthusiast",
              testimonial: "The borscht here is absolutely incredible! It tastes just like my Ukrainian grandmother used to make. The atmosphere is warm and welcoming.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727409240-5peh29wf.jpg",
              imageAlt: "Emily Johnson customer"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Local Resident",
              testimonial: "Best Ukrainian restaurant in the city! The varenyky are handmade and delicious. Staff is incredibly friendly and knowledgeable about the dishes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727410630-qg9y1i8v.jpg",
              imageAlt: "Michael Chen customer"
            },
            {
              id: "3",
              name: "Sarah Williams",
              role: "Travel Blogger",
              testimonial: "Authentic flavors and traditional preparation methods. This place brings the true spirit of Ukrainian cuisine. Highly recommended for anyone seeking genuine experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727411815-egm5l5nl.jpg",
              imageAlt: "Sarah Williams customer"
            },
            {
              id: "4",
              name: "David Rodriguez",
              role: "Business Owner",
              testimonial: "We've been coming here for family dinners for years. The consistency in quality and the warmth of service keeps us coming back. Feels like home.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727413227-6enx5u1e.jpg",
              imageAlt: "David Rodriguez customer"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Featured On"
          description="Proudly recognized by leading food platforms and review sites"
          tag="Recognition"
          tagIcon={Star}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727414475-sbwsj8mz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727416060-fad76y7y.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727417328-l8igjse1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727418202-jd1lku0d.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727419359-zuuygmk0.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727420547-lke5v1ir.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727421838-7earx7b0.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about dining at Borsch & Beyond"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do you offer vegetarian options?",
              content: "Yes! We have many vegetarian dishes including vegetarian borscht, cheese varenyky, stuffed peppers, and traditional salads. Our chefs can also modify many dishes to accommodate vegetarian preferences."
            },
            {
              id: "2",
              title: "Do you take reservations?",
              content: "Absolutely! We highly recommend making reservations, especially for weekend dinners and special occasions. You can book online through our website or call us directly."
            },
            {
              id: "3",
              title: "What are your hours of operation?",
              content: "We're open Tuesday through Sunday. Tuesday-Thursday: 4:00 PM - 9:00 PM, Friday-Saturday: 4:00 PM - 10:00 PM, Sunday: 2:00 PM - 8:00 PM. We're closed on Mondays."
            },
            {
              id: "4",
              title: "Do you offer catering services?",
              content: "Yes, we provide catering for special events, office parties, and family gatherings. We can customize menus based on your preferences and dietary requirements. Contact us for details and pricing."
            },
            {
              id: "5",
              title: "Are your dishes authentic Ukrainian recipes?",
              content: "All our recipes are traditional Ukrainian dishes passed down through the Kovalenko family for generations. We use authentic ingredients and traditional cooking methods to ensure genuine flavors."
            },
            {
              id: "6",
              title: "Do you accommodate food allergies?",
              content: "We take food allergies seriously and can accommodate most dietary restrictions. Please inform us of any allergies when making your reservation so our chefs can prepare suitable alternatives."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Stories"
          description="Discover the rich history and traditions behind Ukrainian cuisine"
          tag="Blog"
          tagIcon={BookOpen}
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "Culture",
              title: "The History of Ukrainian Borscht",
              excerpt: "Explore the fascinating origins of Ukraine's most famous soup and learn how different regions created their own unique variations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727422999-unwt41cg.jpg",
              imageAlt: "Ukrainian food culture and history",
              authorName: "Chef Oksana",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727424251-fjbww28m.jpg",
              date: "15 Dec 2024"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join Our Newsletter"
          description="Get updates on our seasonal menu, special events, and exclusive recipes delivered straight to your inbox"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy and will never share your information. Unsubscribe anytime."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763727425228-hw8ngo7t.jpg"
          imageAlt="Restaurant interior dining room"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Borsch & Beyond"
          columns={[
            {
              items: [
                { label: "Menu", href: "dishes" },
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Catering", href: "contact" },
                { label: "Events", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Reviews", href: "testimonials" },
                { label: "Blog", href: "blog" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}