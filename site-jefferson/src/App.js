import React from 'react';
import './index.css';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-50 z-0"></div>
        <h1 className="text-6xl font-extrabold mb-4 z-10">Jefferson Hoy Valente</h1>
        <p className="text-2xl text-gray-200 font-light z-10">
          <Typewriter
            options={{
              strings: [
                'Site Reliability Engineer',
                'DevOps Engineer',
                'Platform Engineer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p className="mt-6 text-gray-300 text-lg font-medium z-10">
          Criando soluções escaláveis e confiáveis para sistemas de alta complexidade.
        </p>
        <a
          href="#sobre"
          className="mt-10 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all z-10"
        >
          Saiba Mais
        </a>
        <div className="mt-12 grid grid-cols-3 gap-8 z-10">
          {/* Card Kubernetes */}
          <div className="flex flex-col items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
              alt="Kubernetes"
              className="w-16 mb-4"
            />
            <p className="text-white text-sm font-medium">Kubernetes</p>
          </div>

          {/* Card Terraform */}
          <div className="flex flex-col items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-plain.svg"
              alt="Terraform"
              className="w-16 mb-4"
            />
            <p className="text-white text-sm font-medium">Terraform</p>
          </div>

          {/* Card Azure */}
          <div className="flex flex-col items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
              alt="Azure"
              className="w-16 mb-4"
            />
            <p className="text-white text-sm font-medium">Azure</p>
          </div>

          {/* Card GitHub */}
          <div className="flex flex-col items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-16 mb-4"
            />
            <p className="text-white text-sm font-medium">GitHub</p>
          </div>

          {/* Card Datadog */}
          <div className="flex flex-col items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg"
              alt="Datadog"
              className="w-16 mb-4"
            />
            <p className="text-white text-sm font-medium">Datadog</p>
          </div>

          {/* Card New Relic */}
          <div className="flex flex-col items-center bg-white bg-opacity-20 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <img
              src="https://newrelic.com/themes/custom/erno/assets/mediakit/new_relic_logo_horizontal.svg"
              alt="New Relic"
              className="w-16 mb-4"
            />
            <p className="text-white text-sm font-medium">New Relic</p>
          </div>
        </div>
      </header>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Sobre Mim</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sou especialista em SRE, DevOps e Engenharia de Plataformas, criando soluções escaláveis e resilientes para atender a desafios técnicos críticos. Tenho amplo conhecimento em automação de pipelines CI/CD, provisionamento de infraestrutura com Terraform, e governança de observabilidade usando ferramentas como New Relic e Datadog. Meu foco é transformar desafios técnicos em resultados concretos para o negócio.
          </p>
        </div>
      </section>

      {/* Experiência Profissional */}
      <section id="experiencia" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
            Experiência Profissional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600">
                DevOps Engineer - Platform Builders
              </h3>
              <p className="text-gray-600 mt-2">Abril de 2024 - Presente</p>
              <ul className="text-gray-600 mt-4 list-disc list-inside">
                <li>
                  Implementação de governança de métricas (SLA, SLI, SLO) com
                  New Relic e alertas automáticos.
                </li>
                <li>
                  Desenvolvimento de plataformas internas (IDP) com Backstage,
                  centralizando fluxos e ferramentas.
                </li>
                <li>
                  Provisionamento de infraestrutura com Terraform, garantindo
                  segurança e consistência.
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600">
                SRE - KXP
              </h3>
              <p className="text-gray-600 mt-2">Fevereiro de 2023 - Abril de 2024</p>
              <ul className="text-gray-600 mt-4 list-disc list-inside">
                <li>
                  Automatização de pipelines CI/CD com Azure DevOps e Jenkins.
                </li>
                <li>
                  Integrações de monitoramento com Datadog e Azure Monitor,
                  reduzindo o MTTR.
                </li>
                <li>
                  Gerenciamento de clusters Kubernetes com Rancher e AWX.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600">
                Plataforma Interna (IDP)
              </h3>
              <p className="text-gray-600 mt-4">
                Desenvolvi uma plataforma interna para desenvolvedores (IDP)
                usando Backstage, integrando ferramentas como Kubernetes, Argo,
                e New Relic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600">
                Governança de Observabilidade
              </h3>
              <p className="text-gray-600 mt-4">
                Implementei governança de métricas com Datadog e New Relic,
                reduzindo incidentes críticos e otimizando operações.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600">
                Ambientes de DataLake e DataFactory na Azure
              </h3>
              <p className="text-gray-600 mt-4">
                Criei ambientes para DataLake, DataFactory e Databricks usando Bicep na Azure, otimizando fluxos de dados e operações analíticas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600">
                Infraestrutura como Código (IaC)
              </h3>
              <p className="text-gray-600 mt-4">
                Desenvolvi e gerenciei infraestrutura utilizando Terraform e Bicep, garantindo práticas modernas de IaC para ambientes multicloud.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-blue-600">
                Migração de Workloads
              </h3>
              <p className="text-gray-600 mt-4">
                Planejei e executei a migração de workloads críticos para ambientes Kubernetes, garantindo alta disponibilidade e escalabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <footer id="contato" className="py-10 bg-gray-900 text-white text-center">
        <h3 className="text-2xl font-bold">Vamos nos conectar!</h3>
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/jefferson-hoy-valente/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jeffersonvalente"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="mailto:jeffersonvalente1988@gmail.com"
            className="text-blue-400 hover:text-blue-500"
          >
            E-mail
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
