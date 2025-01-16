import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div>
      {/* Header */}
      <header className="relative text-white h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Fundo Animado */}
        <Particles
          className="absolute inset-0 z-0"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 100 },
              size: { value: 3 },
              move: { enable: true, speed: 2 },
              line_linked: { enable: true, color: '#ffffff' },
            },
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-800 opacity-80 z-0"></div>

        {/* Foto Pessoal */}
        <motion.img
          src="./foto.jfif"
          alt="Jefferson Hoy Valente"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg z-10 hover:scale-110 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Nome e Descrição */}
        <h1 className="text-5xl font-extrabold z-10 mt-6">Jefferson Hoy Valente</h1>
        <p className="text-2xl text-gray-200 font-light mt-4 z-10">
          <Typewriter
            options={{
              strings: ['Site Reliability Engineer', 'DevOps Engineer', 'Platform Engineer'],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p className="text-gray-300 text-lg font-medium mt-4 z-10">
          Criando soluções escaláveis e confiáveis para sistemas de alta complexidade.
        </p>

        {/* Botão de Call to Action */}
        <a
          href="#sobre"
          className="mt-10 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 hover:scale-105 transition-all z-10"
        >
          Saiba Mais
        </a>

        {/* Ícones de Contato */}
        <div className="flex mt-8 gap-6 z-10">
          <a
            href="https://www.linkedin.com/in/jefferson-hoy-valente/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/jeffersonvalente"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-gray-400 transition-transform transform hover:scale-110"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="mailto:jeffersonvalente1988@gmail.com"
            className="text-red-400 hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </header>

      {/* Sobre Mim */}
      <section id="sobre" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Sobre Mim</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sou especialista em SRE, DevOps e Engenharia de Plataformas, criando soluções escaláveis e resilientes para
            atender a desafios técnicos críticos. Tenho amplo conhecimento em automação de pipelines CI/CD,
            provisionamento de infraestrutura com Terraform, e governança de observabilidade usando ferramentas como New
            Relic e Datadog. Meu foco é transformar desafios técnicos em resultados concretos para o negócio.
          </p>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-blue-600">Plataforma Interna (IDP)</h3>
              <p className="text-gray-600 mt-4">
                Desenvolvi uma plataforma interna para desenvolvedores (IDP)
                usando Backstage, integrando ferramentas como Kubernetes, Argo,
                e New Relic.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-blue-600">Governança de Observabilidade</h3>
              <p className="text-gray-600 mt-4">
                Implementei governança de métricas com Datadog e New Relic,
                reduzindo incidentes críticos e otimizando operações.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-blue-600">Migração de Workloads</h3>
              <p className="text-gray-600 mt-4">
                Planejei e executei a migração de workloads críticos para ambientes Kubernetes, garantindo alta
                disponibilidade e escalabilidade.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-blue-600">Ambientes de DataLake e DataFactory na Azure</h3>
              <p className="text-gray-600 mt-4">
                Criei ambientes para DataLake, DataFactory e Databricks usando Bicep na Azure, otimizando fluxos de dados e operações analíticas.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold text-blue-600">Infraestrutura como Código (IaC)</h3>
              <p className="text-gray-600 mt-4">
                Desenvolvi e gerenciei infraestrutura utilizando Terraform e Bicep, garantindo práticas modernas de IaC para ambientes multicloud.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <footer id="contato" className="py-10 bg-gray-900 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Vamos nos conectar!</h3>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/jefferson-hoy-valente/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/jeffersonvalente"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-gray-400 transition-transform transform hover:scale-110"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="mailto:jeffersonvalente1988@gmail.com"
            className="text-red-400 hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <FaEnvelope size={40} />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Jefferson Hoy Valente. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
