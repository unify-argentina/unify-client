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