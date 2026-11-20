const SHEET_NAME = 'Form Submissions';
const HEADERS = ['Submitted At', 'WhatsApp Number', 'Email', 'Design Requirement'];

function doGet() {
  return jsonOutput({ ready: true });
}

function doPost(event) {
  const parameters = event && event.parameter ? event.parameter : {};

  if (parameters.website) {
    return jsonOutput({ success: true });
  }

  const whatsapp = String(parameters.whatsapp || '').trim();
  const email = String(parameters.email || '').trim();
  const designRequirement = String(parameters.designRequirement || '').trim();

  if (
    !/^\+?[0-9][0-9\s().-]{4,39}$/.test(whatsapp)
    || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    || email.length > 254
    || !designRequirement
    || designRequirement.length > 4000
  ) {
    return jsonOutput({ success: false });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if (!spreadsheet) {
      throw new Error('This Apps Script must be bound to the submissions spreadsheet.');
    }

    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    sheet.getRange('B:D').setNumberFormat('@');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }
    sheet.appendRow([
      new Date(),
      whatsapp,
      asPlainText(email),
      asPlainText(designRequirement),
    ]);

    return jsonOutput({ success: true });
  } catch (error) {
    console.error(error);
    return jsonOutput({ success: false });
  } finally {
    lock.releaseLock();
  }
}

function asPlainText(value) {
  return /^[=+\-@]/.test(value) ? `'${value}` : value;
}

function jsonOutput(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
