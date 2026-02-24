import type { FileData, FileFormat, FormatHandler } from "../FormatHandler.ts";
import CommonFormats from "src/CommonFormats.ts";

class fnfcHandler implements FormatHandler {

  public name: string = "fnfc";
  public supportedFormats?: FileFormat[];
  public ready: boolean = false;

  async init () {
    this.supportedFormats = [
      CommonFormats.OGG.builder("ogg").allowFrom(true).allowTo(true),
      {
        name: "Friday Night Funkin' Chart (FNFC)",
        format: "fnfc",
        extension: "zip",
        mime: "application/zip",
        from: true,
        to: true,
        internal: "zip",
        category: ["archive"],
        lossless: false
      },
    ];
    this.ready = true;
  }

  async doConvert (
    inputFiles: FileData[],
    inputFormat: FileFormat,
    outputFormat: FileFormat
  ): Promise<FileData[]> {
    const outputFiles: FileData[] = [];
    return outputFiles;
  }

}

export default fnfcHandler;
