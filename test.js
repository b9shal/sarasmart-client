import fs from "fs";

// const filesDir = fs.readdirSync("./src/components");

function getAllFiles(dir, allFilesList = []) {
  const files = fs.readdirSync(dir);
  //   console.log(fs.statSync(files[0]).isDirectory());

  console.log(files);

  files.map((file) => {
    const isFile = file.split(".")[1];

    if (isFile === "js") {
      console.log(file + " is a js file");
    }

    getAllFiles(file);
  });

  return allFilesList;
}

console.log(getAllFiles("./src/components"));
