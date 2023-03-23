import { Request, Response } from "express";

import { Product } from "../../models/Product";

export const createProduct = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.sendStatus(500);
    console.log(error);
  }
};
