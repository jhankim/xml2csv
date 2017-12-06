# XML2CSV

Basic XML2CSV script stitched together using existing packages. Main reason behind using `xml2rec` and `json2csv` together is due to lack of CSV column enclosure when using direct `xml2csv` feature provided `xml2rec`.

## Usage

In terminal, clone this repo:

```
$ git clone https://github.com/jhankim/xml2csv.git
$ cd xml2csv
```

Install required packages
```
$ npm install
```

Run the script with the arguments:
```
$ node xml2csv.js -i /input/path/to/feed.xml -o /output/path/to/feed.csv -x XPathToElement
```