const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
	try {
		return await res.render('index', {
			title: 'Movie Data',
			name: 'Maria D. Campbell',
			message: 'Get Movie Data',
		})
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error)
	}
})
 
module.exports = router

