import { Types } from "mongoose";

export type TBookingModel = {
  date: Date;
  user: Types.ObjectId;
  car: Types.ObjectId;
  startTime: string;
  totalCost?: number;
  endTime?: string;
  isDeleted?: boolean;
};
