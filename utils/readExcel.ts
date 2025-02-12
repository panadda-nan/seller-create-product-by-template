//import excel from 'exceljs';
// import { test, expect } from '@playwright/test';
// import Excel, { Workbook } from 'exceljs';


//const ExcelJS = require('exceljs');
//const workbook = new ExcelJS.Workbook();  

/** a function that is used to read or retrieve the names of all sheets (worksheets or tabs) in an Excel workbook */
export function readNameOfAllSheet(workbook,filePath) {
    try {
      // Load the workbook from the file
      workbook.xlsx.readFile(filePath);
  
      // Get an array of all sheet names
      const sheetNames = workbook.worksheets.map(sheet => sheet.name);
  
      //console.log('Sheet names:', sheetNames); // Log the sheet names
      console.log('Sheet length:', sheetNames.length); // Log the sheet names

      return sheetNames;  //return sheet name list
    } catch (error) {
      console.error('Error reading Excel file:', error.message);
      throw error;
    }
  }

export function returnCategoryName(workbook,lang,filePath,sheetName){
      workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet(sheetName);
      const categoryD6 = worksheet.getCell(`D6`).value;
      const categoryD8 = worksheet.getCell(`D8`).value;
      const categoryC6 = worksheet.getCell(`C6`).value;
      const categoryC8 = worksheet.getCell(`C8`).value;
      const categoryE6 = worksheet.getCell(`E6`).value;
      const categoryE8 = worksheet.getCell(`E8`).value;
      const categoryF6 = worksheet.getCell(`F6`).value;
      const categoryF8 = worksheet.getCell(`F8`).value;

        // console.log('CATE C TH ' + categoryC6);
        // console.log('CATE C EN ' + categoryC8);
        console.log('CATE D TH ' + categoryD6);
        // console.log('CATE D EN ' + categoryD8);
        // console.log('CATE E TH ' + categoryE6);
        // console.log('CATE E EN ' + categoryE8);
        // console.log('CATE E TH ' + categoryF6);
        // console.log('CATE E EN ' + categoryF8);
        

          if(lang == 'th' && categoryF6 != null){
            return categoryF6;
          }else if(lang == 'th' && categoryE6 != null){
            return categoryE6;
          } else if (lang == 'th' && categoryD6 != null){
            return categoryD6;
          }else if(lang == 'th' && categoryC6 != null){
            return categoryC6;
          }
          
          if(lang == 'en' && categoryF8 != null){
            return categoryF8;
          }else if(lang == 'en' && categoryE8 != null){
            return categoryE8;
          }else if(lang == 'en' && categoryD8 != null){
            return categoryD8;
          }else if(lang == 'en' && categoryC8 != null) {
            return categoryC8;
          }
          
}

export function returnExpectCategoryName(workbook,lang,filePath,sheetName){
  workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet(sheetName);
  const categoryB6 = worksheet.getCell(`B6`).value;
  const categoryB8 = worksheet.getCell(`B8`).value;
  const categoryD6 = worksheet.getCell(`D6`).value;
  const categoryD8 = worksheet.getCell(`D8`).value;
  const categoryC6 = worksheet.getCell(`C6`).value;
  const categoryC8 = worksheet.getCell(`C8`).value;
  const categoryE6 = worksheet.getCell(`E6`).value;
  const categoryE8 = worksheet.getCell(`E8`).value;
  const categoryF6 = worksheet.getCell(`F6`).value;
  const categoryF8 = worksheet.getCell(`F8`).value;

    // console.log('CATE C TH ' + categoryC6);
    // console.log('CATE C EN ' + categoryC8);
    // console.log('CATE D TH ' + categoryD6);
    // console.log('CATE D EN ' + categoryD8);
    // console.log('CATE E TH ' + categoryE6);
    // console.log('CATE E EN ' + categoryE8);
    // console.log('CATE E TH ' + categoryF6);
    // console.log('CATE E EN ' + categoryF8);
    

      if(lang == 'th' && categoryF6 != null){
        return categoryB6 + " > " + categoryC6 + " > " + categoryD6 + " > " + categoryE6 + " > " + categoryF6;
      }else if(lang == 'th' && categoryE6 != null){
        return categoryB6 + " > " + categoryC6 + " > " + categoryD6 + " > " + categoryE6;
      } else if (lang == 'th' && categoryD6 != null){
        return categoryB6 + " > " + categoryC6 + " > " + categoryD6;
      }else if(lang == 'th' && categoryC6 != null){
        return categoryB6 + " > " + categoryC6;
      }else if(lang == 'th' && categoryB6 != null){
        return categoryB6
      }
      
      if(lang == 'en' && categoryF8 != null){
        return categoryB8 + " > " + categoryC8 + " > " + categoryD8 + " > " + categoryE8 + " > " + categoryF8;
      }else if(lang == 'th' && categoryE8 != null){
        return categoryB8 + " > " + categoryC8 + " > " + categoryD8 + " > " + categoryE8;
      } else if (lang == 'th' && categoryD8 != null){
        return categoryB8 + " > " + categoryC8 + " > " + categoryD8;
      }else if(lang == 'th' && categoryC8 != null){
        return categoryB8 + " > " + categoryC8;
      }else if(lang == 'th' && categoryB8 != null){
        return categoryB8
      }
      
}

export async function readExcelColumn(columnName: string,workbook,filePath,sheetName): Promise<string[]> {
  try {
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(sheetName);
   
   //const lastRow = worksheet.getColumn(columnName).getLastCell();
   //console.log('lastRow ',lastRow);

  //  const columnDataX = worksheet.getColumn(columnName);
  //  console.log('ฉันอยากรู้X ',columnDataX);

   const columnData = worksheet.getColumn(columnName).values;
    //console.log('ฉันอยากรู้ ',columnData);

    return columnData;
  } catch (error) {
    console.error(`Error reading Excel file: ${error.message}`);
    return [];
  }
}

// export async function readExcelColumn(columnName: string,workbook,filePath,sheetName): Promise<string[]> {
//       //const workbook = new ExcelJS.Workbook();
//       await workbook.xlsx.readFile(filePath); // Load your Excel file
    
//       const worksheet = workbook.getWorksheet(sheetName); // Change to your sheet name
    
//       const columnData: string[] = [];
    
//       // Iterate through the rows and extract data from the specified column
//       worksheet.eachRow((row, rowNumber) => {
//         if (rowNumber === 0) {
//           // Skip the header row
//           return;
//         }
        
//         const cell = row.getCell(columnName); // Replace 'columnName' with the column name you want to read
//         const cellValue = cell ? cell.value : undefined;
        
//         if (cellValue !== undefined) {
//           if (cellValue !== undefined && cellValue !== null) {
//               columnData.push(cellValue.toString()); // Assuming the column contains strings
//             }
//         }
//       });
    
//       return columnData;
// }

export async function mainReadExcelColumn(columnName,workbook,filePath,sheetName) {
    const columnData = await readExcelColumn(columnName,workbook,filePath,sheetName);
    //console.log(columnData); // Log the values of the specified column
    return columnData;
}  

export async function getColumnCount(filePath,workbook,sheetName) {
  try {
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(sheetName); // Assuming you're interested in the first worksheet
    // Find the last used column in the worksheet

    //const columnCount = worksheet.columns.length;
    let columnCount = 0;
    const firstRow = worksheet.getRow(15);


    firstRow.eachCell((cell) => {
      const cellValue = cell.value;
  
      // Check if the cell has a value
      if (cellValue !== null && cellValue !== undefined) {
        columnCount++;
      }
    });
  
    return columnCount;
  } catch (error) {
    console.error(`Error reading Excel file: ${error.message}`);
    return -1; // Return -1 to indicate an error
  }
}