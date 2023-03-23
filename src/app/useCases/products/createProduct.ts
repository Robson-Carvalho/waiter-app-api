import { Request, Response } from "express";

import { Product } from "../../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category, ingredients } = req.body;
    const imagePath = req.file?.filename;

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients),
      imagePath,
    });

    res.status(201).json(product);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};
