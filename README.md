# Integração EmailJS - Formulário Jusclick

Para garantir que os formulários de análise de risco enviem notificações corretamente, finalizamos a integração utilizando a REST API do EmailJS.

## 1. Funcionamento do envio
No momento em que a usuária acessa o formulário de risco (AssessmentForm) e clica em **"Analisar minha situação"**, duas coisas acontecem simultaneamente:
1. O texto da recomendação é gerado instantaneamente na tela da usuária (como um pop-up de alerta).
2. De forma invisível e paralela (fire-and-forget), o formulário empacota os dados da usuária e dispara uma requisição POST direta para os servidores do `EmailJS`, direcionando as informações em formato de e-mail para administradores/terapeutas.

**Regra do modo Anônimo:** Se o usuário marcar a opção "Não quero me identificar", ao invés dos envios habituais de dados sensíveis (Nome, CPF, etc), o sistema empacota exatamente o rótulo **"Usuário Anônimo"** no campo de identificação dentro do email.

## 2. Variáveis de Ambiente
As referências de projeto do EmailJS não devem ficar estáticas no código por segurança, portanto, foram isoladas num arquivo `.env` na raiz do site:
```env
VITE_EMAILJS_SERVICE_ID=service_5wuf9no
VITE_EMAILJS_TEMPLATE_ID=template_kpy7qz8
VITE_EMAILJS_PUBLIC_KEY=COLOQUE_SUA_PUBLIC_KEY_AQUI
```
**Importante:** Você precisa entrar na sua conta do EmailJS (Dashboard > Account > API keys) para copiar a sua `Public Key` real e substituir no arquivo `.env` para os envios funcionarem.

## 3. Modelo do Template no EmailJS
Na plataforma do EmailJS, onde você gerencia o modelo `template_kpy7qz8`, modifique o conteúdo (Design / Content) do seu email para seguir esta estrutura abaixo, inserindo as variáveis dinâmicas com as chaves duplas `{{}}`:

**Assunto (Subject):** Novo Alerta de Violência - Jusclick

**Corpo do Email (Body):**
```text
Um novo formulário de avaliação de risco foi preenchido através do botão Analisar Minha Situação.

=== DADOS DE IDENTIFICAÇÃO ===
{{identificacao}}

=== DESCRIÇÃO DA SITUAÇÃO ===
{{situacao}}

=== RECOMENDAÇÃO GERADA PARA A USUÁRIA ===
{{recomendacao}}
```

**Módulo Pronto!**
Você não precisa se preocupar com pacotes lentos e bloqueios do sistema como `@emailjs/browser` — a nossa implementação utiliza envios via API nativa segura (Fetch). O disparo já está totalmente acoplado ao código, basta acertar qual a `Public Key` no `.env` e as variaveis no seu Template do EmailJS.
