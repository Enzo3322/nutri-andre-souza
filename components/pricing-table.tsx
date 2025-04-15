import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  title: string;
  price: number;
  discountPercentage?: number;
  description: string;
  features: PlanFeature[];
  buttonText: string;
  highlighted?: boolean;
  tag?: string;
}

const plans1: PricingPlan[] = [
  {
    title: "Mensal",
    price: 144,
    description: "Ideal para quem quer começar sua jornada nutricional.",
    tag: "Mensal",
    features: [
      { text: "Acompanhamento nutricional" },
      { text: "Material completo" },
      { text: "Atendimento em dias úteis" },
      { text: "Suporte via chat" },
      { text: "4 avaliações de acompanhamento" },
    ],
    buttonText: "Escolher Plano",
  },
  {
    title: "Bimestral",
    price: 288,
    discountPercentage: 10,
    description: "Nossa opção mais popular para resultados consistentes.",
    tag: "Bimestral",
    highlighted: true,
    features: [
      { text: `Economia de ${((288 - 259.2) / 288 * 100).toFixed(2)}%` },
      { text: "Todos os benefícios do plano Mensal" },
      { text: "Fichas de suplementação com dosagens e explicações detalhadas" },
      { text: "Ajustes quinzenais no plano" },
      { text: "8 avaliações de acompanhamento" },
    ],
    buttonText: "Escolher Plano",
  },
  {
    title: "Trimestral",
    price: 432,
    discountPercentage: 15,
    description: "Compromisso com sua saúde a longo prazo.",
    tag: "Trimestral",
    features: [
      { text: `Economia de ${((432 - 367.2) / 432 * 100).toFixed(2)}%` },
      { text: "Todos os benefícios do plano Bimestral" },
      { text: "Pdfs exclusivos com dicas para os finais de semana" },
      { text: "12 avaliações de acompanhamento" },
    ],
    buttonText: "Escolher Plano",
  },
];

const plans2: PricingPlan[] = [
  {
    title: "Mensal",
    price: 194,
    description: "Ideal para quem quer começar sua jornada nutricional.",
    tag: "Mensal",
    features: [
      { text: "Acompanhamento nutricional" },
      { text: "Material completo" },
      { text: "Atendimento completo via WhatsApp" },
      { text: "4 avaliações por mês" },
      { text: "Coleta de feedbacks e esclarecimento de dúvidas por vídeochamada" },
    ],
    buttonText: "Escolher Plano",
  },
  {
    title: "Bimestral",
    price: 388,
    discountPercentage: 10,
    description: "Nossa opção mais popular para resultados consistentes.",
    tag: "Bimestral",
    highlighted: true,
    features: [
      { text: `Economia de ${((194 - 174.6) / 194 * 100).toFixed(2)}%` },
      { text: "Todos os benefícios do plano Mensal" },
      { text: "Ajustes de dieta de acordo com sua necessidade e progresso" },
      { text: "8 avaliações de acompanhamento" },
    ],
    buttonText: "Escolher Plano",
  },
  {
    title: "Trimestral",
    price: 582,
    discountPercentage: 15,
    description: "Compromisso com sua saúde a longo prazo.",
    tag: "Trimestral",
    features: [
      { text: `Economia de ${((582 - 494.7) / 582 * 100).toFixed(2)}%` },
      { text: "Todos os benefícios do plano Bimestral" },
      { text: "12 avaliações de acompanhamento" },
    ],
    buttonText: "Escolher Plano",
  },
];



const plans = [plans1, plans2];

export default function Pricing({ planIndex = 0 }: { planIndex: number }) {
  return (
    <div className="py-8">
      <div className="grid grid-cols-3 gap-6">
        {plans[planIndex].map((plan, index) => (
          <Card
            key={index}
            className={`w-full ${plan.highlighted
              ? "border-2 border-[#bba058] shadow-lg"
              : "border border-gray-200"
              }`}
          >
            {plan.tag && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${plan.highlighted ? "bg-[#bba058] text-white" : "bg-gray-100 text-gray-700"
                  }`}>
                  {plan.tag}
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.title}</CardTitle>
              <div className="flex items-baseline mt-2">
                {
                  plan.discountPercentage ? (
                    <div className="flex flex-col">
                      <p className="text-sm text-gray-500 ml-2 line-through">{plan.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                      <p className="text-3xl font-bold">
                        {(plan.price - (plan.price * plan.discountPercentage / 100)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-baseline">
                      <p className="text-3xl font-bold">
                        {plan.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </p>
                    </div>
                  )
                }
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-[#bba058] shrink-0 mr-2" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${plan.highlighted ? "bg-[#bba058] hover:bg-[#a08a48]" : "bg-gray-600 hover:bg-gray-700"}`}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 