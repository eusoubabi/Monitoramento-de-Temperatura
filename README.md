# 🌡️ Monitoramento de Temperatura em Tempo Real com Arduino e WebSocket

![GitHub repo size](https://img.shields.io/github/repo-size/eusoubabi/Monitoramento-de-Temperatura?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/eusoubabi/Monitoramento-de-Temperatura?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/eusoubabi/Monitoramento-de-Temperatura?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/eusoubabi/Monitoramento-de-Temperatura?style=for-the-badge)

<img src="imagem.png" alt="Imagem do projeto em funcionamento">

> Projeto desenvolvido como atividade prática da disciplina de **Sistemas Digitais para Computadores**, com o objetivo de monitorar temperatura em tempo real com Arduino. Foi o primeiro contato com Arduino para alguns integrantes do grupo, inclusive para mim.

### ✅ Ajustes e melhorias

O projeto foi finalizado com as seguintes funcionalidades:

- [x] Leitura de temperatura com sensor DS18B20
- [x] Comunicação via porta serial
- [x] Backend com Node.js usando `serialport` e `ws`
- [x] Atualização em tempo real via WebSocket
- [x] Frontend em tela cheia com mensagens dinâmicas por cor

## 💻 Pré-requisitos

Antes de começar, você vai precisar:

- Arduino IDE instalado
- Node.js (v22 ou compatível)
- Bibliotecas instaladas: `serialport`, `ws`
- Um sistema operacional como Windows (testado em Windows)

## 🚀 Instalando o projeto

Clone o repositório e instale as dependências:

```bash
npm install
````

## ☕ Usando o o projeto

- [x] Carregue o código Arduino no seu dispositivo (via IDE);
- [x] Execute o backend com:

```bash
node server.js
```
- [x] Acesse o frontend via navegador:

```browser
http://localhost:8080
```

## 📋 Funcionamento

-Sensor DS18B20 lê a temperatura e envia via serial;

-Node.js recebe, interpreta e repassa via WebSocket;

-Frontend exibe temperatura e altera a mensagem conforme a leitura:

🔵 Abaixo de 30°C: azul — "Temperatura abaixo do ideal."

🟢 Até 37.5°C: verde — "Temperatura normal. Tudo está bem."

🔴 Acima de 37.5°C: vermelho — "Alerta! Temperatura elevada (febre)."
      
## 🔧 Melhorias Implementadas

- [x] Aumentamos a frequência de leitura do sensor reduzindo o delay no loop do Arduino;

- [x] Alteramos a resolução do sensor para 9 bits para melhorar o tempo de resposta;

- [x] Layout fullscreen na página HTML para melhor visualização;

## 🤝 Colaboradores
  🔸Maria Luiza Monteiro
  🔸Julio Sergio
  🔸Mairon Araújo Monteiro
  🔸Gustavo Levi
  🔸Caio Vinicius
  🔸Victor Gabriel Repolho

## 📝 Licença

Este projeto foi feito para fins acadêmicos e não possui uma licença específica.
