const dueDateFontColor = {
   due: "var(--color-neutral-1)",
   almost: "var(--color-tertiary-4)",
   overdue: "var(--color-primary-4)",
};

const dueDateBackgroundColor = {
   due: "#94979a19",
   almost: "#70b25219",
   overdue: "#da584b19",
};

function getDateDiff(date: string): number {
   const today = new Date();
   const dateTime = new Date(date);
   const day = 1000 * 60 * 60 * 24;
   return Math.trunc((today.getTime() - dateTime.getTime()) / day) * -1;
}

export function formatDate(date: string) {
   const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
   };

   const dateTime = new Date(date);

   return dateTime.toLocaleDateString("en", options).toUpperCase();
}

export function formatDueDate(dueDate: string): string {
   const timeLeft = getDateDiff(dueDate);

   if (timeLeft === 0) {
      return "TODAY";
   }
   if (timeLeft === 1) {
      return "TOMORROW";
   }
   if (timeLeft === -1) {
      return "YESTERDAY";
   }

   const formattedDueDate = formatDate(dueDate);

   return formattedDueDate;
}

export function getDueDateFontColor(dueDate: string): string {
   const timeLimit = 0;
   const timeLeft = getDateDiff(dueDate);

   if (timeLeft < timeLimit) {
      return dueDateFontColor.due;
   } else if (timeLeft < 2) {
      return dueDateFontColor.almost;
   } else {
      return dueDateFontColor.due;
   }
}

export function getDueDateBackgroundColor(dueDate: string): string {
   const timeLimit = 0;
   const timeLeft = getDateDiff(dueDate);

   if (timeLeft < timeLimit) {
      return dueDateBackgroundColor.overdue;
   } else if (timeLeft < 2) {
      return dueDateBackgroundColor.almost;
   } else {
      return dueDateBackgroundColor.due;
   }
}
