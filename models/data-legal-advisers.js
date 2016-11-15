var search = [

  {
    "id": 1,
    "personal-details": {
      "title": "Mr",
      "firstname": "Billy",
      "lastname": "Smith",
      "dob": "1970-04-04",
      "age": "46",
      "gender": "Male",
      "urn": "9012466",
      "address": {
        "address1": "7 Rock Road",
        "address2": "",
        "town": "London",
        "postcode": "SE3 8YH"
      },
      "email": "",
      "phone": "",
      "mobile": ""
    },
    "case-details": {
      "status": "Awaiting plea",
      "prosecutor": "Transport for London",
      "charge-date": "2016-01-21",
      "notice-served": "2016-09-30",
    },
    "offence": {
      "title": "Passenger used ticket issued for another person",
      "date": "2016-02-18",
      "statement-of-facts": "I, Inspector Morse, was suspicious as the defendant kept moving seats away from me. When asked for a ticket he replied &ldquo;I don&rsquo;t have one as I am not really on this train, you&rsquo;re seeing an illusion&rdquo;&hellip; <a href=\"#\">More</a>",
      "mitigation": "I picked up my partner&rsquo;s ticket instead of my own when I left my house.",
      "plea": "No plea received",
      "decision": "Financial penalty",
      "collection-order-confirmed": "true",
      "reason-for-deducting-from-benefits": "Compensation ordered",
      "reason-for-attaching-to-earnings": "Compensation ordered",
      "payment-method": "Pay direct to court",
      "reserve-terms": "Lump sum within 14 days",
      "defendant-pay": "Lump sum within 14 days",
      "reason-for-not-deducting-from-benefits": "No information from the defendant",
      "reason-for-deducting-from-benefits": "Compensation ordered",
      "fine-band-applied": "Band A",
      "fine": "220.00",
      "compensation": "3.12",
      "cost": "125.00",
      "surcharge": "30.00"
    },
    "employment": {
      "status": "Employed",
      "national-insurance-number": "LC 59 17 17 B",
      "employer-name": "Ministry of Justice",
      "employee-number": "e902938480",
      "employer-address": {
        "address1": "102 Petty France",
        "address2": "",
        "town": "London",
        "postcode": "SW1H 9AJ"
      },
      "employer-telephone": "020 3334 3555",
      "pay": {
        "frequency": "",
        "amount": ""
      },
      "receiving-benefits": "",
    },
    "files": {
      "file": [
        {
          "csv": true,
          "uploaded": "2016-05-10",
          "time": "9:32am",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status": "Being checked",
          "url": ""
        },
        {
          "csv": true,
          "uploaded": "2016-05-09",
          "time": "2:57pm",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status":   "<span class=\"text-error\">Rejected &ndash; errors found</span>",
          "url":      "check-csv-uploads/report/errors/1"
        },
        {
          "csv": true,
          "uploaded": "2016-05-09",
          "time": "2:57pm",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status":   "Sent to court",
          "url":      "check-csv-uploads/report/success/1"
        },
        {
          "csv": true,
          "uploaded": "2016-05-09",
          "time": "10:14am",
          "filename": "case-123456789",
          "filetype": "CSV",
          "status":   "Sent to court",
          "url":      "check-csv-uploads/report/success/1"
        }
      ]
    },
    "related-documents": {
      "document": [
        {
          "show": true,
          "id": "sjp-notice",
          "name": "documentNotice",
          "title": "SJP notice",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": true,
          "id": "previous-convictions",
          "name": "previousConvictions",
          "title": "previous convictions",
          "file-type": "PDF",
          "file-size": "514KB",
          "file-pages": "2 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": false
        },
        {
          "show": false,
          "id": "plea-document",
          "name": "pleaDocument",
          "title": "plea document",
          "file-type": "PDF",
          "file-size": "560KB",
          "file-pages": "10 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": true,
          "id": "statement-income",
          "name": "statementIncome",
          "title": "statement of income and outgoings (MC100)",
          "file-type": "PDF",
          "file-size": "256KB",
          "file-pages": "3 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        },
        {
          "show": false,
          "id": "other-document",
          "name": "otherDocument",
          "title": "other document",
          "file-type": "PDF",
          "file-size": "458KB",
          "file-pages": "9 pages",
          "file-uploaded-date": "2016-01-15",
          "file-path": "#",
          "can-remove": true
        }
      ]
    }
  }

];

exports.getSearchEntries = function() {
  return search;
}

exports.getSearchEntry = function(id) {
  for(var i=0; i < search.length; i++) {
    if(search[i].id == id) return search[i];
  }
}
