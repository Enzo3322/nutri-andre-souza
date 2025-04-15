import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, ChevronRight, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"
import Pricing from "@/components/pricing-table"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
            <Image src="/logo-nav.png" alt="Logo" width={60} height={60} />
            <span className="text-xl font-bold">André Souza </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-gray-600">
              Serviços
            </Link>
            <Link href="#routines" className="text-sm font-medium transition-colors hover:text-gray-600">
              Rotinas
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-gray-600">
              Depoimentos
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-gray-600">
              Contato
            </Link>
          </nav>
          <Button className="bg-[#bba058]">Agendar Avaliação</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
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
                  <Button className="bg-[#bba058] hover:bg-gray-700">Começar</Button>
                  <Button variant="outline">Saiba Mais</Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/logo-full.png"
                  alt="Nutricionista consultando com cliente"
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
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
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
              <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-start">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
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

                  <div className="mt-8">
                    <h4 className="font-bold text-lg mb-4">Planos disponíveis:</h4>
                    <Pricing planIndex={0} />
                  </div>
                </div>
              </div>

              {/* WhatsApp Plan */}
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start pt-12 border-t border-gray-200">
                <div className="space-y-4 order-1 lg:order-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
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


                </div>

              </div>
              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">Planos disponíveis:</h4>
                <Pricing planIndex={1} />
              </div>
            </div>
          </div>
        </section>

        {/* Routines Section */}
        {/* <section id="routines" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
                  Fitness & Nutrição
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Rotinas de Treino & Exercícios</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Programas de exercícios com base científica projetados para complementar seu plano nutricional.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-12">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4 order-2 lg:order-1">
                  <h3 className="text-2xl font-bold">Cronograma Semanal de Treinos</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h4 className="font-bold">Segunda-feira: Força de Parte Superior</h4>
                      <p className="text-gray-500">Foco em peito, ombros e tríceps com movimentos compostos.</p>
                    </div>
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h4 className="font-bold">Terça-feira: Cardio & Core</h4>
                      <p className="text-gray-500">
                        Treinamento intervalado de alta intensidade combinado com exercícios de fortalecimento do core.
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h4 className="font-bold">Quarta-feira: Descanso & Recuperação</h4>
                      <p className="text-gray-500">Alongamento leve e trabalho de mobilidade para promover a recuperação.</p>
                    </div>
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h4 className="font-bold">Quinta-feira: Foco na Parte Inferior</h4>
                      <p className="text-gray-500">
                        Direcionado a quadríceps, isquiotibiais e glúteos para força e estabilidade.
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h4 className="font-bold">Sexta-feira: Circuito de Corpo Inteiro</h4>
                      <p className="text-gray-500">Treino abrangente envolvendo todos os principais grupos musculares.</p>
                    </div>
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h4 className="font-bold">Fim de semana: Recuperação Ativa</h4>
                      <p className="text-gray-500">
                        Atividades leves como caminhada, natação ou yoga para manter-se ativo enquanto recupera.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href="/workout-details" className="text-gray-600 font-medium inline-flex items-center">
                      Ver planos de treino detalhados <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Pessoa se exercitando"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Preparação de refeição saudável"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Planejamento Nutricional</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h4 className="font-bold">Horário das Refeições</h4>
                      <p className="text-gray-500">
                        Programação estratégica de refeições para otimizar os níveis de energia e absorção de nutrientes.
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h4 className="font-bold">Distribuição de Macronutrientes</h4>
                      <p className="text-gray-500">
                        Ingestão balanceada de proteínas, carboidratos e gorduras adaptada ao seu nível de atividade.
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h4 className="font-bold">Estratégia de Hidratação</h4>
                      <p className="text-gray-500">
                        Planos de hidratação personalizados para apoiar o metabolismo e a saúde geral.
                      </p>
                    </div>
                    <div className="border-l-4 border-gray-600 pl-4">
                      <h4 className="font-bold">Recomendações de Suplementos</h4>
                      <p className="text-gray-500">
                        Sugestões de suplementos baseadas em evidências para atender necessidades nutricionais específicas.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Link href="/nutrition-details" className="text-gray-600 font-medium inline-flex items-center">
                      Explorar planos nutricionais <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
                  Histórias de Sucesso
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O Que Nossos Clientes Dizem</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Resultados reais de pessoas reais que transformaram sua saúde com nossa orientação.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {/* Testimonial 1 */}
              <Card className="border-2 border-gray-100">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Retrato do cliente"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Sarah Johnson</h4>
                      <p className="text-sm text-gray-500">Perdeu 14 kg em 6 meses</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600">
                    "Os planos de refeições personalizados e rotinas de treino transformaram completamente minha relação com a comida
                    e exercícios. Nunca me senti mais saudável ou com mais energia!"
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
              <Card className="border-2 border-gray-100">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Retrato do cliente"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Michael Rodriguez</h4>
                      <p className="text-sm text-gray-500">Ganhou músculo, melhorou performance</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600">
                    "Como atleta, eu precisava de um plano nutricional que apoiasse meu treinamento. A abordagem personalizada me ajudou
                    a aumentar minha força enquanto mantinha níveis ótimos de energia."
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
              <Card className="border-2 border-gray-100">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Retrato do cliente"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Jennifer Lee</h4>
                      <p className="text-sm text-gray-500">Controlou condição crônica</p>
                    </div>
                  </div>
                  <p className="italic text-gray-600">
                    "Depois de ser diagnosticada com uma condição autoimune, precisei reformular completamente minha dieta. A
                    orientação que recebi mudou minha vida e me ajudou a controlar meus sintomas naturalmente."
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
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700">
                    Entre em Contato
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fale Conosco</h2>
                  <p className="text-gray-500 md:text-xl">
                    Tem dúvidas ou está pronto para iniciar sua jornada de saúde? Entre em contato conosco hoje.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Telefone</h3>
                      <p className="text-gray-500">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500">info@nutrilife.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Escritório</h3>
                      <p className="text-gray-500">Rua do Bem-Estar, 123, Cidade Saudável, CS 12345</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold mb-2">Siga-nos</h3>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-gray-500 hover:text-gray-600">
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-600">
                      <Facebook className="h-6 w-6" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-600">
                      <Twitter className="h-6 w-6" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Envie-nos uma Mensagem</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          Nome
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="João"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Sobrenome
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Silva"
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
                        placeholder="joao.silva@exemplo.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Assunto
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Como podemos ajudar?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensagem
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Diga-nos o que você está procurando..."
                      />
                    </div>
                    <Button className="w-full bg-gray-600 hover:bg-gray-700">Enviar Mensagem</Button>
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
            <Heart className="h-6 w-6 text-gray-600" />
            <span className="text-lg font-bold">André Souza </span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} André Souza. Todos os direitos reservados.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-gray-600">
              Termos
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-gray-600">
              Privacidade
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-gray-600">
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
