import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${'existing-project/'}${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

export async function s3UploadModel(file,date1,date2) {
  const date1string = JSON.stringify(date1);
  const date2string = JSON.stringify(date1);
  const filename = `${'training-data/'}${'intervention='}${date1string.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g)}${'persistence='}${date2string.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g)}${'filename='}${file.name}`;
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}