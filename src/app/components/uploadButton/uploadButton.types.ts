import { ReactNode } from "react";

export interface UploadButtonProps {
  children: ReactNode;
}

export type FileContentType = ArrayBuffer | string | null