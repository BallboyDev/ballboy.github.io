const fs = require('fs')

// console.log(fs)

const json = {
    "posts": {
        "20240101_chapter_1": "",
        "20240102_chapter_2": "",
        "20240103_chapter_3": "",
        "20240104_chapter_4": "",
        "folder1": {
            "20240105_chapter_5": "",
            "20240106_chapter_6": "",
            "20240107_chapter_7": "",
            "20240108_chapter_8": "",
            "20240109_chapter_9": ""
        },
        "folder2": {
            "20240110_chapter_10": "",
            "20240111_chapter_11": "",
            "20240112_chapter_12": "",
            "20240113_chapter_13": ""
        }
    },
    "main": ""
}

fs.writeFile('_markdown/index.json', JSON.stringify(json), (err) => {
    console.log(err)
})

