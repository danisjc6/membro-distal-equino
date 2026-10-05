# Membro Equino Ensino

Aplicação web interativa para estudo da anatomia, patologias e diagnóstico por imagem do membro torácico distal equino.

## Visão geral

Este projeto foi desenvolvido como uma plataforma didática para apoiar o ensino e a aprendizagem em anatomia veterinária, com foco em:

- anatomia aplicada do membro torácico distal
- patologias equinas mais relevantes
- modalidades de diagnóstico por imagem
- conteúdo visual e organizado para uso didático

## Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Docker + Nginx

## Requisitos

- Node.js 22+
- npm
- Docker (opcional, para execução em container)

## Instalação local

```bash
npm install
npm run dev
```

A aplicação ficará disponível em:

```bash
http://localhost:8443
```

## Build de produção

```bash
npm run build
```

## Execução com Docker

### Build da imagem

```bash
docker build -t membro-equino-app .
```

### Executar o container

```bash
docker run --rm -p 8080:80 membro-equino-app
```

A aplicação estará disponível em:

```bash
http://localhost:8080
```

## Execução com Docker Compose

```bash
docker compose up --build
```

A aplicação estará disponível em:

```bash
http://localhost:8080
```

## Estrutura do projeto

```text
.
├── src/
│   ├── App.tsx
│   ├── data/
│   ├── assets/
│   └── main.tsx
├── public/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .dockerignore
├── package.json
├── vite.config.ts
├── tsconfig.json
├── README.md
└── .gitignore
```

## Deploy

A aplicação foi estruturada para rodar em container, facilitando o deploy em ambientes como:

- Docker em qualquer servidor
- Azure Container Apps
- Azure App Service
- Kubernetes / ambientes de produção em containers

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua funcionalidade
3. Faça suas alterações
4. Abra um pull request com descrição clara das mudanças

## Licença

Este projeto é destinado ao uso acadêmico e educacional.
# membro-distal-equino
