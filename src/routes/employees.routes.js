import { Router } from "express";
import { getEmployess, createEmployees, updateEmployees, deleteEmployess, getEmployee } from "../controllers/employees.controllers.js";

const router = Router();

router.get("/employees", getEmployess);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployees);

router.patch("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployess);

export default router;
