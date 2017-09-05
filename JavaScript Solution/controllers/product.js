const Product = require('../models/Product');

module.exports = {
	index: (req, res) => {
        Product.find().then(products => {
            res.render('product/index', {'entries': products});
        })
    	},
	createGet: (req, res) => {
        res.render('product/create');
},
	createPost: (req, res) => {
        let productEntity = req.body;

        Product.create(productEntity).then(products => {
            res.redirect("/");
        })
	},
	editGet: (req, res) => {
        let productId = req.params.id;

        Product.findById(productId).then(products => {
            res.render('product/edit', products);
        });
	},
	editPost: (req, res) => {
        let productId = req.params.id;
        let productEntity = req.body;

        Product.findByIdAndUpdate(productId,productEntity).then(products => {
        	res.redirect('/');
		});
	}
};