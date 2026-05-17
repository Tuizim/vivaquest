#!/usr/bin/env bash
# Execute este script uma única vez na VPS como root ou com sudo:
#   sudo bash setup-vps.sh

set -euo pipefail

APP_DIR="/var/www/vivaquest"
NGINX_CONF="/etc/nginx/sites-available/vivaquest"
NGINX_ENABLED="/etc/nginx/sites-enabled/vivaquest"

echo "==> Verificando Nginx..."
if ! command -v nginx &>/dev/null; then
  echo "    Instalando Nginx..."
  apt-get update -qq
  apt-get install -y nginx
else
  echo "    Nginx já instalado: $(nginx -v 2>&1)"
fi

echo "==> Criando diretório da aplicação: $APP_DIR"
mkdir -p "$APP_DIR"
chown -R www-data:www-data "$APP_DIR"
chmod -R 755 "$APP_DIR"

echo "==> Criando config do Nginx em $NGINX_CONF"
cat > "$NGINX_CONF" <<'EOF'
server {
    listen 80;
    server_name _;          # substitua pelo seu domínio se houver

    root /var/www/vivaquest;
    index index.html;

    # React Router — redireciona tudo para index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache longo para assets com hash no nome (Vite)
    location ~* \.(js|css|png|jpg|jpeg|svg|ico|webp|woff2|woff|ttf|webmanifest)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Não cachear o HTML principal
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
EOF

echo "==> Ativando site..."
ln -sf "$NGINX_CONF" "$NGINX_ENABLED"

# Remove o site default do Nginx para evitar conflito na porta 80
if [ -f /etc/nginx/sites-enabled/default ]; then
  rm /etc/nginx/sites-enabled/default
  echo "    Site 'default' desativado."
fi

echo "==> Testando configuração do Nginx..."
nginx -t

echo "==> Recarregando Nginx..."
systemctl reload nginx

echo ""
echo "Pronto! A VPS está configurada."
echo "Agora configure os secrets no GitHub e faça um push na branch main para disparar o primeiro deploy."
