import fs from "fs/promises";
import path from "path";
// type
import { NotificationTypeData } from '../app/Components/Notification'

export async function getMainPageData() {
  return [
    {
      message: "Message 1",
      title: "Title 1",
      type: "info"
    },
    {
      message: "Message 2",
      title: "Title 2",
      type: "info"
    },
    {
      message: "Message 3",
      title: "Title 3",
      type: "info"
    },
    {
      message: "Message 4",
      title: "Title 4",
      type: "info"
    },
    {
      message: "Message 5",
      title: "Title 5",
      type: "info"
    },
    {
      message: "Message 6",
      title: "Title 6",
      type: "info"
    }
  ] as NotificationTypeData[];
}
