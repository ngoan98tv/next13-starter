import { appConfig } from "@/config/env";

type Params = { src: string; width: number; quality: number };

export default function customImageLoader({ src, width, quality }: Params) {
  if (src.startsWith("/_next/static") || src.startsWith("http")) {
    return src;
  }
  return `${appConfig.FILE_HOST}${src}?width=${width}&quality=${quality || 75}`;
}
