# Simple Development Server

Ideal for local single page applications development

## Description

Then you develop client-side applications, you can be hit by few problems: browser prohibit access resources, if app is started from `file://...` or some client routing problems.

Entry point of application is `index.html` and you want to serve it from `http://localhost:8080`.

It's very similar to [SimpleHTTPServer](http://www.linuxjournal.com/content/tech-tip-really-simple-http-server-python), but more suitable if you don't want to stick to Python environment and use Node.js instead.

## Usage

Assuming your application structure is something like,

	+- public
		| - components
		| - js
		| - css
	+ - index.html

You run npm install

```bash
$ npm install node-dev-server
```

Run it,

```bash
$ node ./node_modules/bin/.node-dev-server
```

# License

MIT