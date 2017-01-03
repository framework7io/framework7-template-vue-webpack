module.exports = {
	"prompts": {
		"name": {
			"type": "string",
			"required": true,
			"message": "Project name"
		},
		"description": {
			"type": "string",
			"required": false,
			"message": "Project Description",
			"default": "Webpack - Vue - Framework7 Template Project"
		},
		"author": {
			"type": "string",
			"message": "Author"
		}
	},
	"completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/nolimits4web/Framework7-Vue-Webpack-Template"
};