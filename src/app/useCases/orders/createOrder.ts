import { Request, Response } from "express";

import { Order } from "../../models/Order";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { table, products } = req.body;

    if (!table) {
      return res.status(400).json({
        error: "Table is required",
      });
    }

    const order = await Order.create({ table, products });
    res.status(201).json(order);
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};
