# Deploy — Guia de Configuração

O CI/CD usa **GitHub Actions + rsync over SSH**. A cada push na branch `main`, o workflow faz o build e sincroniza a pasta `dist/` com a VPS via rsync.

---

## 1. Secrets necessários no GitHub

Acesse **Settings → Secrets and variables → Actions → New repository secret** e cadastre:

| Secret            | Descrição                                              | Exemplo              |
|-------------------|--------------------------------------------------------|----------------------|
| `SSH_HOST`        | IP ou hostname da VPS                                  | `203.0.113.42`       |
| `SSH_USER`        | Usuário SSH na VPS                                     | `deploy`             |
| `SSH_PRIVATE_KEY` | Chave privada SSH (conteúdo completo do arquivo `.pem` ou `id_ed25519`) | `-----BEGIN OPENSSH...` |
| `SSH_PORT`        | Porta SSH da VPS (omitir usa 22 como padrão)           | `22`                 |

---

## 2. Gerar e autorizar a chave SSH

### 2.1 Gerar o par de chaves (na sua máquina local)

```bash
ssh-keygen -t ed25519 -C "github-actions-vivaquest" -f ~/.ssh/vivaquest_deploy
```

Isso gera dois arquivos:
- `~/.ssh/vivaquest_deploy` — **chave privada** (vai para o secret `SSH_PRIVATE_KEY`)
- `~/.ssh/vivaquest_deploy.pub` — **chave pública** (vai para a VPS)

### 2.2 Autorizar a chave pública na VPS

```bash
# Copie o conteúdo da chave pública
cat ~/.ssh/vivaquest_deploy.pub

# Na VPS, adicione ao arquivo authorized_keys do usuário SSH
ssh SEU_USUARIO@SUA_VPS "mkdir -p ~/.ssh && chmod 700 ~/.ssh"
ssh SEU_USUARIO@SUA_VPS "echo 'COLE_AQUI_A_CHAVE_PUBLICA' >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
```

Ou use `ssh-copy-id`:

```bash
ssh-copy-id -i ~/.ssh/vivaquest_deploy.pub SEU_USUARIO@SUA_VPS
```

### 2.3 Cadastrar a chave privada no GitHub

Copie o conteúdo completo da chave privada (incluindo as linhas `-----BEGIN` e `-----END`):

```bash
cat ~/.ssh/vivaquest_deploy
```

Cole esse conteúdo no secret `SSH_PRIVATE_KEY`.

### 2.4 Testar a conexão SSH

```bash
ssh -i ~/.ssh/vivaquest_deploy -p 22 SEU_USUARIO@SUA_VPS "echo OK"
```

---

## 3. Configurar a VPS (primeira vez)

Execute o script de setup **uma única vez** na VPS:

```bash
# Copie o script para a VPS
scp scripts/setup-vps.sh SEU_USUARIO@SUA_VPS:~/

# Execute na VPS como root ou com sudo
ssh SEU_USUARIO@SUA_VPS "sudo bash ~/setup-vps.sh"
```

O script irá:
- Instalar o Nginx (se não estiver instalado)
- Criar a pasta `/var/www/vivaquest/` com as permissões corretas
- Criar e ativar o virtual host do Nginx com `try_files` para o React Router
- Desativar o site `default` do Nginx
- Recarregar o Nginx

---

## 4. Primeiro deploy

Após configurar os secrets e rodar o `setup-vps.sh`, faça um push na branch `main`:

```bash
git push origin main
```

Acompanhe em **Actions** no GitHub. O workflow irá:
1. Instalar dependências (`npm ci`)
2. Fazer o build (`npm run build`)
3. Sincronizar `dist/` → `/var/www/vivaquest/` via rsync (com `--delete` para remover arquivos obsoletos)

---

## 5. Ajustar o destino do rsync

O caminho `/var/www/vivaquest/` está definido diretamente em [.github/workflows/deploy.yml](../.github/workflows/deploy.yml) (última linha do step `Deploy via rsync`). Edite conforme necessário.

---

## 6. Domínio e HTTPS (opcional)

Para usar um domínio e HTTPS com Let's Encrypt:

```bash
# Na VPS, instale o Certbot
sudo apt install certbot python3-certbot-nginx

# Substitua "example.com" pelo seu domínio
sudo certbot --nginx -d example.com

# Edite o server_name no config do Nginx
sudo nano /etc/nginx/sites-available/vivaquest
# Troque: server_name _;
# Por:     server_name example.com www.example.com;

sudo systemctl reload nginx
```
