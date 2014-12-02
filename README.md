# Simple Development Server

Ideal for local single page applications development

## Description

When you develop client-side applications, you can be hit by few problems. For example, if you visit the app from a `file://` URL, browsers will prohibit access resources.

This HTTP server will serve files from your current directory in order to get around browser restrictions. `index.html` will be served at `http://localhost:8080/`, and other files will be served if you just add their name to the end of that URL.

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
$ node ./node_modules/.bin/node-dev-server
```

Server is started on port 8080.

# License

MIT
