import "dotenv/config";
import request from "supertest";
import { describe, test, expect } from "vitest";
import { app } from "../app";

describe("Task router E2E", () => {
  describe("Create task", () => {
    test("Throws an error if req body is undefined", async () => {
      const response = await request(app).post("/task");

      expect(response.status).toBe(400);
      expect(response.body.formErrors).toBeDefined();
      expect(response.body.formErrors[0]).toBe("Invalid input: expected object, received undefined");
    });

    test("Throws an error if a field is undefined", async () => {
      const response = await request(app).post("/task").set("Accept", "application/json").send({});

      expect(response.status).toBe(400);
      expect(response.body.fieldErrors).toBeDefined();

      expect(response.body.fieldErrors.title).toBeDefined();
      expect(response.body.fieldErrors.title[0]).toBe("Invalid input: expected string, received undefined");

      expect(response.body.fieldErrors.description).toBeDefined();
      expect(response.body.fieldErrors.description[0]).toBe("Invalid input: expected string, received undefined");
    });

    test("Throws an error if title is too small", async () => {
      const response = await request(app).post("/task").set("Accept", "application/json").send({
        title: "",
        description: "",
      });

      expect(response.status).toBe(400);
      expect(response.body.fieldErrors.title[0]).toBe("Too small: expected string to have >=3 characters");
    });

    test("Throws an error if title is too big", async () => {
      const response = await request(app).post("/task").set("Accept", "application/json").send({
        title: "Lorem ipsum dolor sit amet, consectetur porta ante.",
        description: "",
      });

      expect(response.status).toBe(400);
      expect(response.body.fieldErrors.title[0]).toBe("Too big: expected string to have <=50 characters");
    });

    test("Creates a new task with ID and date", async () => {
      const response = await request(app).post("/task").set("Accept", "application/json").send({
        title: "Task 01",
        description: "task test",
      });

      expect(response.status).toBe(201);

      expect(response.body).toMatchObject({
        success: true,
        task: {
          id: expect.any(String),
          title: "Task 01",
          description: "task test",
          createdAt: expect.any(String),
        },
      });
    });
  });
});
