const Category = require('../model/category.model');

exports.index = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({
            message: 'Success',
            data: categories
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

exports.show = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }
        res.status(200).json({
            message: 'Success',
            data: category
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

exports.store = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const savedCategory = await newCategory.save();
        res.status(201).json({
            message: 'Category created successfully',
            data: savedCategory
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

exports.update = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedTask) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        res.status(200).json({
            message: 'Category updated successfully',
            data: updatedCategory
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        });
    }
}

exports.destroy = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndUpdate(req.params.id);
        if (!deletedCategory) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }
        res.status(200).json({
            message: 'Category deleted successfully'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        })
    }
}