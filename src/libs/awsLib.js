import { Storage } from "aws-amplify";
import { Auth } from "aws-amplify";



export async function s3Upload(file,selectedid) {
  let user = await Auth.currentAuthenticatedUser();
  const { attributes } = user;
  const filename = `${'existing-project/'}${'email='}${user.attributes.email}${'model='}${selectedid}${'file='}${file.name}`;
  
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

export async function s3UploadModel(file,date1,date2) {
  let user = await Auth.currentAuthenticatedUser();
  const { attributes } = user;
  const date1string = JSON.stringify(date1);
  const date2string = JSON.stringify(date2);
  const filename = `${'training-data/'}${'email='}${user.attributes.email}${'intervention='}${date1string.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g)}${'persistence='}${date2string.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g)}${'filename='}${file.name}`;
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}