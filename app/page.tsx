import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ChevronRight, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">André Souza Nutrição</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-green-600">
              Services
            </Link>
            <Link href="#routines" className="text-sm font-medium transition-colors hover:text-green-600">
              Routines
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-green-600">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-green-600">
              Contact
            </Link>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700">Book Consultation</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Bem-vindo(a) à Consultoria André Souza
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Na nossa consultoria, você encontra uma abordagem personalizada e prática para acompanhamento
                  nutricional e bem-estar. São seis opções de planos, divididos em duas modalidades.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="Nutritionist consulting with client"
                  width={550}
                  height={550}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Nossos Serviços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Planos de Consultoria Nutricional</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Escolha o plano que melhor se adapta às suas necessidades e objetivos.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-12">
              {/* Webdiet Plan */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                    Modalidade 1
                  </div>
                  <h3 className="text-2xl font-bold">Acompanhamento via Webdiet</h3>
                  <p className="text-gray-500">Disponível de segunda a sexta (9h às 18h, apenas dias úteis).</p>

                  <div className="space-y-4 mt-6">
                    <h4 className="font-bold text-lg">Como funciona:</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li className="text-gray-700">
                        Preenchimento de uma anamnese para compreender suas limitações e adaptar seu plano alimentar à
                        sua rotina e realidade financeira.
                      </li>
                      <li className="text-gray-700">
                        Entrega do material em até 48 horas úteis, contendo:
                        <ul className="space-y-1 list-disc pl-5 mt-1">
                          <li className="text-gray-600">
                            Planilha alimentar com opções de substituição para cada refeição e lanches.
                          </li>
                          <li className="text-gray-600">Ficha com dicas para manter a dieta nos finais de semana.</li>
                          <li className="text-gray-600">Guia para os dias de refeição livre.</li>
                          <li className="text-gray-600">
                            Ficha de suplementação, com dosagens e explicações detalhadas.
                          </li>
                        </ul>
                      </li>
                      <li className="text-gray-700">
                        Acompanhamento via CHAT no aplicativo Webdiet, com coleta de feedbacks e esclarecimento de
                        dúvidas.
                      </li>
                      <li className="text-gray-700">
                        Avaliação e comparação de medidas uma vez por mês, com relatório de evolução física.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2 mt-6">
                    <h4 className="font-bold text-lg">Valores:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                      <Card className="border-2 border-green-100">
                        <CardContent className="p-4 text-center">
                          <h5 className="font-bold">Mensal</h5>
                          <p className="text-2xl font-bold text-green-600 my-2">R$144,00</p>
                          <p className="text-sm text-gray-500">à vista</p>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-green-100">
                        <CardContent className="p-4 text-center">
                          <h5 className="font-bold">Bimestral</h5>
                          <p className="text-2xl font-bold text-green-600 my-2">R$244,00</p>
                          <p className="text-sm text-gray-500">à vista</p>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-green-100">
                        <CardContent className="p-4 text-center">
                          <h5 className="font-bold">Trimestral</h5>
                          <p className="text-2xl font-bold text-green-600 my-2">R$353,00</p>
                          <p className="text-sm text-gray-500">à vista ou parcelado no cartão</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Acompanhamento via Webdiet"
                    width={600}
                    height={500}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* WhatsApp Plan */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start pt-12 border-t border-gray-200">
                <div className="order-2 lg:order-1">
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Acompanhamento Completo via WhatsApp"
                    width={600}
                    height={500}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4 order-1 lg:order-2">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                    Modalidade 2
                  </div>
                  <h3 className="text-2xl font-bold">Acompanhamento Completo via WhatsApp</h3>
                  <p className="text-gray-500">Atendimento diário, incluindo finais de semana (até 16h).</p>

                  <div className="space-y-4 mt-6">
                    <h4 className="font-bold text-lg">Como funciona:</h4>
                    <ul className="space-y-2 list-disc pl-5">
                      <li className="text-gray-700">
                        Preenchimento de um questionário pré-consulta com informações essenciais.
                      </li>
                      <li className="text-gray-700">
                        Agendamento da consulta por videochamada para aprofundar as suas necessidades.
                      </li>
                      <li className="text-gray-700">
                        Entrega do material em até 24 horas, contendo:
                        <ul className="space-y-1 list-disc pl-5 mt-1">
                          <li className="text-gray-600">
                            Planilha alimentar com opções de substituição para cada refeição.
                          </li>
                          <li className="text-gray-600">Ficha com dicas para manter a dieta nos finais de semana.</li>
                          <li className="text-gray-600">Guia para os dias de refeição livre.</li>
                          <li className="text-gray-600">Ficha de suplementação detalhada.</li>
                        </ul>
                      </li>
                      <li className="text-gray-700">
                        Consulta por videochamada a cada 15 dias para acompanhar seu progresso.
                      </li>
                      <li className="text-gray-700">
                        Suporte diário via WhatsApp para dúvidas, feedbacks e ajustes no plano.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2 mt-6">
                    <h4 className="font-bold text-lg">Valores:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                      <Card className="border-2 border-green-100">
                        <CardContent className="p-4 text-center">
                          <h5 className="font-bold">Mensal</h5>
                          <p className="text-2xl font-bold text-green-600 my-2">R$194,00</p>
                          <p className="text-sm text-gray-500">à vista</p>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-green-100">
                        <CardContent className="p-4 text-center">
                          <h5 className="font-bold">Bimestral</h5>
                          <p className="text-2xl font-bold text-green-600 my-2">R$294,00</p>
                          <p className="text-sm text-gray-500">à vista</p>
                        </CardContent>
                      </Card>
                      <Card className="border-2 border-green-100">
                        <CardContent className="p-4 text-center">
                          <h5 className="font-bold">Trimestral</h5>
                          <p className="text-2xl font-bold text-green-600 my-2">R$482,00</p>
                          <p className="text-sm text-gray-500">à vista ou parcelado no cartão</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Routines Section */}
        <section id="routines" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Fitness & Nutrition
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Workout & Training Routines</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Science-backed exercise programs designed to complement your nutrition plan.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-12">
              {/* Workout Routine */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4 order-2 lg:order-1">
                  <h3 className="text-2xl font-bold">Weekly Workout Schedule</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold">Monday: Upper Body Strength</h4>
                      <p className="text-gray-500">Focus on chest, shoulders, and triceps with compound movements.</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold">Tuesday: Cardio & Core</h4>
                      <p className="text-gray-500">
                        High-intensity interval training combined with core strengthening exercises.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold">Wednesday: Rest & Recovery</h4>
                      <p className="text-gray-500">Light stretching and mobility work to promote recovery.</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold">Thursday: Lower Body Focus</h4>
                      <p className="text-gray-500">
                        Targeting quads, hamstrings, and glutes for strength and stability.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold">Friday: Full Body Circuit</h4>
                      <p className="text-gray-500">Comprehensive workout engaging all major muscle groups.</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold">Weekend: Active Recovery</h4>
                      <p className="text-gray-500">
                        Light activities like walking, swimming, or yoga to stay active while recovering.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href="/workout-details" className="text-green-600 font-medium inline-flex items-center">
                      View detailed workout plans <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Person exercising"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* Nutrition Plan */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Healthy meal preparation"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Nutrition Planning</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold">Meal Timing</h4>
                      <p className="text-gray-500">
                        Strategic meal scheduling to optimize energy levels and nutrient absorption.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold">Macro Distribution</h4>
                      <p className="text-gray-500">
                        Balanced intake of proteins, carbohydrates, and fats tailored to your activity level.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold">Hydration Strategy</h4>
                      <p className="text-gray-500">
                        Personalized hydration plans to support metabolism and overall health.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-bold">Supplement Recommendations</h4>
                      <p className="text-gray-500">
                        Evidence-based supplement suggestions to address specific nutritional needs.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href="/nutrition-details" className="text-green-600 font-medium inline-flex items-center">
                      Explore nutrition plans <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Real results from real people who transformed their health with our guidance.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {/* Testimonial 1 */}
              <Card className="border-2 border-green-100">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Client portrait"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500">Lost 30 lbs in 6 months</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600">
                    "The personalized meal plans and workout routines completely transformed my relationship with food
                    and exercise. I've never felt healthier or more energetic!"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="border-2 border-green-100">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Client portrait"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Michael Rodriguez</h4>
                      <p className="text-sm text-gray-500">Gained muscle, improved performance</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600">
                    "As an athlete, I needed a nutrition plan that supported my training. The customized approach helped
                    me increase my strength while maintaining optimal energy levels."
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="border-2 border-green-100">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Client portrait"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Jennifer Lee</h4>
                      <p className="text-sm text-gray-500">Managed chronic condition</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600">
                    "After being diagnosed with an autoimmune condition, I needed to completely revamp my diet. The
                    guidance I received was life-changing and helped me manage my symptoms naturally."
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700">
                    Get In Touch
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                  <p className="text-gray-500 md:text-xl">
                    Have questions or ready to start your health journey? Reach out to us today.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-500">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500">info@nutrilife.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Office</h3>
                      <p className="text-gray-500">123 Wellness Street, Healthy City, HC 12345</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-gray-500 hover:text-green-600">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-green-600">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-green-600">
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tell us what you're looking for..."
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-green-600" />
            <span className="text-lg font-bold">André Souza Nutrição</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} André Souza Nutrição. Todos os direitos reservados.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-green-600">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-green-600">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-green-600">
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
