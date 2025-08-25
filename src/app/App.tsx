import React from 'react';
import { ArrowRight, MapPin, Zap, Brain, Settings, Truck, Route, Clock, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-background font-inter">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">RouteGuard</span>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Features
              </Button>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Pricing
              </Button>
              <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                Contact
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float opacity-60" />
          <div className="absolute top-40 right-32 w-64 h-64 bg-primary-glow/8 rounded-full blur-2xl animate-pulse opacity-50" />
          <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float opacity-40" />
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
              Smart Vehicle Route 
              <span className="text-primary block">Clearance System</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Advanced routing system with AI-powered predictions, real-time updates, and comprehensive 
              vehicle clearance management for optimal transportation efficiency.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Start Routing <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Route Management
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage vehicle clearances and optimize routes efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Vehicle Aware Routing */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Route className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Vehicle Aware Routing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Intelligent routing that considers vehicle dimensions, weight, and clearance requirements for safe passage.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Real-time Updates */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">Real-time Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Live traffic data, road conditions, and clearance status updates to keep your routes optimized.
                </CardDescription>
              </CardContent>
            </Card>

            {/* AI Powered Predictions */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Brain className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">AI Powered Predictions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Machine learning algorithms predict optimal routes and potential clearance issues before they occur.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Admin Dashboard */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Admin Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  Comprehensive management interface for monitoring, analytics, and system configuration.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Vehicle-Aware Intelligent Routing
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our advanced routing engine takes into account your vehicle's specific dimensions, 
                weight restrictions, and clearance requirements to ensure safe and efficient passage.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Height, width, and weight constraints</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Route className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Multi-modal route optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Real-time route adjustments</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="bg-background/80 rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Route Status</span>
                  <span className="text-sm font-medium text-green-600">Optimized</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground">Distance</span>
                    <span className="font-medium">284 km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Estimated Time</span>
                    <span className="font-medium">3h 42m</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground">Clearance Status</span>
                    <span className="font-medium text-green-600">Approved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="bg-background/80 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">AI Predictions</span>
                    <span className="text-sm font-medium text-blue-600">Active</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-foreground">Traffic Forecast</span>
                      <span className="font-medium text-orange-600">Moderate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Weather Impact</span>
                      <span className="font-medium text-green-600">Low</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground">Delay Probability</span>
                      <span className="font-medium">12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                AI-Powered Predictive Analytics
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Leverage machine learning to predict traffic patterns, weather impacts, and potential 
                route disruptions before they happen, ensuring optimal delivery times.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Brain className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Predictive traffic analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Performance optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Automated adjustments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Optimize Your Routes?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of fleet managers who trust RouteGuard for their vehicle clearance and routing needs.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Truck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">RouteGuard</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 RouteGuard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;