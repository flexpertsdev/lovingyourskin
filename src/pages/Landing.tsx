import React, { useState } from 'react'
import { Container, Section, Grid } from '../components/layout'
import { Button, Input, Textarea, Card, CardContent } from '../components/ui'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '🚀',
    title: 'Fast Shipping',
    description: 'Direct from Korea to your store in days, not weeks'
  },
  {
    icon: '💰',
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprise shipping costs'
  },
  {
    icon: '📝',
    title: 'Simple Process',
    description: 'No complicated customs forms or language barriers'
  },
  {
    icon: '✅',
    title: 'Verified Brands',
    description: 'All brands CPNP certified for UK/EU/CH markets'
  }
]

export const Landing: React.FC = () => {
  const [userType, setUserType] = useState<'retailer' | 'brand' | 'other'>('retailer')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Handle form submission
    console.log('Form submitted:', { userType, ...formData })
  }
  
  return (
    <>
      {/* Hero Section */}
      <Section className="text-center bg-gradient-to-br from-soft-pink to-white">
        <Container>
          <h1 className="text-5xl md:text-6xl font-light text-deep-charcoal tracking-wide mb-6">
            Korean Beauty, Simplified
          </h1>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Connect with verified Korean beauty brands. No barriers, just beauty.
          </p>
          <Button size="large" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Request Invitation
          </Button>
        </Container>
      </Section>
      
      {/* Features Grid */}
      <Section>
        <Container>
          <Grid cols={4} gap="lg">
            {features.map((feature, index) => (
              <Card key={index} variant="default" className="text-center">
                <CardContent className="py-8">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-medium text-deep-charcoal mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
      
      {/* Contact Section */}
      <div id="contact">
        <Section background="gray">
        <Container size="sm">
          <h2 className="text-3xl md:text-4xl font-light text-center text-deep-charcoal mb-10">
            Get in Touch
          </h2>
          
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type */}
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    I am a...
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {(['retailer', 'brand', 'other'] as const).map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="userType"
                          value={type}
                          checked={userType === type}
                          onChange={(e) => setUserType(e.target.value as typeof userType)}
                          className="w-4 h-4 text-rose-gold focus:ring-rose-gold"
                        />
                        <span className="text-text-primary capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Name */}
                <Input
                  label="Name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                
                {/* Email */}
                <Input
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                
                {/* Message */}
                <Textarea
                  label="Message"
                  placeholder="Tell us about your business..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                
                {/* Submit Button */}
                <Button type="submit" size="large" fullWidth>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Container>
      </Section>
      </div>
    </>
  )
}