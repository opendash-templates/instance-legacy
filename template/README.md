# open.DASH {{ opendash-template-name }} Instanz

Maintainer: {{ opendash-template-maintainer-name }} ({{ opendash-template-maintainer-email }})

## Was muss man machen?

Der Code muss kompiliert werden, dazu müssen die folgenden Schritte durchgeführt werden. Der Source Code befindet sich dann im `dist` Ordner.

* Repo klonen: `git clone https://github.com/xxx/opendash-instance-{{ opendash-template-name }}.git`
* In den Ordner wechseln: `cd opendash-instance-{{ opendash-template-name }}`
* Dependencies installieren: `npm install`
* Code einmalig kompilieren: `npm run build`
* Code "watchen" und kompilieren: `npm run watch` (Es wird ein Web Server gestartet)

