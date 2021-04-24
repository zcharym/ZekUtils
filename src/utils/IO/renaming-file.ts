import fs from 'fs'
// Read directory

// TODO reworking
fs.readdir('./', (err, files) => {
  console.log(files)
  // Cicle files on current folder
  for (const file of files) {
    // Test regular expression
    const reg = /^\d+\. (.+)/g.exec(file)
    if (reg) {
      // Add more logic to rename file
      fs.rename(file, reg[1], err => {
        console.log('Renaming', file, 'to', 'newFile.txt')
        if (err) throw err
      })
    }
  }
})
