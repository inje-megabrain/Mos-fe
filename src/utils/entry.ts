import { IEntry } from "../types/entry";
import { v4 } from "uuid";

export const entrydata = [
  {
    name: "hel",
    isDir: true,
    ext: "",
  },
  {
    name: "EntryTest",
    isDir: true,
    ext: "txt",
  },
  // {
  //   id: "3",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "4",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "5",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "6",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "7",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "8",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "9",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "10",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "11",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "12",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "13",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "14",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "15",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "16",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "17",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "18",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "19",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
  // {
  //   id: "20",
  //   name: "EntryTest",
  //   isDir: true,
  //   ext: "txt",
  //   path: "desktop/entry.txt",
  // },
];

export const transformEntry = (
  rawEntry: Omit<IEntry, "id" | "path">[],
  currentPath: string
) => {
  return rawEntry.map((en) => ({
    ...en,
    path: `${currentPath === "/" ? "" : "/"}/${en.name}`,
    id: v4(),
  }));
};
