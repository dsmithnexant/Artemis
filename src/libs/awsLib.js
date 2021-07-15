import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${'existing-project/'}${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

export async function s3UploadModel(file) {
  const filename = `${'training-data/'}${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}