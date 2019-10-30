
# Atualiza a imagem com os pacotes
RUN apt-get update
# Instala o NGINX para testar
#RUN apt-get install nginx -y
# Expoe a porta 33
EXPOSE 3333
# Comando para iniciar o NGINX no Container
#CMD ["nginx", "-g", "daemon off;"]
