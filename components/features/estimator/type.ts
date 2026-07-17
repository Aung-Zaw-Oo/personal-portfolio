export type ProjectType = "frontend" | "backend" | "fullstack" | "custom";

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
