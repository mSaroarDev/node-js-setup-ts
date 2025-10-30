import { RequestHandler } from "express";
import catchAsync from "../../utils/asyncCatch";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createTest: RequestHandler = catchAsync(
  async (req, res) => {
    const result = {};

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Test created successfully",
      data: result,
    })
  }
);

const TestControllers = {
  createTest
};

export default TestControllers;