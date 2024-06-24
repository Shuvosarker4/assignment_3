export type TCarModel = {
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  features: string[];
  pricePerHour: number;
  status?: "available" | "not available";
  isDeleted?: boolean;
};
