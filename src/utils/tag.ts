import { TaskTag } from "../graphql";

const tagFontColors = {
   [TaskTag.Ios]: "var(--color-secondary-4)",
   [TaskTag.React]: "#2f61bf",
   [TaskTag.Rails]: "var(--color-primary-4)",
   [TaskTag.NodeJs]: "var(--color-neutral-1)",
   [TaskTag.Android]: "var(--color-tertiary-4)",
};

const tagBackgroundColors = {
   [TaskTag.Ios]: "#70b25219",
   [TaskTag.React]: "#2f61bf19",
   [TaskTag.Rails]: "#da584b19",
   [TaskTag.NodeJs]: "#94979a19",
   [TaskTag.Android]: "#70b25219",
};

export function getTagFontColor(taskTag: TaskTag): string {
   return tagFontColors[taskTag];
}

export function getTagBackgroundColor(tag: TaskTag): string {
   return tagBackgroundColors[tag];
}
