import { TemplateSpec } from "types/template"

export const specConverter = (spec: TemplateSpec): string => {
    return `${spec.maxcpu} core, RAM ${spec.maxmem/1073741824} GiB, Disk ${spec.maxdisk/1073741824} GiB`
  }