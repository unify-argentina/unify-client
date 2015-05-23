# Como armar el ambiente de desarrollo #

## Instalación de NodeJs y npm ##

* Instalar NVM (Node Version Manager)

```
#!bash

"curl https://raw.githubusercontent.com/creationix/nvm/v0.18.0/install.sh | bash"
```

* Agregar la siguiente linea al ~/.bashrc

```
#!bash

export NVM_DIR="~/.nvm" 
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # Esto carga el nvm
PATH=$NVM_DIR/current/bin:$PATH

source ~/.nvm/nvm.sh
```

* Instalar la versión 0.10 (es la que uso yo porque se que la 0.11 tiene problemas con ciertas dependencias)

```
#!bash

nvm install 0.10
```

## Instalación de grunt y bower ##

```
#!bash

npm install -g grunt-cli
npm install -g bower
```

### Configuración del proyecto ###
## Descargar código de git ##
Sobre la carpeta en la cual se va a instalar el workspace:

git clone https://Sihke@bitbucket.org/unifyargentina/unifycliente.git

## Instalación de dependencias ##
Desde la ruta principal del proyecto correr:

```
#!bash

npm install && bower install
```


## Instalación de compass (Para compilar Sass) - Requiere ruby ##
## Instalación de RVM (Ruby Version Manager) ##

```
#!bash

curl -sSL https://get.rvm.io | bash -s stable
```

## Instalación de ruby ##


```
#!bash

export PATH="$PATH:$HOME/.rvm/bin" # Add RVM to PATH for scripting
source $HOME/.rvm/scripts/rvm
```

(Reemplazar $HOME por la ruta de la carpeta home del usuario)


```
#!bash

rvm install ruby
```

## Instalación de compass ##


```
#!bash

gem install compass
```

## Ejecución de la aplicación ##
La aplicación puede ejecutarse de 2 formas: En un browser o en node-webkit.

Para ejecutar la aplicación en un browser:


```
#!bash

grunt serve
```

Para ejecutar la aplicación en node-webkit:

```
#!bash

grunt run-linux
```

ó

```
#!bash

grunt run-linux32
```