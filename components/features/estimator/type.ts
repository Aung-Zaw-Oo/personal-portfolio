export type ProjectType = "webapp" | "ecommerce" | "landing" | "custom";

export interface ProjectOption {
  id: ProjectType;
  label: string;
  multiplier: number;
}

export interface RangeValue {
  label: string;
  duration: string;
  multiplier: number;
}
