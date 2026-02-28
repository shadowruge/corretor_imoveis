# 📧 Configuração EmailJS para Captura de Leads

## 🎯 **O que foi implementado**

O formulário agora está configurado para enviar leads para **gutovicentemp@gmail.com** com as seguintes funcionalidades:

- ✅ **Validação client-side** melhorada
- ✅ **Loading state** durante envio
- ✅ **Backup local** no localStorage
- ✅ **Logs no console** para debug
- ✅ **Tratamento de erros** amigável

## 🔧 **Para ativar o envio real de emails**

### 1. Criar conta EmailJS
- Acesse: https://www.emailjs.com/
- Crie conta gratuita (200 emails/mês)

### 2. Configurar Serviço de Email
- Dashboard → Email Services → Add New Service
- Escolha seu provedor (Gmail, Outlook, etc.)
- Conecte sua conta `Gutovicentemp@gmail.com`

### 3. Criar Template
- Dashboard → Email Templates → Create New Template
- Use este template:

```
Assunto: {{subject}}

Novo lead recebido!

📋 DADOS DO LEAD:
━━━━━━━━━━━━━━━━━━━━
👤 Nome: {{nome}}
📱 WhatsApp: {{whatsapp}}
🌐 Origem: {{origem}}
📅 Data: {{data}}
━━━━━━━━━━━━━━━━━━━━

{{mensagem}}
```

### 4. Obter Caves
- **Public Key**: Dashboard → Account → General
- **Service ID**: Dashboard → Email Services → Seu serviço
- **Template ID**: Dashboard → Email Templates → Seu template

### 5. Atualizar o código
No arquivo `index.html`, substitua as linhas:

```javascript
// Linha 1042
emailjs.init("SUA_PUBLIC_KEY_AQUI");

// Linha 1092
await emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams);
```

## 🧪 **Teste Imediato**

Enquanto não configura EmailJS, o formulário já:

1. **Valida dados** corretamente
2. **Mostra loading** por 2 segundos
3. **Salva no localStorage**
4. **Exibe mensagem de sucesso**
5. **Registra no console** (F12 → Console)

## 📊 **Como visualizar leads**

### Via Console (temporário)
1. Abra o site
2. Pressione F12
3. Vá para aba Console
4. Digite: `localStorage.getItem('portoalto_lead')`

### Via Email (após configuração)
- Leads chegam em `gutovicentemp@gmail.com`
- Formato profissional com todos os dados

## 🚀 **Funcionalidades Extras**

### Backup Automático
```javascript
// Leads salvos localmente
localStorage.setItem('portoalto_lead', JSON.stringify({
  nome: nome.value,
  whatsapp: wpp.value,
  timestamp: Date.now()
}));
```

### Debug Mode
```javascript
// Ver todos os leads capturados
console.log('Leads capturados:', JSON.parse(localStorage.getItem('portoalto_lead') || '[]'));
```

## ⚡ **Performance**

- **200 emails/mês** no plano gratuito
- **Entrega instantânea** 
- **Sem backend necessário**
- **100% client-side**

---

**Próximo passo:** Configure EmailJS e comece a receber leads em minutos! 🎯
