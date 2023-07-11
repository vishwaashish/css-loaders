// import path from 'path'
// import fs from 'fs/promises'

// export default async function handler(req: any, res: any) {
//   //Find the absolute path of the json directory
//   const jsonDirectory = path.join(process.cwd(), 'json')
//   //Read the json data file data.json
//   const fileContents = await fs.readFile(
//     process.cwd() + '\\assets\\scss\\loader\\_loader1.scss',
//     'utf8',
//   )

//   console.log(fileContents, process.cwd(), 'fileContents')
//   //Return the content of the data file in json format
//   //   res.status(200).text('Hello')
//   res.status(200).json({
//     css: fileContents,
//   })
// }
