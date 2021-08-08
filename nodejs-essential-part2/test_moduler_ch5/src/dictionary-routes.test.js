const express = require("express");
const request = require("supertest");
const { save } = require("./lib");
const dictionaryRoutes = require("./dictionary-routes");

jest.mock("./lib", () => ({
    save: jest.fn()
}));

jest.mock("../data/skiTerms.json", () => [
    {
        term: "aaa", defined: "testaaa"
    },
    {
        term: "bbb", defined: "testbbb"
    },
    {
        term: "ccc", defined: "testccc"
    }

]);

const app = express();

app.use("/dictionary", dictionaryRoutes);

describe("dictionary-routes", () => {
    it("GET /dictionary - success", async() => {
        const { body } = await request(app).get("/dictionary");
        expect(body).toEqual(
        [{
            term: "aaa", defined: "testaaa"
        },
        {
            term: "bbb", defined: "testbbb"
        },
        {
            term: "ccc", defined: "testccc"
        }]);
    });

////============Testing Delete method
    it("DELETE /dictionary/bbb - success", async() => {
        const { body } = await request(app).delete("/dictionary/bbb");
        expect(body).toEqual({
            status: "success",
            removed: "bbb",
            newLength: 2
        });
        expect(save).toHaveBeenCalledWith([{
            term: "aaa", defined: "testaaa"
        },
        {
            term: "ccc", defined: "testccc"
        }]);
    });
});