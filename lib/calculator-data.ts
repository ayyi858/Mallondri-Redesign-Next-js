export type ServiceOption = {
  id: string;
  name: string;
  pricePerUnit: number;
  unit: "kg" | "pcs" | "m2" | "pasang" | "order";
  unitLabel: string;
};

export const CALC_SERVICES: ServiceOption[] = [
  { id: "regular", name: "Regular", pricePerUnit: 5000, unit: "kg", unitLabel: "kg" },
  { id: "express", name: "Express", pricePerUnit: 8000, unit: "kg", unitLabel: "kg" },
  { id: "setrika", name: "Setrika", pricePerUnit: 7000, unit: "kg", unitLabel: "kg" },
  { id: "dryclean", name: "Dry Cleaning", pricePerUnit: 15000, unit: "pcs", unitLabel: "pcs" },
  { id: "helm", name: "Helm", pricePerUnit: 15000, unit: "pcs", unitLabel: "pcs" },
  { id: "selimut", name: "Selimut", pricePerUnit: 25000, unit: "pcs", unitLabel: "pcs" },
  { id: "karpet", name: "Karpet", pricePerUnit: 50000, unit: "m2", unitLabel: "m²" },
  { id: "sepatu", name: "Sepatu", pricePerUnit: 20000, unit: "pasang", unitLabel: "pasang" },
  { id: "boneka", name: "Boneka", pricePerUnit: 12000, unit: "pcs", unitLabel: "pcs" },
  { id: "gorden", name: "Gorden", pricePerUnit: 8000, unit: "kg", unitLabel: "kg" },
];

export const ADDONS = [
  { id: "parfum", name: "Parfum", price: 3000, per: "kg" },
  { id: "packaging", name: "Packaging", price: 5000, per: "order" },
];
